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
    Database as SqlIcon
} from "lucide-react";

const SqlInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: SQL Foundations & Relational Theory",
            topics: ["Understanding Relational Databases (RDBMS)", "Entity Relationship (ER) Diagrams", "Primary & Foreign Key Constraints", "Installing MySQL/PostgreSQL"]
        },
        {
            title: "Module 2: Basic Queries & Data Retrieval",
            topics: ["SELECT, WHERE, and Logical Operators", "ORDER BY and LIMIT clauses", "Aliasing Tables & Columns", "Working with Null Values"]
        },
        {
            title: "Module 3: Aggregates & Data Summarization",
            topics: ["GROUP BY & HAVING Clauses", "Aggregates (SUM, AVG, MIN, MAX, COUNT)", "Distinct counts and filtered aggregates", "Common Query Patterns"]
        },
        {
            title: "Module 4: Joins & Complex Relationships",
            topics: ["INNER, LEFT, RIGHT, and FULL Joins", "Self Joins & Cross Joins", "Joining Multiple Tables", "Solving Join-related Logic Problems"]
        },
        {
            title: "Module 5: Advanced SQL & Window Functions",
            topics: ["Window Functions (RANK, ROW_NUMBER, LEAD/LAG)", "Common Table Expressions (CTEs)", "Subqueries (Nested Queries)", "Case Statements & Pivot Logic"]
        },
        {
            title: "Module 6: Database Optimization & Performance",
            topics: ["Indexing Strategies", "Understanding Execution Plans", "Writing Performance-tuned Queries", "Normalisation vs De-normalisation"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering SQL & Databases</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    The language of data. Learn to talk to databases, extract complex insights, and architect high-performance data systems.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">MySQL / PostgreSQL</span>
                    <span className="badge bg-success px-3 py-2">Advanced Analytics</span>
                    <span className="badge bg-dark px-3 py-2">Data Architect Path</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-dark d-flex align-items-center justify-content-center p-4">
                                <SqlIcon size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why SQL is Non-negotiable?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        SQL is the universal language for interacting with data. Whether you are a **Full Stack Developer**, a **Data Scientist**, or a **Business Analyst**, the ability to query data efficiently is the most important technical skill you can possess.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Database className="text-primary" size={20} />
                                                <span className="small fw-semibold">RDBMS Mastery</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Complex Analytics</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-info" size={20} />
                                                <span className="small fw-semibold">Data Modeling</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold"> ACID Transcations</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SQL AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #141e30 0%, #243b55 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI-Powered SQL Optimization</h2>
                                    <p className="lead mb-4" style={{ color: "#bdc3c7" }}>Using advanced LLMs to write, optimize, and debug complex SQL queries instantly.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Natural Language to SQL</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to leverage AI tools that translate business questions directly into efficient SQL scripts.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Query Tuning</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how machine learning models suggest better indexing and partitioning strategies.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">DB AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> SQL Mastery Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="sqlSyllabus">
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
                                                    <div className="bg-dark rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-dark border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-dark position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-dark rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Database Developer</h6>
                                    <p className="small text-muted">Focus on query writing, optimization and schema design.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-dark rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Data Engineer / Analyst</h6>
                                    <p className="small text-muted">Leveraging SQL to extract insights and build reporting pipelines.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Lead Data Architect</h6>
                                    <p className="small text-muted">Designing enterprise-level data structures and hybrid-cloud strategies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Strong SQL skills are highly correlated with leadership roles across all tech departments.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>SQL Specialist</span>
                                    <span className="text-success fw-bold">₹7 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Data Architect (5+ Years)</span>
                                    <span className="text-info fw-bold">₹18 - ₹45 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Head of Data Engineering</span>
                                    <span className="text-warning fw-bold">₹50 - ₹1.5 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-dark text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Ready to Unlock the Power of Data?</h2>
                        <p className="mb-4 opacity-75">Enroll now for 80+ hours of advanced SQL and Database Architecture Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-primary btn-lg px-5 fw-bold">Join SQL Masterclass</button>
                            <button className="btn btn-outline-light btn-lg px-4">Download Resources</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SqlInfo;
