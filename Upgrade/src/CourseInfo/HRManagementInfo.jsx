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

const HRManagementInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: HR Strategy & Workforce Planning",
            topics: ["Aligning HR with Business Goals", "Job Analysis & Description Design", "Human Resource Information Systems (HRIS)", "Strategic Workforce Forecasting"]
        },
        {
            title: "Module 2: Recruitment & Talent Acquisition",
            topics: ["Modern Sourcing Strategies (LinkedIn, AI Tools)", "Competency-Based Interviewing", "Employer Branding & Value Proposition", "Onboarding Systems for Retention"]
        },
        {
            title: "Module 3: Compensation & Benefits Architecture",
            topics: ["Salary Benchmarking & Structure", "Incentive & Bonus Programs", "Benefits Administration & Compliance", "Managing Employee Perks & Wellness"]
        },
        {
            title: "Module 4: Performance Management & Appraisal",
            topics: ["OKRs vs KPIs Frameworks", "30-60-90 Day Review cycles", "Addressing Underperformance & PIPs", "Continuous Feedback Cultures"]
        },
        {
            title: "Module 5: Learning & Development (L&D)",
            topics: ["Training Needs Analysis (TNA)", "E-learning vs Classroom Training", "Upskilling & Reskilling Strategies", "Succession Planning & High-Potential Tracks"]
        },
        {
            title: "Module 6: Employee Relations & Labor Law",
            topics: ["Disciplinary Action & Grievance Handling", "Diversity, Equity & Inclusion (DEI) Policy", "Labor Laws & Compliance Basics", "Building a Great Place to Work (GPTW) Culture"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Briefcase size={48} className="text-danger" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering HR Management</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Build and lead high-performance organizations. Master recruitment, compensation, and the strategy required to manage a global workforce.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-danger px-3 py-2">Strategic HR</span>
                    <span className="badge bg-dark px-3 py-2">People Analytics</span>
                    <span className="badge bg-info text-dark px-3 py-2">DEI Integrated</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-danger d-flex align-items-center justify-content-center p-4">
                                <Users size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why HR Management?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        People are the ultimate competitive advantage. Strategic **Human Resource Management** is the engine that drives talent density, culture, and long-term business success in the 21st century.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-success" size={20} />
                                                <span className="small fw-semibold">Retention Growth</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">Behavioral Insights</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Global Compliance</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Agile Recruitment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* HR AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #c0392b 0%, #8e44ad 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Generative AI in HR</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Automating the HR lifecycle with intelligent tools for hiring, engagement, and reporting.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-danger bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Candidate Matching</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use machine learning to scan thousands of resumes and find the perfect culture fit instantly.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Automated Policy Bots</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Deploy custom LLMs that answer 90% of employee policy queries, freeing up HR for strategy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">HR AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-danger" /> HR Leadership Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="hrSyllabus">
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
                                                    <div className="bg-danger rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-danger border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-danger" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-danger position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-danger rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">HR Generalist / Recruiter</h6>
                                    <p className="small text-muted">Daily operations, candidate sourcing and employee data management.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-danger rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">HR Business Partner (HRBP)</h6>
                                    <p className="small text-muted">Managing entire departments and consulting with leadership on talent.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Chief People Officer (CHRO)</h6>
                                    <p className="small text-muted">Directing corporate culture, global HR strategy and board-level talent planning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary & Market Value</h4>
                            <p className="text-muted small">Specialized HR specialists in strategy and compensation are among the highest-paid corporate roles.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>HR Executive</span>
                                    <span className="text-success fw-bold">₹6 - ₹10 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>HR Manager / BP (6-10 Yrs)</span>
                                    <span className="text-info fw-bold">₹15 - ₹35 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>HR Director / CHRO</span>
                                    <span className="text-warning fw-bold">₹45 - ₹1.5 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-danger text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Build the Future of Your Organization</h2>
                        <p className="mb-4 opacity-75">Enroll now for 80+ hours of Strategic HR Management and People Analytics Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-danger">Join HR Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HRManagementInfo;
