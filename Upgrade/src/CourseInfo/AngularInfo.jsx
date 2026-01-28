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

const AngularInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Angular Architecture & TypeScript",
            topics: ["Introduction to SPAs & Angular", "TypeScript Basics (Types, Interfaces)", "Setting up with Angular CLI", "Angular Project Structure Explained"]
        },
        {
            title: "Module 2: Directives & Components",
            topics: ["Creating Components", "Built-in Directives (*ngIf, *ngFor)", "Attribute vs Structural Directives", "Custom Directives Development"]
        },
        {
            title: "Module 3: Data Binding & Pipes",
            topics: ["Property & Event Binding", "Two-way Binding (ngModel)", "Custom Pipes for Data Formatting", "Async Pipe Integration"]
        },
        {
            title: "Module 4: Services & Dependency Injection",
            topics: ["Singleton Services", "Exploring @Injectable decorator", "Hierarchical Dependency Injection", "Providing Services across Modules"]
        },
        {
            title: "Module 5: Observables & RxJS",
            topics: ["Introduction to Reactive Programming", "RxJS Operators (Map, Filter, SwitchMap)", "Subject vs BehavioralSubject", "Managing Memory Leaks & Subscriptions"]
        },
        {
            title: "Module 6: Angular Routing & Guards",
            topics: ["Route Configuration & Navigation", "Lazy Loading Modules", "Route Guards (CanActivate, CanDeactivate)", "Resolvers for Prefetching Data"]
        },
        {
            title: "Module 7: Form Handling (Template & Reactive)",
            topics: ["Template-driven Forms", "Reactive Forms & FormGroups", "Custom Form Validators", "Dynamic Forms Generation"]
        },
        {
            title: "Module 8: HTTP Client & API",
            topics: ["Making HTTP Requests", "Intercepting Requests/Responses", "Error Handling & Retrying", "CRUDS operations with Angular"]
        },
        {
            title: "Module 9: State Management with NgRx",
            topics: ["NgRx Store, Actions & Reducers", "Selectors & Effects", "State Management Patterns", "NgRx Data for Rapid Dev"]
        },
        {
            title: "Module 10: Angular Testing",
            topics: ["Unit Testing with Jasmine & Karma", "Testing Components & Services", "Protractor/Cypress for E2E", "Mocking Dependencies"]
        },
        {
            title: "Module 11: Deployment & Optimization",
            topics: ["AOT vs JIT Compilation", "Tree Shaking & Differential Loading", "Deploying with Firebase/AWS", "SEO with Angular Universal (SSR)"]
        },
        {
            title: "Module 12: Micro-Frontends & AI Integration",
            topics: ["Module Federation in Angular", "Integrating Web-AI models", "Advanced Component Patterns", "Building Scalable Enterprise Suites"]
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
                <h1 className="fw-bold text-danger display-4 mb-3">Mastering enterprise Angular</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Build scalable, high-performance web applications with the platform trusted by top enterprises worldwide. Master the framework for complex, data-driven systems.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-danger px-3 py-2">Angular 17/18</span>
                    <span className="badge bg-primary px-3 py-2">TypeScript Expert</span>
                    <span className="badge bg-dark px-3 py-2">Enterprise Scale</span>
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
                            <div className="col-md-4 bg-danger d-flex align-items-center justify-content-center p-4">
                                <ShieldCheck size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Angular for Business?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Angular is Google's comprehensive platform for web development. Its **Opinionated** nature ensures that large teams can work on the same codebase with consistency, making it the #1 choice for Banking, Finance, and Enterprise IT.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-danger" size={20} />
                                                <span className="small fw-semibold">Modular Architecture</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">TypeScript Integration</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-primary" size={20} />
                                                <span className="small fw-semibold">Powerful CLI Tools</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Smartphone className="text-success" size={20} />
                                                <span className="small fw-semibold">Cross-Platform (Ionic)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Angular AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #dd0031 0%, #1976d2 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Advanced Angular & AI</h2>
                                    <p className="lead mb-4" style={{ color: "#ffffff" }}>Implementing Reactive AI features in complex Enterprise Portals.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-danger bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-danger" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">RxJS Powered AI</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to handle real-time AI data streams using advanced RxJS operators and Signal-based reactivity.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Code size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Signals & Intelligent UI</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Leverage the new Angular Signals to build ultra-fast, intelligent UIs that react to data in milliseconds.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">ANG AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Pillars */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-danger border-4">
                        <div className="card-body">
                            <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Layers className="text-danger" />
                            </div>
                            <h5 className="fw-bold">Modular Dev</h5>
                            <p className="small text-muted">Building maintainable apps using N-tier architecture and Feature Modules.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Zap className="text-primary" />
                            </div>
                            <h5 className="fw-bold">RxJS Reactivity</h5>
                            <p className="small text-muted">Mastering the power of observables for complex event handling and data flows.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-dark border-4">
                        <div className="card-body">
                            <div className="bg-dark bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Terminal className="text-dark" />
                            </div>
                            <h5 className="fw-bold">TypeScript Pro</h5>
                            <p className="small text-muted">Writing robust, type-safe code that reduces bugs and improves dev velocity.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Syllabus Section */}
                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-danger" /> Angular Mastery Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="angSyllabus">
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
                                                    <div className="bg-danger rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                                <Layout className="text-info" /> Angular Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-danger position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-danger rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior Angular Dev</h6>
                                    <p className="small text-muted">Mastering pipes, directives and basic component binding.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-danger rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Senior UI Engineer</h6>
                                    <p className="small text-muted">Expert in RxJS, NgRx and performance tuning enterprise apps.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Enterprise Lead Architect</h6>
                                    <p className="small text-muted">Architecting multi-app suites and shared library infrastructures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Angular developers are highly valued in massive banking and consultancy sectors.</p>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher</span>
                                    <span className="text-danger fw-bold">₹5 - ₹8 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-danger" style={{ width: "35%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Lead (4-6 Years)</span>
                                    <span className="text-info fw-bold">₹12 - ₹28 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "65%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Principal Architect (10+ Years)</span>
                                    <span className="text-warning fw-bold">₹35 - ₹75+ LPA</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div className="alert alert-light bg-opacity-10 border-0 mt-4 py-2">
                                <small className="text-muted italic text-info">
                                    * Data based on 2024 Hiring Trends for MNCs & Fintech.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placement Success Stories */}
                <div className="col-12 mt-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
                            <Users className="text-danger" /> Angular Placement Hall of Fame
                        </h2>
                        <p className="text-muted">Cracking the code at world-class enterprise firms.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-danger bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-danger" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Aditya N.</h6>
                                        <small className="text-muted text-uppercase">UI Arch @ J.P. Morgan</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The architecture modules here prepared me better for J.P. Morgan than any other resource. Truly top-tier!"</p>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3 border-start border-danger border-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <CheckCircle className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">You (Future Expert)</h6>
                                        <small className="text-danger fw-bold text-uppercase">Next Angular Guru</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">Start your journey today and feature your career milestone here!</p>
                                <div className="mt-3">
                                    <button className="btn btn-sm btn-outline-danger w-100">Claim Your Spot</button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-danger bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-danger" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Priya K.</h6>
                                        <small className="text-muted text-uppercase">Senior Dev @ Oracle</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"RxJS was my biggest fear, but this course made it my biggest strength. Got a Lead role at Oracle!"</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-danger text-white p-5 rounded-4 shadow-lg"
                    >
                        <h2 className="fw-bold mb-3">Become an Enterprise Angular Expert</h2>
                        <p className="mb-4 opacity-75 fw-semibold">Enroll now for 120+ hours of advanced Angular, RxJS and TypeScript training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-danger">Enroll Now</button>
                            <button className="btn btn-outline-light btn-lg px-4">Watch Curriculum</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AngularInfo;
