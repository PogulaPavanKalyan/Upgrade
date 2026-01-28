import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import {
    BookOpen,
    Brain,
    Code,
    Cpu,
    Database,
    Globe,
    Layers,
    Layout,
    Server,
    ShieldCheck,
    Smartphone,
    Terminal,
    Zap,
    ChevronDown,
    ChevronUp,
    Users,
    CheckCircle,
    TrendingUp,
    Clock,
    Focus
} from "lucide-react";

const ProductivityInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Time Management & Prioritization Systems",
            topics: ["The Eisenhower Matrix (Urgent vs Important)", "Getting Things Done (GTD) Workflow", "Time Blocking & Deep Work Techniques", "Mastering your Digital Calendar (Outlook/Google)"]
        },
        {
            title: "Module 2: Habits of Ultra-Productive People",
            topics: ["Atomic Habits Framework", "Designing your Ideal Morning/Evening Routine", "Overcoming Procrastination (The 5-Second Rule)", "Building a 'Second Brain' with PKM Tools"]
        },
        {
            title: "Module 3: Emotional Intelligence (EQ) at Work",
            topics: ["Self-Awareness & Self-Regulation", "Empathy & Social Skills for Collaboration", "The 5 Components of Goleman's EQ Model", "Managing Stress & Burnout Prevention"]
        },
        {
            title: "Module 4: Cognitive Performance & Focus",
            topics: ["The Science of Focus & Flow State", "Optimizing Nutrition for Brain Health", "Meditation & Mindfulness for Professionals", "Digital Minimalism & App Boundary Setting"]
        },
        {
            title: "Module 5: Project Management for Individuals",
            topics: ["Personal Kanban Systems (Trello/Notion)", "Managing Competing Deadlines", "The Art of Saying 'No' Diplomatically", "Delegation Skills for Individual Contributors"]
        },
        {
            title: "Module 6: Long-term Goal Setting & Review",
            topics: ["SMART & HARD Goal Frameworks", "Weekly/Monthly/Quarterly Review Systems", "Building a Vision Map for the Next 5 Years", "Financial Productivity & Wealth Basics"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Clock size={48} className="text-primary" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Peak Productivity & EQ</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Take control of your time and your mind. Learn the systems used by high-achievers to maximize output, emotional intelligence, and long-term fulfillment.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">High Performer</span>
                    <span className="badge bg-dark px-3 py-2">EQ Master</span>
                    <span className="badge bg-info text-dark px-3 py-2">Deep Work Path</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <Zap size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Productivity & EQ?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        In an age of constant distraction, **Focus** is a superpower. Combining technical efficiency with high **Emotional Intelligence** creates a resilient professional who outperforms the competition with less effort.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-success" size={20} />
                                                <span className="small fw-semibold">Exponential Output</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">Mental Resilience</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Users className="text-info" size={20} />
                                                <span className="small fw-semibold">Social Mastery</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <CheckCircle className="text-warning" size={20} />
                                                <span className="small fw-semibold">Goal Completion</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Productivity AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI for Personal Automation</h2>
                                    <p className="lead mb-4" style={{ color: "#ffffff" }}>Using AI as your virtual chief of staff to manage tasks, schedules, and learning pipelines.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Habit Tracking</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use predictive analytics to identify when you're most productive and shield your deep work hours.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Auto-Task Sorting</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to build autonomous workflows that triage your emails and prioritize your 'To-Do' list based on your long-term goals.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">PEAK AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Productivity & EQ Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="productivitySyllabus">
                        {syllabus.map((module, index) => (
                            <div className="accordion-item border-0 border-bottom" key={index}>
                                <h2 className="accordion-header">
                                    <button className={`accordion-button ${activeSection === index ? "" : "collapsed"} bg-white fw-bold py-3 shadow-none text-dark`} type="button" onClick={() => toggleAccordion(index)}>
                                        <div className="d-flex justify-content-between w-100 align-items-center pe-3">
                                            <span>{module.title}</span>
                                            {activeSection === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </div>
                                    </button>
                                </h2>
                                <div className={`accordion-collapse collapse ${activeSection === index ? "show" : ""}`}>
                                    <div className="accordion-body bg-light bg-opacity-50">
                                        <ul className="list-group list-group-flush bg-transparent">
                                            {module.topics.map((topic, tIndex) => (
                                                <li key={tIndex} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3">
                                                    <div className="bg-primary rounded-circle" style={{ width: "6px", height: "6px" }}></div>
                                                    <span className="text-secondary">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-primary" /> Life Outcome Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Organized Professional</h6>
                                    <p className="small text-muted">Zero-In-Box, clear focus, and disciplined daily systems.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">EQ Leader / High-Achiever</h6>
                                    <p className="small text-muted">Managing complex social dynamics and leading teams with empathy.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Fulfilled Strategic Leader</h6>
                                    <p className="small text-muted">Sustaining peak performance for decades without burnout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Impact ROI</h4>
                            <p className="text-muted small">Investing in personal productivity yields the highest possible ROI by recovering 10+ hours of wasted time per week.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Time Recovered</span>
                                    <span className="text-success fw-bold">10-15 Hours/Week</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "55%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Focus Level</span>
                                    <span className="text-info fw-bold">3x Increase</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Career Acceleration</span>
                                    <span className="text-warning fw-bold">Top 1% Tier</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-dark text-white p-5 rounded-4 shadow-lg border border-primary">
                        <h2 className="fw-bold mb-3">Reclaim Your Life & Career</h2>
                        <p className="mb-4 opacity-75">Enroll now for 40+ hours of Peak Productivity and Emotional Intelligence Mastery.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-primary btn-lg px-5 fw-bold">Unlock Potential</button>
                            <button className="btn btn-outline-light btn-lg px-4">Watch Intro Video</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductivityInfo;
