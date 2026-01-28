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
    BarChart3
} from "lucide-react";

const PowerBIInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Getting Started with Power BI Desktop",
            topics: ["Introduction to self-service BI", "Installation & Workflow Overview", "Importing data from various sources", "Basic Visualisations & Formatting"]
        },
        {
            title: "Module 2: Data Transformation with Power Query",
            topics: ["Cleaning & Shaping Raw Data", "Handling Data Types & Errors", "Merging & Appending Datasets", "Parameters & Custom Columns"]
        },
        {
            title: "Module 3: Data Modeling & Relationships",
            topics: ["Star Schema & Snowflake Architecture", "Managing Table Relationships", "Cardinality & Cross-filter direction", "Data Model Optimization"]
        },
        {
            title: "Module 4: DAX (Data Analysis Expressions)",
            topics: ["Calculated Columns vs Measures", "Essential DAX Functions (SUMX, CALCULATE, FILTER)", "Time Intelligence Functions", "Advanced DAX Logic"]
        },
        {
            title: "Module 5: Advanced Visualisations & Reports",
            topics: ["Custom Visuals & R/Python Integration", "Bookmarking & Tooltips", "Drill-through & Slicing Navigation", "Report Interactivity Design"]
        },
        {
            title: "Module 6: Power BI Service & Governance",
            topics: ["Publishing to Power BI Web", "Working with Workspaces & Apps", "Scheduled Data Refresh (Gateway)", "Security & Row-Level Security (RLS)"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-warning display-4 mb-3" style={{ color: "#f2c811" }}>Mastering Microsoft Power BI</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Turn raw data into impactful, interactive insights. Master the industry-leading tool for modern Business Intelligence and Data Storytelling.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-warning text-dark px-3 py-2">DA-100 Ready</span>
                    <span className="badge bg-dark px-3 py-2">DAX Expert Path</span>
                    <span className="badge bg-primary px-3 py-2">BI Strategy Focus</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-warning d-flex align-items-center justify-content-center p-4">
                                <BarChart3 size={120} className="text-dark opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Power BI Dominates?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Power BI is the leader in the Gartner Magic Quadrant for BI. Its ability to connect to hundreds of sources and build **Enterprise-Grade Dashboards** in minutes makes it the #1 required skill for modern analysts.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Lightning Fast Insights</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Robust Data Modeling</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Smartphone className="text-success" size={20} />
                                                <span className="small fw-semibold">Mobile BI Ready</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Global Scale Sharing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Power BI AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #f2c811 0%, #ff9a00 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-dark">AI-Infused Dashboards</h2>
                                    <p className="lead mb-4 text-dark opacity-75">Leveraging built-in Machine Learning to discover trends and ask questions of your data.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-dark bg-opacity-10 border border-dark border-opacity-10">
                                                <div className="bg-dark bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-dark" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Q&A Natural Language</h6>
                                                    <p className="small mb-0 text-dark">Build reports where users can simply type questions like "What were my sales in Q3?" and see instant results.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-dark bg-opacity-10 border border-dark border-opacity-10">
                                                <div className="bg-dark bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-dark" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Key Influencers AI Visual</h6>
                                                    <p className="small mb-0 text-dark">Discover which factors are most likely to increase or decrease your target metrics automatically.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-dark">BI AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-warning" /> BI Strategy Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="biSyllabus">
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
                                                <li key={tIndex} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3 text-secondary">
                                                    <div className="bg-warning rounded-circle" style={{ width: "6px", height: "6px" }}></div>
                                                    <span>{topic}</span>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-warning border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-primary" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-warning position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-warning rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior BI Developer</h6>
                                    <p className="small text-muted">Building simple reports and data cleaning with Power Query.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-warning rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">BI Architect / DAX Expert</h6>
                                    <p className="small text-muted">Designing complex data models and high-performance DAX calculations.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Head of Business Intelligence</h6>
                                    <p className="small text-muted">Leading enterprise analytics strategy and managing multi-department BI rolls.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Power BI expertise is currently one of the most transferable and high-demand skills in the corporate market.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Entry (BI Analyst)</span>
                                    <span className="text-success fw-bold">₹8 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>BI Specialist (5+ Years)</span>
                                    <span className="text-info fw-bold">₹18 - ₹40 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Analytics Director</span>
                                    <span className="text-warning fw-bold">₹50 - ₹1.2 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-warning text-dark p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Master the Art of Data Storytelling</h2>
                        <p className="mb-4 fw-semibold">Enroll now for 100+ hours of advanced Power BI, DAX and M-code Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Join BI Track</button>
                            <button className="btn btn-outline-dark btn-lg px-4">Download Assets</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PowerBIInfo;
