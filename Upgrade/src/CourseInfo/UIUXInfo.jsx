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
    Palette,
    Eye
} from "lucide-react";

const UIUXInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Principles of User-Centered Design",
            topics: ["Introduction to UX/UI Design Thinking", "User Research & Persona Building", "Information Architecture & Site Maps", "Accessibility (WCAG) and Ethics in Design"]
        },
        {
            title: "Module 2: Mastering Visual Design (UI)",
            topics: ["Color Theory & Psychology", "Typography & Hierarchy Systems", "Grid Systems & Responsive Layouts", "Building Professional Design Systems"]
        },
        {
            title: "Module 3: Prototyping with Figma & Adobe XD",
            topics: ["Mastering Auto-Layout & Components in Figma", "High-Fidelity Interaction Prototyping", "Variables & Advanced Interactions", "Collaboration & Handoff for Developers"]
        },
        {
            title: "Module 4: UX Research & Usability Testing",
            topics: ["Qualitative vs Quantitative Research", "Conducting A/B Tests and Heatmap Analysis", "Heuristic Evaluation Foundations", "Affinity Diagrams & Journey Mapping"]
        },
        {
            title: "Module 5: Mobile-First & Micro-interacts",
            topics: ["Design for iOS (HIG) vs Android (Material Design)", "Motion Graphics for Web with Lottie", "Optimizing Touch Targets & Mobile Flows", "Building Delighters: Micro-interactions"]
        },
        {
            title: "Module 6: Portfolio & Freelancing Pro",
            topics: ["Building a Case Study from Scratch", "Publishing to Dribbble, Behance & Loom", "Working with Clients & Pricing your Work", "Preparing for UX/UI Design Interviews"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f9fcfd", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Palette size={48} className="text-primary" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Modern UI/UX Design</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Bridging the gap between users and technology. Master the aesthetics of UI and the science of UX to build products that users love.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">Figma Pro</span>
                    <span className="badge bg-dark px-3 py-2">UX Researcher</span>
                    <span className="badge bg-info text-dark px-3 py-2">Product Thinker</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <Layout size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why UI/UX Design?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Design is not just how it looks, but how it works. High-quality **Product Design** is the primary driver of retention and conversion in the digital economy. Designers are now strategic partners in every top tech firm.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Eye className="text-success" size={20} />
                                                <span className="small fw-semibold">Visual Excellence</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">Cognitive Psychology</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Smartphone className="text-info" size={20} />
                                                <span className="small fw-semibold">Mobile Mastery</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-warning" size={20} />
                                                <span className="small fw-semibold">Scalable Design Systems</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* UIUX AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #3498db 0%, #e84393 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Generative AI in Product Design</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Harnessing AI to accelerate your workflow, generate assets, and predict user behavior.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Color & Font Selection</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use AI tools that recommend perfect, accessible color palettes and font pairs based on your brand sentiment.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Predictive Heatmaps</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to use AI models to predict where eyes will land on your screen even before the product is built.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">DESIGN AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> UI/UX Design Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="designSyllabus">
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
                                <Palette className="text-primary" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior UI/UX Designer</h6>
                                    <p className="small text-muted">Execution of wireframes, icons, and low-fidelity prototypes.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Senior Product Designer</h6>
                                    <p className="small text-muted">Defining user journeys, conducting research, and validating product features.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Design Lead / Creative Director</h6>
                                    <p className="small text-muted">Managing entire design teams and driving the visual language of a global brand.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary & Earning Potential</h4>
                            <p className="text-muted small">Designers specialized in UX research and interactive design command high-end salaries alongside software engineers.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior Designer</span>
                                    <span className="text-success fw-bold">₹6 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior Designer (5+ Yrs)</span>
                                    <span className="text-info fw-bold">₹15 - ₹35 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Design Director</span>
                                    <span className="text-warning fw-bold">₹40 - ₹1.2 Cr+ LPA</span>
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
                        <h2 className="fw-bold mb-3">Create Designs that Change the World</h2>
                        <p className="mb-4 opacity-75">Enroll now for 60+ hours of Hands-on Figma Projects and UX Research Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Start Designing</button>
                            <button className="btn btn-outline-light btn-lg px-4">Watch Prototype Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default UIUXInfo;
