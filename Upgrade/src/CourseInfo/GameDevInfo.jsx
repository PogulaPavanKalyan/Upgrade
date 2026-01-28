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
    Gamepad
} from "lucide-react";

const GameDevInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Introduction to Game Engines",
            topics: ["Unity vs Unreal Engine Overview", "Understanding Component-Based Design", "Game Loop & Frame Rates", "Setting up Your Dev Environment"]
        },
        {
            title: "Module 2: C# Programming for Games (Unity)",
            topics: ["Variables, Loops & Functions in C#", "Unity API Essentials", "Handling User Input", "Collision Detection & Physics"]
        },
        {
            title: "Module 3: 2D & 3D Game Design",
            topics: ["Sprite Mapping & Animations", "3D Modeling & Materials", "Lighting & Post-Processing", "Camera Control & UI Design"]
        },
        {
            title: "Module 4: Advanced Game Mechanics",
            topics: ["AI Pathfinding & Navigation", "Inventory Systems & Quest Logic", "Multiplayer Integration (Photon/Mirror)", "Level Design & Environment Building"]
        },
        {
            title: "Module 5: Unreal Engine & C++",
            topics: ["Blueprint Visual Scripting", "C++ for Unreal Performance", "Visual Effects (Niagara)", "Sound Engineering in Games"]
        },
        {
            title: "Module 6: Optimization & Publishing",
            topics: ["Performance Profiling", "Cross-Platform Export (PC, Mobile, Console)", "App Store & Steam Integration", "Monetization Strategies"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#0f0c29", color: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-info display-4 mb-3">Mastering Game Development</h1>
                <p className="lead opacity-75 mx-auto" style={{ maxWidth: "800px" }}>
                    Turn your gaming passion into professional creation. Master the tools and technologies used by industry giants like Blizzard, Ubisoft, and Epic Games.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-info text-dark px-3 py-2">Unity & Unreal</span>
                    <span className="badge bg-primary px-3 py-2">VR/AR Ready</span>
                    <span className="badge bg-warning text-dark px-3 py-2">Metaverse Path</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-lg border-0 bg-dark text-white overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-info d-flex align-items-center justify-content-center p-4">
                                <Gamepad size={120} className="text-dark opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-info mb-3">Why Game Development?</h3>
                                    <p className="card-text opacity-75 mb-4">
                                        The gaming industry is now bigger than Movies and Music combined. From **Indie breakouts** to **AAA blockbusters**, game developers are the architects of interactive worlds, blending art, logic, and physics into pure entertainment.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Real-time Rendering</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">Intelligent AI NPCs</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Smartphone className="text-success" size={20} />
                                                <span className="small fw-semibold">Mobile & Console Ops</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Immersive Metaverse</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Game AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI in Gaming & NPC Logic</h2>
                                    <p className="lead mb-4" style={{ color: "#ffffff" }}>Implementing Generative AI for dynamic storytelling and procedural world generation.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Generative Dialogues</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to integrate LLMs for infinite, context-aware conversations with game characters.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Layers size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Procedural AI Worlds</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Master algorithms that create massive, varied landscapes and dungeons automatically.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">GAME AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-info mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-info" /> Game Dev Curriculum
                    </h2>
                    <div className="accordion bg-dark shadow-sm rounded overflow-hidden border-0" id="gameSyllabus">
                        {syllabus.map((module, index) => (
                            <div className="accordion-item bg-dark border-0 border-bottom border-light border-opacity-10" key={index}>
                                <h2 className="accordion-header">
                                    <button className={`accordion-button ${activeSection === index ? "" : "collapsed"} bg-dark text-white fw-bold py-3 shadow-none`} type="button" onClick={() => toggleAccordion(index)}>
                                        <div className="d-flex justify-content-between w-100 align-items-center pe-3">
                                            <span>{module.title}</span>
                                            {activeSection === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </div>
                                    </button>
                                </h2>
                                <div className={`accordion-collapse collapse ${activeSection === index ? "show" : ""}`}>
                                    <div className="accordion-body bg-dark bg-opacity-50">
                                        <ul className="list-group list-group-flush bg-transparent">
                                            {module.topics.map((topic, tIndex) => (
                                                <li key={tIndex} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3 text-light opacity-75">
                                                    <div className="bg-info rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white border-top border-info border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Code className="text-info" /> Industry Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-info position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior Game Dev</h6>
                                    <p className="small opacity-75">Assisting in scripting, bug fixing and level polishing.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Core Graphics/Gameplay Engineer</h6>
                                    <p className="small opacity-75">Designing complex game systems and optimizing engine performance.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-warning rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Technical Lead / Studio Director</h6>
                                    <p className="small opacity-75">Managing entire game productions and multi-disciplinary teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-secondary bg-opacity-10 text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3 text-info">Gaming Salary Trends</h4>
                            <p className="opacity-75 small">Game dev roles are highly specialized, often paying significant premiums for low-level architecture skills.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Entry Level (Unity/C#)</span>
                                    <span className="text-info fw-bold">₹5 - ₹10 LPA</span>
                                </div>
                                <div className="progress mb-4 bg-dark" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "40%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Core Dev (3-6 Years)</span>
                                    <span className="text-warning fw-bold">₹15 - ₹35 LPA</span>
                                </div>
                                <div className="progress mb-4 bg-dark" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Lead Engine Engineer</span>
                                    <span className="text-success fw-bold">₹40 - ₹1.2 Cr+ LPA</span>
                                </div>
                                <div className="progress bg-dark" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-info text-dark p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Ready to Build Your Own Universe?</h2>
                        <p className="mb-4 fw-semibold">Enroll today for 180+ hours of Hands-on Game Design and Unreal Engine Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Start Creating</button>
                            <button className="btn btn-outline-dark btn-lg px-4">See Student Portfolios</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GameDevInfo;
