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
    Infinity
} from "lucide-react";

const DevOpsInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: DevOps Culture & Linux Foundations",
            topics: ["Introduction to DevOps & Site Reliability Engineering (SRE)", "Mastering the Linux CLI & Shell Scripting", "Networking Fundamentals for DevOps", "Secure Shell (SSH) and Key Management"]
        },
        {
            title: "Module 2: Mastering Version Control (Git/GitHub)",
            topics: ["Advanced Branching Strategies (GitFlow, Trunk-based)", "Optimizing Merge Workflows & Rebasing", "Git Hooks for Automation", "Managing Large Repositories (LFS)"]
        },
        {
            title: "Module 3: Continuous Integration & Delivery (CI/CD)",
            topics: ["Building Pipelines with Jenkins & GitHub Actions", "Automated Testing Integration", "Artifact Management (Nexus/Artifactory)", "Blue-Green & Canary Deployments"]
        },
        {
            title: "Module 4: Containerization & Orchestration",
            topics: ["Docker Internals & Multistage Builds", "Container Networking & Storage", "Kubernetes (K8s) Architecture Foundations", "Helm Charts & Package Management"]
        },
        {
            title: "Module 5: Infrastructure as Code (IaC)",
            topics: ["Terraform Foundations & State Management", "Automating Config with Ansible", "Cloud-Native IaC (CloudFormation/Bicep)", "GitOps with ArgoCD or Flux"]
        },
        {
            title: "Module 6: Monitoring, Logging & Observability",
            topics: ["Metrics Collection with Prometheus & Grafana", "Centralized Logging with ELK/Loki", "Distributed Tracing with Jaeger", "Incident Response & SRE Best Practices"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#fbfcfc", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Infinity size={48} className="text-info" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering DevOps & Automation</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Automate the entire software lifecycle. Learn the tools and culture used by world-class engineering teams to ship code faster and more reliably.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-info text-dark px-3 py-2">CI/CD Expert</span>
                    <span className="badge bg-dark px-3 py-2">Infrastructure Architect</span>
                    <span className="badge bg-primary px-3 py-2">Docker/K8s Pro</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-info d-flex align-items-center justify-content-center p-4">
                                <Server size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why DevOps?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        DevOps is the glue between development and operations. An elite **DevOps Engineer** can reduce deployment times from months to days, creating massive business value and commanding elite salaries.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Continuous Speed</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Cloud-Native Scale</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Bulletproof Security</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Cpu className="text-info" size={20} />
                                                <span className="small fw-semibold">Infrastructure Automation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* DevOps AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0984e3 0%, #2d3436 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AIOps & Intelligent Automation</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Applying machine learning to automate root-cause analysis and optimize cloud spending.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Anomaly Detection</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use AI algorithms to detect system anomalies and predict outages before they happen.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Cost Optimization</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to build autonomous agents that resize cloud resources in real-time to save up to 40% on cloud bills.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">OPS AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-info" /> DevOps Engineering Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="devopsSyllabus">
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
                                                    <div className="bg-info rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-info border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-info position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior DevOps Engineer</h6>
                                    <p className="small text-muted">Building scripts and maintaining simple CI/CD pipelines.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Senior DevOps / SRE</h6>
                                    <p className="small text-muted">Managing large K8s clusters and leading high-availability strategies.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Cloud Infrastructure Architect</h6>
                                    <p className="small text-muted">Directing global infrastructure strategy and multi-cloud transformation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">DevOps engineers are currently among the top 3 highest-paid technical roles globally.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior DevOps</span>
                                    <span className="text-success fw-bold">₹9 - ₹16 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior DevOps / SRE</span>
                                    <span className="text-info fw-bold">₹25 - ₹65 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Principal Architect</span>
                                    <span className="text-warning fw-bold">₹75 - ₹2.5 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-info text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Scale Beyond Limitations</h2>
                        <p className="mb-4 opacity-75">Enroll now for 120+ hours of Hands-on DevOps, Cloud, and SRE Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Join DevOps Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DevOpsInfo;
