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
    Briefcase
} from "lucide-react";

const ProjectManagementInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Foundations of Project Management",
            topics: ["Project Life Cycle & Phases", "Project Constraints (Scope, Time, Cost)", "Role of a Project Manager", "Stakeholder Identification & Management"]
        },
        {
            title: "Module 2: Project Initiation & Planning",
            topics: ["Creating a Project Charter", "Work Breakdown Structure (WBS)", "Resource Planning & Allocation", "Risk Management Planning"]
        },
        {
            title: "Module 3: Agile & Scrum Framework",
            topics: ["Agile Manifesto & Principles", "Scrum Roles: Scrum Master, Product Owner", "Sprint Planning & Review", "Kanban vs Scrum"]
        },
        {
            title: "Module 4: Project Execution & Monitoring",
            topics: ["Quality Management Systems", "Performance KPI Tracking", "Change Control Processes", "Earned Value Management (EVM)"]
        },
        {
            title: "Module 5: Leadership & Team Dynamics",
            topics: ["Motivational Theories (Maslow, Herzberg)", "Conflict Resolution Techniques", "Effective Communication Strategies", "Virtual Team Management"]
        },
        {
            title: "Module 6: PMP & CAPM Exam Prep",
            topics: ["PMBOK Guide 7th Edition Overview", "Exam Application Process", "Scenario-based Question Analysis", "Mock Exams & Time Management"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-5"
            >
                <h1 className="fw-bold text-primary display-4 mb-3">Mastering Project Management</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Lead teams, manage complex budgets, and deliver world-class products. Master the methodologies that drive global business success.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">PMP Aligned</span>
                    <span className="badge bg-success px-3 py-2">Agile & Scrum</span>
                    <span className="badge bg-dark px-3 py-2">Leadership Path</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <Briefcase size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Project Management?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        As companies grow more complex, the demand for skilled **Project Managers** has skyrocketed. Whether it's Tech, Construction, or Finance, the ability to deliver on time and under budget is the most valuable skill in any industry.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Users className="text-primary" size={20} />
                                                <span className="small fw-semibold">Stakeholder Excellence</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Agile Delivery</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Risk Mitigation</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Global Standards</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* PM AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI-Enhanced Project Management</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Using Artificial Intelligence to predict risks and automate scheduling.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Predictive Resource Planning</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Master AI tools that predict project bottlenecks before they happen.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-info" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Automated Sprint Insights</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Leverage LLMs to summarize sprint data and generate stakeholder reports instantly.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">AI PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Management Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="pmSyllabus">
                        {syllabus.map((module, index) => (
                            <div className="accordion-item border-0 border-bottom" key={index}>
                                <h2 className="accordion-header">
                                    <button className={`accordion-button ${activeSection === index ? "" : "collapsed"} bg-white fw-bold py-3`} type="button" onClick={() => toggleAccordion(index)}>
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
                                <Users className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior Project Coordinator</h6>
                                    <p className="small text-muted">Focus on scheduling, reporting and team support.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Scrum Master / Project Manager</h6>
                                    <p className="small text-muted">Leading agile squads and delivering high-value products.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Program Manager / Portfolio Lead</h6>
                                    <p className="small text-muted">Managing multiple projects and aligning with business strategy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Project managers are among the highest-paid non-coding professionals in tech.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher / Coordinator</span>
                                    <span className="text-success fw-bold">₹6 - ₹10 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Experienced PM (5-8 Years)</span>
                                    <span className="text-info fw-bold">₹15 - ₹35 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Director / Sr. Program Manager</span>
                                    <span className="text-warning fw-bold">₹40 - ₹80+ LPA</span>
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
                        <h2 className="fw-bold mb-3">Ready to Lead Large Scale Projects?</h2>
                        <p className="mb-4 opacity-75">Enroll now for 100+ hours of PMP and Agile certification training with 1-on-1 mentorship.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Join Now</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Brochure</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectManagementInfo;
