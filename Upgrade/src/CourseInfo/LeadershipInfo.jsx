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
    Star,
    Award
} from "lucide-react";

const LeadershipInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Foundations of Contemporary Leadership",
            topics: ["Leadership vs Management", "Building a Vision & Strategic Thinking", "Authentic & Servant Leadership Models", "Ethics & Corporate Responsibility"]
        },
        {
            title: "Module 2: High-Performance Team Building",
            topics: ["Stages of Team Development (Tuckman's Model)", "Recruiting and Retention Strategies", "Creating a Culture of Accountability", "Conflict Resolution & Negotiation"]
        },
        {
            title: "Module 3: Strategic Decision Making",
            topics: ["Data-driven Decision Systems", "Cognitive Biases in Leadership", "Risk Assessment & Mitigation", "Leading through Uncertainty and Crisis"]
        },
        {
            title: "Module 4: Change Management & Innovation",
            topics: ["Lewin's & Kotter's Change Models", "Fostering an Experimental Mindset", "Overcoming Resistance to Change", "Scaling Innovation across Departments"]
        },
        {
            title: "Module 5: Influence & Executive Presence",
            topics: ["Stakeholder Mapping & Engagement", "Advanced Persuasion Techniques", "Public Speaking and Masterful Presentation", "Building your Professional Brand"]
        },
        {
            title: "Module 6: Coaching & Talent Development",
            topics: ["Mentoring vs Coaching Frameworks", "The GROW Model for Performance", "Succession Planning Systems", "Giving and Receiving Radical Candor"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Award size={48} className="text-primary" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Executive Leadership</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Influence, inspire, and drive impact. Master the strategic and interpersonal skills required to lead modern, high-growth organizations.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">C-Suite Ready</span>
                    <span className="badge bg-dark px-3 py-2">Strategy Expert</span>
                    <span className="badge bg-info text-dark px-3 py-2">People First</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <Star size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Professional Leadership?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        As technologies evolve, the demand for high-level **Strategic Leadership** only grows. Leading teams through transformation requires a unique blend of emotional intelligence and business acumen.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-success" size={20} />
                                                <span className="small fw-semibold">Growth Mindset</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">Complex EQ Skills</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Global Strategy</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Users className="text-warning" size={20} />
                                                <span className="small fw-semibold">Team Synergy</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Leadership AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI for Strategic Leadership</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Augmenting your decision-making with AI-driven insights and automated team operations.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Augmented Decisions</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use predictive tools to model the impact of strategic choices before executing.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Autonomous Management</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to automate routine reporting and feedback loops using AI managers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">EXEC AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Leadership Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="leadershipSyllabus">
                        {syllabus.map((module, index) => (
                            <div className="accordion-item border-0 border-bottom" key={index}>
                                <h2 className="accordion-header">
                                    <button className={`accordion-button ${activeSection === index ? "" : "collapsed"} bg-white fw-bold py-3 shadow-none`} type="button" onClick={() => toggleAccordion(index)}>
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
                                <Users className="text-primary" /> Leadership Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Rising Manager</h6>
                                    <p className="small text-muted">Transitioning from IC to managing small cross-functional teams.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Director / Business Head</h6>
                                    <p className="small text-muted">Leading entire departments and multiple management levels.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">C-Suite Executive</h6>
                                    <p className="small text-muted">Guiding corporate strategy, culture and global organizational growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary & Market Value</h4>
                            <p className="text-muted small">Certified leadership professionals command the highest salary packages in the global corporate market.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Managerial Level</span>
                                    <span className="text-success fw-bold">₹15 - ₹25 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Sr. Director (8-12 Yrs)</span>
                                    <span className="text-info fw-bold">₹35 - ₹75 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Executive (VP/CEO)</span>
                                    <span className="text-warning fw-bold">₹85 - ₹3 Cr+ LPA</span>
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
                        <h2 className="fw-bold mb-3">Claim Your Seat at the Table</h2>
                        <p className="mb-4 opacity-75">Enroll now for 40+ hours of Strategic Leadership and Executive Management Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Join Leadership Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Speaker Lineup</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LeadershipInfo;
