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
    Lock
} from "lucide-react";

const CybersecurityInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Introduction to Cybersecurity",
            topics: ["Terminology and CIA Triad", "Threat Actors & Attack Vectors", "Modern Cybersecurity Landscape", "Legal & Ethical Frameworks"]
        },
        {
            title: "Module 2: Network Security Foundations",
            topics: ["OSI Model & TCP/IP Security", "Firewalls, IDS, and IPS", "VPNs and Secure Remote Access", "Wireless Network Security"]
        },
        {
            title: "Module 3: Ethical Hacking & Penetration Testing",
            topics: ["Information Gathering & Reconnaissance", "Scanning & Enumeration", "Vulnerability Assessment", "Exploitation Techniques"]
        },
        {
            title: "Module 4: Incident Response & Digital Forensics",
            topics: ["Incident Handling Process", "Evidence Collection & Preservation", "Memory and Disk Forensics", "Malware Analysis Basics"]
        },
        {
            title: "Module 5: Identity and Access Management (IAM)",
            topics: ["Authentication Mechanisms (MFA, Biometrics)", "Zero Trust Architecture", "Role-Based Access Control (RBAC)", "Directory Services"]
        },
        {
            title: "Module 6: Cloud & Web Application Security",
            topics: ["OWASP Top 10 Vulnerabilities", "Securing AWS/Azure Infrastructure", "DevSecOps Integration", "Container & Kubernetes Security"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-success display-4 mb-3">Mastering Cybersecurity</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Defend the digital world against ever-evolving threats. Learn to secure networks, perform ethical hacking, and lead incident response.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-success px-3 py-2">Ethical Hacking</span>
                    <span className="badge bg-danger px-3 py-2">Threat Hunting</span>
                    <span className="badge bg-dark px-3 py-2">DevSecOps Path</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-success d-flex align-items-center justify-content-center p-4">
                                <Lock size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Cybersecurity?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Data is the most valuable asset in the modern world, making it the biggest target. **Cybersecurity Experts** are the digital guardians, protecting everything from national infrastructure to personal privacy in a world of constant threats.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Defensive Excellence</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Offensive Skills</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-primary" size={20} />
                                                <span className="small fw-semibold">Global Threat Intel</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-info" size={20} />
                                                <span className="small fw-semibold">Compliance Ready</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Cyber AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1b3333 0%, #2ecc71 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI for Cybersecurity</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Harnessing machine learning to detect anomalies and automate threat response at scale.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Automated Threat Detection</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to deploy ML models that identify zero-day attacks in real-time.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI-Powered Pentesting</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how autonomous agents can simulate complex attacks to test defenses.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">CYBER AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-success" /> Cybersecurity Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="cyberSyllabus">
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
                                                    <div className="bg-success rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-success border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-success position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Security Analyst</h6>
                                    <p className="small text-muted">Monitoring networks and identifying security incidents.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Ethical Hacker / Pentester</h6>
                                    <p className="small text-muted">Simulating attacks to find vulnerabilities before the bad guys do.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-danger rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">CISO / Security Director</h6>
                                    <p className="small text-muted">Leading enterprise security strategy and risk management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Specialized security professionals are in ultra-high demand with massive pay premiums.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior Security Pro</span>
                                    <span className="text-success fw-bold">₹7 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Pen-Tester / Architect (5+ Yrs)</span>
                                    <span className="text-info fw-bold">₹18 - ₹40 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>CISO / Ethical Lead</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-success text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Ready to Become a Digital Guardian?</h2>
                        <p className="mb-4 opacity-75">Enroll now for 150+ hours of Ethical Hacking labs and Certification prep.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-success">Join Red Team</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CybersecurityInfo;
