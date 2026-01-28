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
    BarChart
} from "lucide-react";

const ExcelInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Excel Foundations & Navigation",
            topics: ["Essential Keyboard Shortcuts", "Data Entry & Formatting Techniques", "Working with Multiple Sheets", "Relative vs Absolute Referencing"]
        },
        {
            title: "Module 2: Advanced Formulas for Analytics",
            topics: ["VLOOKUP, HLOOKUP & XLOOKUP", "INDEX & MATCH Mastery", "Nested IF, AND, OR Logic", "Date & Text Functions for Cleaning"]
        },
        {
            title: "Module 3: Data Analysis with Pivot Tables",
            topics: ["Creating Dynamic Pivot Tables", "Grouping Data & Slicers", "Calculated Fields & Items", "Pivot Charts for Visualisation"]
        },
        {
            title: "Module 4: Data Cleaning with Power Query",
            topics: ["Introduction to the Power Query Editor", "Unpivoting & Transforming Data", "Merging & Appending Queries", "Automating Data Ingestion"]
        },
        {
            title: "Module 5: Dashboards & Data Stories",
            topics: ["Building Interactive Dashboards", "Conditional Formatting Tricks", "Using Form Controls (Buttons, Sliders)", "Key Performance Indicator (KPI) Design"]
        },
        {
            title: "Module 6: VBA & Macro Basics",
            topics: ["Recording & Editing Macros", "Introduction to VBA Syntax", "Automating Repetitive Tasks", "Mastering the Developer Tab"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-success display-4 mb-3">Mastering Microsoft Excel</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    From basics to complex automation. Become a data wizard with the world's most powerful and widely used spreadsheet software.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-success px-3 py-2">Advanced Formulas</span>
                    <span className="badge bg-primary px-3 py-2">VBA & Power Query</span>
                    <span className="badge bg-dark px-3 py-2">Business Expert Path</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-success d-flex align-items-center justify-content-center p-4">
                                <BarChart size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Excel remains King?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Despite the rise of specialized tools, Excel remains the primary choice for data manipulation in 99% of businesses. Mastering **Advanced Excel** is the quickest way to boost your workplace productivity and analytical value.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Instant Analytics</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Dynamic Dashboards</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Smartphone className="text-success" size={20} />
                                                <span className="small fw-semibold">Universal Compatibility</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-info" size={20} />
                                                <span className="small fw-semibold">Data Integrity</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Excel AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1d6f42 0%, #34a853 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI in Excel (Copilot)</h2>
                                    <p className="lead mb-4" style={{ color: "#ffffff" }}>Mastering the next generation of spreadsheet intelligence with AI assistants.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Formula Generator</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Describe your goal in plain English and let AI generate complex Excel formulas for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Code size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Automated Data Insights</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Use AI to automatically identify trends, outliers, and patterns in your datasets.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">EXCEL AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-success" /> Excel Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="excelSyllabus">
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
                                                <li key={tIndex} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3 text-secondary">
                                                    <div className="bg-success rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-success border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Layout className="text-success" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-success position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Data Operations / MIS Executive</h6>
                                    <p className="small text-muted">Daily reporting, data cleaning and basic dashboard maintenance.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Financial / Business Analyst</h6>
                                    <p className="small text-muted">Core analytic modeling, forecasting and stakeholder presenting.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Reporting Lead / Analytics Manager</h6>
                                    <p className="small text-muted">Architecting automated reporting ecosystems for departments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Excel power users consistently earn 30-50% more than average desk workers across all domains.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Entry (Reporting)</span>
                                    <span className="text-success fw-bold">₹4 - ₹7 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "35%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Specialist Analyst</span>
                                    <span className="text-info fw-bold">₹9 - ₹18 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "65%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Lead Business Analyst</span>
                                    <span className="text-warning fw-bold">₹20 - ₹45+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-success text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Become an Excel Power User Today</h2>
                        <p className="mb-4 opacity-75">Enroll now for 60+ hours of Advanced Excel, Power Query and VBA Mastery.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-success">Join Masterclass</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ExcelInfo;
