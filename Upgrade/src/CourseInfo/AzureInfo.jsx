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

const AzureInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Cloud Concepts & Azure Overview",
            topics: ["Introduction to Azure Global Infrastructure", "High Availability, Scalability & Agility", "CapEx vs OpEx", "Azure Regions & Availability Zones"]
        },
        {
            title: "Module 2: Azure Core Services (Compute & Networking)",
            topics: ["Azure Virtual Machines & Scalesets", "Azure App Services & Functions", "Virtual Networks (VNet) & Load Balancers", "Azure ExpressRoute & VPN Gateway"]
        },
        {
            title: "Module 3: Azure Storage & Database Services",
            topics: ["Azure Blob, File, and Queue Storage", "Azure SQL Database & Cosmos DB", "Data Migration Tools", "Azure Data Lake Storage"]
        },
        {
            title: "Module 4: Security, Privacy & Compliance",
            topics: ["Azure Active Directory (Entra ID)", "Network Security Groups (NSG) & Azure Firewall", "Azure Key Vault & Information Protection", "Compliance Standards in Azure"]
        },
        {
            title: "Module 5: Management & Governance",
            topics: ["Azure Resource Manager (ARM) Templates", "Azure Policies & Blueprints", "Cost Management & Service Level Agreements (SLA)", "Azure Monitor & Service Health"]
        },
        {
            title: "Module 6: AZ-900 Exam Strategy",
            topics: ["Topic-wise Weightage Analysis", "Hands-on Lab scenarios", "Official Microsoft Training Guide", "Mock Exams & Q&A"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-primary display-4 mb-3">Mastering Microsoft Azure</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks. Master the enterprise cloud.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">AZ-900 Ready</span>
                    <span className="badge bg-info px-3 py-2">Enterprise Cloud</span>
                    <span className="badge bg-dark px-3 py-2">Cloud Admin Path</span>
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
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Microsoft Azure?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Azure is the preferred choice for 95% of Fortune 500 companies. With its deep integration with Microsoft 365, Windows, and SQL Server, **Azure Architects** are essential for migrating and managing enterprise infrastructure.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Seamless Win Integration</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Active Directory Security</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">60+ Global Regions</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Hybrid Cloud King</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Azure AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0078d4 0%, #29b6f6 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Azure AI & Cognitive Services</h2>
                                    <p className="lead mb-4" style={{ color: "#ffffff" }}>Deploying sophisticated AI models with enterprise-grade security and reliability.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Azure OpenAI Service</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to integrate ChatGPT and GPT-4 models into your apps with private enterprise data.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Azure Machine Learning</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>A complete platform for MLOps to build, train, and deploy models efficiently.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">AZURE AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Azure Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="azureSyllabus">
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
                                <Users className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Azure Administrator</h6>
                                    <p className="small text-muted">Managing core Azure services, storage and identity.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Azure Solutions Architect</h6>
                                    <p className="small text-muted">Designing scalable and resilient infrastructures on cloud.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Sr. Azure DevOps Engineer</h6>
                                    <p className="small text-muted">Leading automation and continuous delivery in Microsoft environments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Azure certifications are among the highest ROI credentials in the IT industry today.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher (AZ-900)</span>
                                    <span className="text-success fw-bold">₹6 - ₹10 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Cloud Engineer (4-7 Years)</span>
                                    <span className="text-info fw-bold">₹15 - ₹35 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Solution Architect (Leads)</span>
                                    <span className="text-warning fw-bold">₹40 - ₹90+ LPA</span>
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
                        <h2 className="fw-bold mb-3">Ready to Scale the Enterprise Cloud?</h2>
                        <p className="mb-4 opacity-75">Enroll now for 100+ hours of Hands-on Azure Labs and official certification training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Start Training</button>
                            <button className="btn btn-outline-light btn-lg px-4">Watch Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AzureInfo;
