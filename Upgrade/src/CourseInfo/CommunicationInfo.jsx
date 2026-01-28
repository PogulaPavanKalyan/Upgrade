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
    MessageCircle,
    Mic2,
    PenTool
} from "lucide-react";

const CommunicationInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Foundations of Interpersonal Communication",
            topics: ["The Communication Cycle (Encoder/Decoder)", "Mastering Active Listening Skills", "Non-Verbal Communication and Body Language", "Cross-Cultural Communication Strategies"]
        },
        {
            title: "Module 2: Public Speaking & Presentation Mastery",
            topics: ["The Pyramid Principle for Structured Thought", "Overcoming Glossophobia (Fear of Speaking)", "Storytelling Techniques for Business", "Managing Q&A and Difficult Audiences"]
        },
        {
            title: "Module 3: Professional Business Writing",
            topics: ["Writing Effective Emails & Proposals", "The Art of the One-Pager", "Grammar & Style for Corporate Impact", "AI-Assisted Writing & Editing Flows"]
        },
        {
            title: "Module 4: PowerPoint & Visual Storytelling",
            topics: ["Slide Design Principles (Less is More)", "Data Visualization for Stakeholders", "Mastering Animations for Impact", "Building High-Stakes Investor Decks"]
        },
        {
            title: "Module 5: Negotiation & Persuasion",
            topics: ["Principles of Influence (Cialdini's Model)", "Negotiating Salary and Deadlines", "Ethical Persuasion in Sales and Leadership", "Handling Conflict with Emotional Intelligence"]
        },
        {
            title: "Module 6: Digital Communication & Personal Brand",
            topics: ["Mastering Virtual Meetings (Zoom/Teams)", "LinkedIn Networking & Content Strategy", "Building an Online Professional Presence", "Personal Communication Portfolio Project"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Mic2 size={48} className="text-primary" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Professional Communication</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    The #1 skill for career progression. Master public speaking, high-impact writing, and the art of visual storytelling to command any room.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">Global Comm Pro</span>
                    <span className="badge bg-dark px-3 py-2">Keynote Ready</span>
                    <span className="badge bg-info text-dark px-3 py-2">Influencer Path</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <MessageCircle size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Communication Skills?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Data shows that **Communication Mastery** is the most significant factor in rapid promotion to leadership. Your ability to translate complex ideas into simple, persuasive narratives is your greatest asset.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-success" size={20} />
                                                <span className="small fw-semibold">Promotion Catalyst</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">High Emotional IQ</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <PenTool className="text-warning" size={20} />
                                                <span className="small fw-semibold">Impactful Writing</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layout className="text-info" size={20} />
                                                <span className="small fw-semibold">Visual Storytelling</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Communication AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #3498db 0%, #2c3e50 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI-Enhanced Communication</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Using generative AI to draft, polish, and optimize your message for maximum clarity and persuasion.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Sentiment Optimization</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use AI to analyze the tone of yours and others' messages to avoid conflict and align goals.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Visual Design</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to generate stunning slide decks and visual assets in seconds with specialized AI tools.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">COMM AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Multi-Domain Comm Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="commSyllabus">
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
                                <Users className="text-primary" /> Career Impact
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Effective Professional</h6>
                                    <p className="small text-muted">Excellence in meetings, documentation, and small-group persuasion.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Thought Leader / Evangelist</h6>
                                    <p className="small text-muted">Speaking at conferences and writing industry-leading articles.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Impactful CEO / Executive</h6>
                                    <p className="small text-muted">Driving global corporate vision through masterful storytelling and public presence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary & Market Value</h4>
                            <p className="text-muted small">The "Communication Premium" is estimated to increase annual earning potential by 20-30% in professional services.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Skilled Communicator</span>
                                    <span className="text-success fw-bold">+25% Market Value</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "50%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Leadership Ready</span>
                                    <span className="text-info fw-bold">+45% Market Value</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Executive Mastery</span>
                                    <span className="text-warning fw-bold">+80% Market Value</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-primary text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Become a Master of Influence</h2>
                        <p className="mb-4 opacity-75">Enroll now for 60+ hours of Public Speaking, Business Writing, and PowerPoint Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Start Mastering</button>
                            <button className="btn btn-outline-light btn-lg px-4">Watch Presentation Lab</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationInfo;
