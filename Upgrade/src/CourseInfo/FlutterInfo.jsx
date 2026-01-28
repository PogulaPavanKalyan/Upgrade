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

const FlutterInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Dart Programming Foundations",
            topics: ["Dart Syntax & Null Safety", "Object-Oriented Programming (OOP) in Dart", "Asynchronous Programming (Futures & Streams)", "Collections & Functional Programming Basics"]
        },
        {
            title: "Module 2: Flutter Framework & UI Mastery",
            topics: ["Introduction to the Widget Tree", "Stateless vs Stateful Widgets", "Material Design & Cupertino (iOS) Widgets", "Responsive & Adaptive Layout Engineering"]
        },
        {
            title: "Module 3: Advanced Animations & Interactivity",
            topics: ["Implicit vs Explicit Animations", "Custom Painting & Shaders", "Handling Complex Gestures", "Integrating Lottie for Micro-animations"]
        },
        {
            title: "Module 4: State Management Systems",
            topics: ["Provider & Riverpod Architecture", "Introduction to BLoC (Business Logic Component)", "Redux for Large-scale Mobile Apps", "Local Storage (Shared Preferences & SQLite)"]
        },
        {
            title: "Module 5: Backend Integration & Firebase",
            topics: ["RESTful API Consumption with Http/Dio", "Authentication (Google, Email, Phone)", "Real-time Database & Firestore", "Push Notifications with Cloud Messaging"]
        },
        {
            title: "Module 6: Deployment & App Store Optimization",
            topics: ["App Signing & Play Store/App Store Workflows", "CI/CD for Mobile with Codemagic", "Optimizing App Performance & Size", "Building for Web & Desktop from one Codebase"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#fdfdfd", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Smartphone size={48} className="text-info" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Flutter (Multi-Platform)</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Build high-performance, beautiful mobile apps for iOS, Android, and Web from a single codebase. Master Google's Flutter toolkit and Dart.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-info text-dark px-3 py-2">Google-Backed</span>
                    <span className="badge bg-dark px-3 py-2">Dart Expert</span>
                    <span className="badge bg-primary px-3 py-2">Cross-Platform</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-info bg-opacity-75 d-flex align-items-center justify-content-center p-4">
                                <Code size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Flutter?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Flutter allows developers to write once and run everywhere with native performance. Its **Hot Reload** and **Declarative UI** make it the fastest growing framework for modern mobile development.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Native Performance</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Single Codebase</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layout className="text-info" size={20} />
                                                <span className="small fw-semibold">Stunning Visuals</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-success" size={20} />
                                                <span className="small fw-semibold">Job Market Leader</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Flutter AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #02569B 0%, #0175C2 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">GenAI with Google Gemini in Flutter</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Integrating Google's powerful LLMs directly into your mobile apps for smarter user experiences.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Multimodal Input</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to build Flutter apps that use AI to understand text, images, and voice from the user's camera and mic.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI-Driven UI Generation</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to use AI to dynamically generate UI layouts in Flutter based on user preferences.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">DART AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-info" /> Flutter Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="flutterSyllabus">
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
                                    <h6 className="fw-bold mb-1">Junior Flutter Developer</h6>
                                    <p className="small text-muted">Building simple UI screens and integrating basic data APIs.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Senior Mobile Architect</h6>
                                    <p className="small text-muted">Managing complex state, custom animations, and CI/CD pipelines for apps.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Head of Mobile Engineering</h6>
                                    <p className="small text-muted">Directing platform strategy and native/cross-platform technology decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Flutter developers are highly valued due to the efficiency move towards cross-platform development.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior Dev</span>
                                    <span className="text-success fw-bold">₹8 - ₹15 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior Flutter (5+ Yrs)</span>
                                    <span className="text-info fw-bold">₹22 - ₹55 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Mobile Tech Lead</span>
                                    <span className="text-warning fw-bold">₹60 - ₹2 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-info text-white p-5 rounded-4 shadow-lg" style={{ background: "#02569B" }}>
                        <h2 className="fw-bold mb-3">Build Apps that Reach Billions</h2>
                        <p className="mb-4 opacity-75">Enroll now for 120+ hours of Hands-on Flutter and Multi-Platform Development Labs.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Join Flutter Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">Download Source Code</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FlutterInfo;
