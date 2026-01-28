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

const JavascriptInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: JavaScript Fundamentals",
            topics: ["History & Engines (V8, SpiderMonkey)", "Internal Working: Execution Context & Call Stack", "Variables: var, let, const", "Data Types (Primitive vs Reference)"]
        },
        {
            title: "Module 2: Control Flow & Loops",
            topics: ["If-Else & Switch Case", "For, While, Do-While Loops", "For-in & For-of", "Break & Continue"]
        },
        {
            title: "Module 3: Functions & Scope",
            topics: ["Arrow Functions vs Regular Functions", "Closures & Lexical Scoping", "HOF (Higher Order Functions)", "IIFE (Immediately Invoked Function Expressions)"]
        },
        {
            title: "Module 4: Objects & Arrays",
            topics: ["Object Literal & Constructor Functions", "Prototypes & Inheritance", "Array Methods (Map, Filter, Reduce)", "Destructuring & Rest/Spread"]
        },
        {
            title: "Module 5: DOM & BOM",
            topics: ["Selecting & Modifying Elements", "Event Listeners & Bubbling/Capturing", "DOM Manipulation Best Practices", "Window Object & LocalStorage"]
        },
        {
            title: "Module 6: Asynchronous JavaScript",
            topics: ["Callbacks & Callback Hell", "Promises (The Resolve/Reject journey)", "Async/Await with Error Handling", "Event Loop, Microtasks & Macrotasks"]
        },
        {
            title: "Module 7: Modern ES6+ Features",
            topics: ["Modules (Import/Export)", "Classes & Private Fields", "Optional Chaining & Nullish Coalescing", "Generators & Iterators"]
        },
        {
            title: "Module 8: React.js Essentials",
            topics: ["Virtual DOM & Reconciliation", "JSX & Components Architecture", "State & Props Management", "Hooks (useState, useEffect, useMemo)"]
        },
        {
            title: "Module 9: Backend with Node.js",
            topics: ["Node.js Architecture (Libuv)", "Express.js Routing & Middleware", "RESTful API Design", "Authentication (JWT & Bcrypt)"]
        },
        {
            title: "Module 10: State Management (Redux/Context)",
            topics: ["Context API vs Redux Toolkit", "Actions, Reducers & Store", "Slices & Thunks for Async Actions", "Performance Optimization"]
        },
        {
            title: "Module 11: Next.js & Server Side Rendering",
            topics: ["SSR vs SSG vs ISR", "App Router & File-based Routing", "Server Components & Actions", "SEO Optimization in Next.js"]
        },
        {
            title: "Module 12: Testing & DevOps",
            topics: ["Unit Testing with Jest", "Integration Testing (Cypress/RTL)", "CI/CD for JS Apps", "Deployment (Vercel/AWS)"]
        },
        {
            title: "Module 13: JavaScript for AI (TensorFlow.js)",
            topics: ["Tensors & Layers in JavaScript", "Running Models in the Browser", "Neural Networks with Brain.js", "Edge AI for Web Apps"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-5"
            >
                <h1 className="fw-bold text-warning display-4 mb-3">Mastering Full Stack JavaScript</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    From interactive frontends to high-performance servers and browser-based AI, JavaScript is the language of the modern web. Master the ecosystem that powers everything.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-warning text-dark px-3 py-2">ES2024 Ready</span>
                    <span className="badge bg-primary px-3 py-2">MERN Expert Path</span>
                    <span className="badge bg-dark px-3 py-2">Full Stack Focus</span>
                </div>
            </motion.div>

            <div className="row g-4">
                {/* About Section */}
                <div className="col-12">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="card shadow-sm border-0 overflow-hidden"
                    >
                        <div className="row g-0">
                            <div className="col-md-4 bg-warning d-flex align-items-center justify-content-center p-4">
                                <Code size={120} className="text-dark opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why JavaScript Dominates?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        JavaScript is the only language that runs natively in every browser. With <strong>Node.js</strong> for backend and <strong>TensorFlow.js</strong> for AI, you can build entire production-grade ecosystems using a single language. It's fast, flexible, and has the world's largest community.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Event-Driven Architecture</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Ubiquitous Web Platform</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Smartphone className="text-success" size={20} />
                                                <span className="small fw-semibold">Cross-Platform (React Native)</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Massive NPM Ecosystem</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* JS AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #2d3436 0%, #000000 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-warning">JavaScript for AI & ML</h2>
                                    <p className="lead mb-4" style={{ color: "#bdc3c7" }}>Bring intelligence directly to the user's browser with the most popular language.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-warning bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-warning" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">TensorFlow.js</h6>
                                                    <p className="small mb-0" style={{ color: "#d1d1e0" }}>Develop and train ML models directly in JavaScript, and deploy in browser or on Node.js.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Brain.js</h6>
                                                    <p className="small mb-0" style={{ color: "#d1d1e0" }}>Neural networks in JavaScript for browsers and Node.js with high performance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-warning">JS ML</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Pillars */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-warning border-4">
                        <div className="card-body">
                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Layout className="text-warning" />
                            </div>
                            <h5 className="fw-bold">Modern Frontend</h5>
                            <p className="small text-muted">Building lightning-fast, highly interactive UIs with React, Vue, and Next.js frameworks.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-success border-4">
                        <div className="card-body">
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Server className="text-success" />
                            </div>
                            <h5 className="fw-bold">Server Side Logic</h5>
                            <p className="small text-muted">Scaling backend systems with Node.js and Bun, handling millions of connections concurrently.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Database className="text-primary" />
                            </div>
                            <h5 className="fw-bold">NoSQL Databases</h5>
                            <p className="small text-muted">Seamlessly integrating with MongoDB and Firebase for dynamic, JSON-based data structures.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Syllabus Section */}
                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-warning" /> Full Stack Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="jsSyllabus">
                        {syllabus.map((module, index) => (
                            <div className="accordion-item border-0 border-bottom" key={index}>
                                <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button ${activeSection === index ? "" : "collapsed"} bg-white fw-bold py-3`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                    >
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
                                                    <div className="bg-warning rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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

                {/* Salary & Career Path */}
                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Layout className="text-info" /> JS Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-warning position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-warning rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Frontend Artisan</h6>
                                    <p className="small text-muted">Master HTML, CSS and Modern ES6+ JavaScript Basics.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-warning rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">UI Framework Ninja</h6>
                                    <p className="small text-muted">React, Redux, and Tailwind for high-performance interfaces.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Full Stack Architect</h6>
                                    <p className="small text-muted">Node, Express, MongoDB and Next.js for complete web solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">MERN Stack and Next.js developers are in extreme demand worldwide.</p>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher</span>
                                    <span className="text-warning fw-bold">₹5 - ₹10 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "40%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior (2-4 Years)</span>
                                    <span className="text-info fw-bold">₹10 - ₹20 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "65%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior (5+ Years)</span>
                                    <span className="text-success fw-bold">₹20 - ₹45+ LPA</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div className="alert alert-light bg-opacity-10 border-0 mt-4 py-2">
                                <small className="text-muted italic text-info">
                                    * Data based on 2024 Global Talent Insights for Full Stack Specialists.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placement Success Stories */}
                <div className="col-12 mt-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
                            <Users className="text-warning" /> JS Placement Hall of Fame
                        </h2>
                        <p className="text-muted">Join students who launched their careers as Full Stack Developers.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-warning bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-warning" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Arjun Verma</h6>
                                        <small className="text-muted text-uppercase">UI Engineer @ Meta</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The MERN stack project I built here got me through the door at Meta. Truly industry-standard coaching."</p>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3 border-start border-warning border-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <CheckCircle className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">You (Future Member)</h6>
                                        <small className="text-warning fw-bold text-uppercase">Next JS Wizard</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">Master JavaScript today and see your name featured here after your next big career move!</p>
                                <div className="mt-3">
                                    <button className="btn btn-sm btn-outline-warning w-100">Start Your Path</button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-warning bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-warning" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Sneha Rao</h6>
                                        <small className="text-muted text-uppercase">Full Stack @ Netflix</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"From closure basics to scaling Node.js apps—this course covered everything I needed for big tech."</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-warning text-dark p-5 rounded-4 shadow-lg"
                    >
                        <h2 className="fw-bold mb-3">Ready to become a JavaScript Expert?</h2>
                        <p className="mb-4 opacity-75 fw-semibold">Enroll now for 150+ hours of MERN Stack and AI training with 24/7 support.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Enroll Now</button>
                            <button className="btn btn-outline-dark btn-lg px-4">See Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default JavascriptInfo;
