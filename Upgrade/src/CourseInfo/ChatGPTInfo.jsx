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
    MessageSquare,
    Sparkles
} from "lucide-react";

const ChatGPTInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Foundations of Large Language Models",
            topics: ["How LLMs Work (Transformers & Tokens)", "Understanding Probabilistic Text Generation", "History of GPT-1 to GPT-4o", "AI Ethics and Responsible Use"]
        },
        {
            title: "Module 2: Mastering Prompt Engineering",
            topics: ["Zero-shot & Few-shot Prompting", "Chain of Thought (CoT) Techniques", "Role-Based Prompting", "Temperature & Top-P settings"]
        },
        {
            title: "Module 3: AI for Professional Productivity",
            topics: ["Drafting Emails & Complex Reports", "Summarization & Content Re-purposing", "Language Translation & Style Transfer", "Managing Large Context Windows"]
        },
        {
            title: "Module 4: ChatGPT for Developers",
            topics: ["Code Generation & Debugging", "Refactoring Legacy Code with AI", "Writing Unit Tests automatically", "Integrating ChatGPT API (Python/Node)"]
        },
        {
            title: "Module 5: Custom GPTs & App Builders",
            topics: ["Configuring Custom GPT Instructors", "Connecting APIs with Actions", "Retrieval Augmented Generation (RAG) basics", "Publishing to GPT Store"]
        },
        {
            title: "Module 6: Advanced GenAI Ecosystem",
            topics: ["Multimodal Capabilities (DALL-E, Voice, Vision)", "Comparing ChatGPT vs Claude vs Gemini", "AI-First Workflow Automation (Zapier/Make)", "Future of Autonomous Agents"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Sparkles size={48} className="text-success" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering ChatGPT & Generative AI</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Unlock the full potential of AI. Learn prompt engineering, autonomous agents, and how to integrate LLMs into your professional workflow.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-success px-3 py-2">Prompt Master</span>
                    <span className="badge bg-dark px-3 py-2">AI Integrator</span>
                    <span className="badge bg-info text-dark px-3 py-2">Future-of-Work</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-dark d-flex align-items-center justify-content-center p-4">
                                <MessageSquare size={120} className="text-success opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Generative AI?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Generative AI is not just a tool; it's a co-pilot for every industry. From **Coding** to **Creative Writing**, those who master LLMs are seeing a 40%+ increase in productivity and quality of work.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Instant Code/Text</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">Advanced Reasoning</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Global Language Flex</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-success" size={20} />
                                                <span className="small fw-semibold">Infinite Brainstorming</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* GPT AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #10a37f 0%, #1a1a2e 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">The Prompt Engineering Edge</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Moving beyond simple questions to complex systematic instruction sets for peak AI performance.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Chain of Thought (CoT)</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to force AI to think step-by-step for 5x more accurate logic and math.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Agentic Workflows</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to build chains of AI calls that complete complex autonomous tasks.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">OPEN AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-success" /> AI Masterclass Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="gptSyllabus">
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
                                <Users className="text-info" /> Career Impact
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-success position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">AI-Powered Individual</h6>
                                    <p className="small text-muted">A top 1% worker in any field with extreme productivity skills.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Prompt Engineer / AI Consultant</h6>
                                    <p className="small text-muted">Helping companies integrate GenAI into their business processes.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">AI Solution Architect</h6>
                                    <p className="small text-muted">Designing custom LLM infrastructures and RAG pipelines for enterprises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary & Market Value</h4>
                            <p className="text-muted small">AI-literate professionals are currently command a 25-40% salary premium across the global market.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>AI-Aided Professional</span>
                                    <span className="text-success fw-bold">₹12 - ₹20 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "50%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>AI Implementation Specialist</span>
                                    <span className="text-info fw-bold">₹25 - ₹55 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Chief AI Officer</span>
                                    <span className="text-warning fw-bold">₹80 - ₹2.5 Cr+ LPA</span>
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
                        <h2 className="fw-bold mb-3">Ready to Join the AI Elite?</h2>
                        <p className="mb-4 opacity-75">Enroll today for 40+ hours of Practical AI Mastery and Workflow Automation training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Become AI Pro</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Demo Results</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ChatGPTInfo;
