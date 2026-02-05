import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";
import {
    ArrowLeft,
    Plus,
    Trash2,
    Save,
    CheckCircle,
    HelpCircle,
    Clock,
    Target,
    ClipboardList,
    BookOpen
} from "lucide-react";
import "../AdminStyles/AdminAddExam.css";

const AdminAddExam = () => {
    const { courseId } = useParams();
    const { token } = useAuth();
    const navigate = useNavigate();

    const [examData, setExamData] = useState({
        title: "",
        totalMarks: "",
        passMarks: "",
        durationMinutes: "",
        course: { id: courseId ? parseInt(courseId) : "" }
    });

    const [courses, setCourses] = useState([]);

    const [savedExam, setSavedExam] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({
        questionText: "",
        options: [
            { optionText: "", correct: false },
            { optionText: "", correct: false },
            { optionText: "", correct: false },
            { optionText: "", correct: false }
        ]
    });

    const [loading, setLoading] = useState(false);

    /* --- Fetch Courses if no ID --- */
    React.useEffect(() => {
        if (!courseId) {
            const fetchCourses = async () => {
                try {
                    const res = await BaseUrl.get("/Course", {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setCourses(res.data || []);
                    console.log("Fetched Courses for selection:", res.data);
                } catch (err) {
                    console.error("Failed to fetch courses", err);
                }
            };
            fetchCourses();
        }
    }, [courseId, token]);

    /* --- Step 1: Create Exam --- */
    const handleCreateExam = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = {
                title: examData.title,
                total_marks: Number(examData.totalMarks) || 0,
                pass_marks: Number(examData.passMarks) || 0,
                duration_minutes: Number(examData.durationMinutes) || 0,
                course: {
                    id: Number(examData.course.id) || 0
                }
            };
            console.log("Sending Exam Payload (Snake Case):", payload);
            const response = await BaseUrl.post("admin/exam", payload, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSavedExam(response.data);
            alert("Exam header created successfully!");
        } catch (error) {
            console.error("Error creating exam:", error);
            if (error.response?.data) {
                console.log("Backend Error Details:", error.response.data);
                const msg = typeof error.response.data === 'string'
                    ? error.response.data
                    : JSON.stringify(error.response.data);
                alert("Failed to create exam: " + msg);
            } else {
                alert("Failed to create exam. Check console for details.");
            }
        } finally {
            setLoading(false);
        }
    };

    /* --- Step 2: Add Question --- */
    const handleAddQuestion = async () => {
        if (!currentQuestion.questionText) {
            alert("Please enter question text");
            return;
        }

        const hasCorrectOption = currentQuestion.options.some(opt => opt.correct);
        if (!hasCorrectOption) {
            alert("Please mark one option as correct");
            return;
        }

        setLoading(true);
        try {
            // 1. Save Question
            const qRes = await BaseUrl.post(`admin/question/${savedExam.id}`, {
                questionText: currentQuestion.questionText
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const savedQ = qRes.data;

            // 2. Save Options for this Question
            for (const option of currentQuestion.options) {
                await BaseUrl.post(`admin/options/${savedQ.id}`, {
                    optionText: option.optionText,
                    correct: option.correct
                }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            }

            // 3. Update local list and reset current
            setQuestions([...questions, { ...currentQuestion, id: savedQ.id }]);
            setCurrentQuestion({
                questionText: "",
                options: [
                    { optionText: "", correct: false },
                    { optionText: "", correct: false },
                    { optionText: "", correct: false },
                    { optionText: "", correct: false }
                ]
            });

            alert("Question and options added!");
        } catch (error) {
            console.error("Error adding question", error);
            alert("Failed to add question");
        } finally {
            setLoading(false);
        }
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...currentQuestion.options];
        newOptions[index].optionText = value;
        setCurrentQuestion({ ...currentQuestion, options: newOptions });
    };

    const handleMarkCorrect = (index) => {
        const newOptions = currentQuestion.options.map((opt, i) => ({
            ...opt,
            correct: i === index
        }));
        setCurrentQuestion({ ...currentQuestion, options: newOptions });
    };

    return (
        <div className="admin-exam-container">
            <div className="exam-card">
                <div className="exam-header">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={20} />
                    </button>
                    <h1>Create New Exam</h1>
                </div>

                {!savedExam ? (
                    /* SHOW EXAM FORM */
                    <form className="exam-form" onSubmit={handleCreateExam}>
                        <div className="form-group">
                            <label><ClipboardList size={18} /> Exam Title</label>
                            <input
                                type="text"
                                required
                                value={examData.title}
                                onChange={(e) => setExamData({ ...examData, title: e.target.value })}
                                placeholder="e.g. Mid-Term Assessment"
                            />
                        </div>

                        {!courseId && (
                            <div className="form-group">
                                <label><BookOpen size={18} /> Select Course</label>
                                <select
                                    required
                                    value={examData.course.id}
                                    onChange={(e) => setExamData({ ...examData, course: { id: e.target.value } })}
                                    className="course-select"
                                >
                                    <option value="">-- Choose a Course --</option>
                                    {courses.map(c => (
                                        <option key={c.id} value={c.id}>{c.course_Name}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="form-row">
                            <div className="form-group">
                                <label><Target size={18} /> Total Marks</label>
                                <input
                                    type="number"
                                    required
                                    value={examData.totalMarks}
                                    onChange={(e) => setExamData({ ...examData, totalMarks: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label><CheckCircle size={18} /> Pass Marks</label>
                                <input
                                    type="number"
                                    required
                                    value={examData.passMarks}
                                    onChange={(e) => setExamData({ ...examData, passMarks: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label><Clock size={18} /> Duration (Mins)</label>
                                <input
                                    type="number"
                                    required
                                    value={examData.durationMinutes}
                                    onChange={(e) => setExamData({ ...examData, durationMinutes: e.target.value })}
                                />
                            </div>
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? "Creating..." : "Set Exam Header"}
                        </button>
                    </form>
                ) : (
                    /* SHOW QUESTION BUILDER */
                    <div className="question-builder">
                        <div className="exam-info-bar">
                            <h3>Exam: {savedExam.title}</h3>
                            <p>{questions.length} Questions added so far</p>
                        </div>

                        <div className="question-form">
                            <div className="form-group">
                                <label><HelpCircle size={18} /> Question Text</label>
                                <textarea
                                    value={currentQuestion.questionText}
                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, questionText: e.target.value })}
                                    placeholder="Enter the question here..."
                                />
                            </div>

                            <div className="options-grid">
                                {currentQuestion.options.map((opt, index) => (
                                    <div key={index} className={`option-input ${opt.correct ? 'correct' : ''}`}>
                                        <input
                                            type="text"
                                            placeholder={`Option ${index + 1}`}
                                            value={opt.optionText}
                                            onChange={(e) => handleOptionChange(index, e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="correct-toggle"
                                            onClick={() => handleMarkCorrect(index)}
                                        >
                                            {opt.correct ? <CheckCircle size={20} /> : <div className="circle-placeholder" />}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button className="add-q-btn" onClick={handleAddQuestion} disabled={loading}>
                                {loading ? "Saving..." : <><Plus size={20} /> Add Question to Exam</>}
                            </button>
                        </div>

                        {/* LIST OF ADDED QUESTIONS */}
                        <div className="added-questions">
                            <h4>Added Questions</h4>
                            {questions.map((q, idx) => (
                                <div key={idx} className="q-preview-item">
                                    <span>{idx + 1}. {q.questionText}</span>
                                    <div className="q-preview-meta">
                                        {q.options.find(o => o.correct)?.optionText && (
                                            <span className="correct-label">Ans: {q.options.find(o => o.correct).optionText}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="final-actions">
                            <button className="finish-btn" onClick={() => navigate(-1)}>
                                Finish & Go Back
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminAddExam;
