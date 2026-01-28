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
    Cloud
} from "lucide-react";

const SalesforceInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Salesforce Fundamentals & Admin Basics",
            topics: ["Introduction to CRM & Salesforce Architecture", "Navigating Lightning Experience", "Organizing Data: Objects, Fields & Relationships", "UI Customization: Apps, Tabs & Page Layouts"]
        },
        {
            title: "Module 2: Security & Data Management",
            topics: ["User Management & Profiles", "Organization-Wide Defaults (OWD)", "Role Hierarchy & Sharing Rules", "Data Import/Export & Validation Rules"]
        },
        {
            title: "Module 3: Process Automation Mastery",
            topics: ["Flow Builder (The Future of Automation)", "Approval Processes & Workflow Rules", "Process Builder Foundations", "Automating Business Logic with Apex (Intro)"]
        },
        {
            title: "Module 4: Analytics, Reports & Dashboards",
            topics: ["Standard vs Custom Report Types", "Building High-Impact Dashboards", "Bucket Fields & Summary Formulas", "Dynamic Dashboarding for Sales Leaders"]
        },
        {
            title: "Module 5: Sales & Service Cloud Deep Dive",
            topics: ["Lead Management & Opportunity Pipelines", "Case Management & Service Consoles", "Omni-Channel & Knowledge Base", "Campaign Management in Sales Cloud"]
        },
        {
            title: "Module 6: Ecosystem, AppExchange & Certification Prep",
            topics: ["Navigating the AppExchange", "Introduction to Salesforce CPQ", "Developer Console Basics", "Admin (ADM-201) Exam Preparation"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Cloud size={48} className="text-primary" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Salesforce (CRM Mastery)</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    The world's #1 CRM platform. Become a certified Salesforce Administrator or Developer and lead the digital transformation of global enterprises.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">ADM-201 Ready</span>
                    <span className="badge bg-dark px-3 py-2">Lightning Exp</span>
                    <span className="badge bg-info text-dark px-3 py-2">Flow Architect</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <Cloud size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Salesforce?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Salesforce is used by 99% of Fortune 500 companies. Its ecosystem is projected to create 9.3 million new jobs by 2026. Mastering **Salesforce Administration** is a direct ticket to a high-growth career.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-success" size={20} />
                                                <span className="small fw-semibold">Massive Job Growth</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Cloud className="text-primary" size={20} />
                                                <span className="small fw-semibold">Cloud-First Platform</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Rapid Automation</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-info" size={20} />
                                                <span className="small fw-semibold">Integrated Ecosystem</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Salesforce AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #00A1E0 0%, #17375E 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Einstein AI & Predictive CRM</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Harnessing the power of Salesforce Einstein to forecast sales, automate service, and hyper-personalize marketing.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Predictive Lead Scoring</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use AI to automatically rank leads based on their likelihood to convert, optimizing sales efficiency.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Next Best Action AI</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to deploy AI agents that guide service reps with the perfect recommendations for every customer interaction.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">SF AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Salesforce Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="sfSyllabus">
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
                                <Users className="text-primary" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Salesforce Administrator</h6>
                                    <p className="small text-muted">Configuring objects, workflows, and security for business users.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Salesforce Developer (Apex/LWC)</h6>
                                    <p className="small text-muted">Building custom logic and UI components on the Salesforce platform.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Salesforce Solution Architect</h6>
                                    <p className="small text-muted">Designing the entire CRM ecosystem and multi-cloud strategy for global brands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Salesforce professionals are among the highest-paid cloud experts due to the extreme value of CRM data.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior Administrator</span>
                                    <span className="text-success fw-bold">₹7 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>SF Developer (5+ Yrs)</span>
                                    <span className="text-info fw-bold">₹18 - ₹42 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Principal Architect</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-primary text-white p-5 rounded-4 shadow-lg" style={{ background: "#00A1E0" }}>
                        <h2 className="fw-bold mb-3">Transform Your Career with Salesforce</h2>
                        <p className="mb-4 opacity-75">Enroll now for 100+ hours of Hands-on CRM Projects and Certification Prep.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Join SF Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SalesforceInfo;
