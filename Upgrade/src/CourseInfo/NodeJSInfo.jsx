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
    TrendingUp
} from "lucide-react";

const NodeJSInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Node.js Architecture & Basics",
            topics: ["Event Loop & Non-blocking I/O", "Core Modules (v8, Path, FS, OS)", "CommonJS vs ES Modules", "Buffer & Stream APIs"]
        },
        {
            title: "Module 2: Express.js Framework Mastery",
            topics: ["Middleware Architecture", "Routing & Controllers", "Error Handling & Global Handlers", "Serving Static Assets"]
        },
        {
            title: "Module 3: RESTful API Design",
            topics: ["HTTP Methods & Status Codes", "Payload Validation (Joi/Zod)", "JWT Authentication & Authorization", "CORS & Security Best Practices"]
        },
        {
            title: "Module 4: Database Integration (Mongoose/SQL)",
            topics: ["Schema Design & Modeling", "CRUD Operations & Querying", "Transactions & Aggregations", "Seeding & Migrations"]
        },
        {
            title: "Module 5: Real-time Communication & Testing",
            topics: ["WebSockets with Socket.io", "Unit Testing (Jest/Mocha)", "Integration Testing with Supertest", "Logging & Debugging for Production"]
        },
        {
            title: "Module 6: Deployment & Scaling",
            topics: ["Environment Variables & Security", "Process Management with PM2", "Clustering & Load Balancing", "Dockerizing Node.js Apps"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-success display-4 mb-3" style={{ color: "#339933" }}>Mastering Node.js & Backend</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Build scalable, high-performance server-side applications. Master the art of event-driven architecture and full-stack JavaScript development.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-success px-3 py-2">Express Expert</span>
                    <span className="badge bg-dark px-3 py-2">API Architect</span>
                    <span className="badge bg-info text-dark px-3 py-2">Event-Loop Master</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-success d-flex align-items-center justify-content-center p-4">
                                <Terminal size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Node.js?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Node.js powers some of the world's most trafficked websites like Netflix, Uber, and PayPal. Its **Non-blocking I/O** and **Single Language** (JS) advantage makes it the #1 choice for modern backend engineers.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Blazing Fast I/O</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Massive Package Ecosystem</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Global Scale Ready</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Enterprise Security</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Node AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #339933 0%, #1a1a2e 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI for Backend Logic</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Integrating Large Language Models and AI-driven middleware directly into your Node server.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Response Caching</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use ML to predict common user requests and serve cached AI responses instantly.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Automated Bot Defense</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to build Node middleware that uses AI to distinguish between real users and bot attacks.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">NODE AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-success" /> Node.js Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="nodeSyllabus">
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
                                <Users className="text-success" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-success position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior Backend Developer</h6>
                                    <p className="small text-muted">Building simple APIs and handling basic database persistence.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Senior Backend Engineer</h6>
                                    <p className="small text-muted">Designing distributed systems, microservices, and high-load architectures.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Lead Software Architect</h6>
                                    <p className="small text-muted">Directing platform strategy and technology stacks for entire organizations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Node.js expertise command top-tier salaries in the startup and enterprise tech worlds.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior BE Developer</span>
                                    <span className="text-success fw-bold">₹8 - ₹14 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior Backend (6+ Yrs)</span>
                                    <span className="text-info fw-bold">₹22 - ₹55 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Staff Engineer / Architect</span>
                                    <span className="text-warning fw-bold">₹65 - ₹2.2 Cr+ LPA</span>
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
                        <h2 className="fw-bold mb-3">Build the Backbone of the Web</h2>
                        <p className="mb-4 opacity-75">Enroll now for 100+ hours of Practical Node.js and Enterprise Backend Mastery.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Join BE Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NodeJSInfo;
