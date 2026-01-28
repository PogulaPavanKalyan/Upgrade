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
    Microscope
} from "lucide-react";

const DeepLearningInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Neural Network Foundations",
            topics: ["The Math of Perceptrons", "Activation Functions (ReLU, Sigmoid, Tanh)", "Loss Functions & Optimization (Batch GD, Adam)", "Forward & Backward Propagation in Depth"]
        },
        {
            title: "Module 2: Computer Vision with CNNs",
            topics: ["Convolutional Layers & Pooling", "Architecture Design: ResNet, Inception, VGG", "Object Detection (YOLO, Faster R-CNN)", "Image Segmentation & Generative Adversarial Networks (GANs)"]
        },
        {
            title: "Module 3: Sequence Modeling & NLP",
            topics: ["Recurrent Neural Networks (RNNs) & LSTMs", "Attention Mechanisms", "The Transformer Architecture", "Word Embeddings (Word2Vec, GloVe)"]
        },
        {
            title: "Module 4: Reinforcement Learning (RL)",
            topics: ["Markov Decision Processes", "Q-Learning & Deep Q-Networks (DQN)", "Policy Gradient Methods", "Hands-on RL Labs (OpenAI Gym)"]
        },
        {
            title: "Module 5: Transfer Learning & Large Scale Training",
            topics: ["Fine-Tuning Pre-trained Models", "Distributed Training on Multiple GPUs/TPUs", "Quantization & Model Compression", "Ethics of Deep Learning & Bias Detection"]
        },
        {
            title: "Module 6: Projects & Deployment",
            topics: ["End-to-End Image Recognition System", "Building a Sentiment Analysis Bot", "Deploying Models with TorchServe/TensorFlow Serving", "Capstone Research Project"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#0b0e14", color: "#e0e0e0", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-5">
                <div className="mb-3">
                    <Microscope size={50} className="text-info" />
                </div>
                <h1 className="fw-bold text-white display-4 mb-3">Mastering Deep Learning</h1>
                <p className="lead opacity-75 mx-auto" style={{ maxWidth: "800px" }}>
                    Dive into the brain-inspired architectures powering the world's most advanced technologies. Master CNNs, Transformers, and Reinforcement Learning.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-info text-dark px-3 py-2">PyTorch & TensorFlow</span>
                    <span className="badge bg-primary px-3 py-2">Neural Architect</span>
                    <span className="badge bg-warning text-dark px-3 py-2">Research Track</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-lg border-0 bg-secondary bg-opacity-10 text-white overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-info d-flex align-items-center justify-content-center p-4">
                                <Brain size={120} className="text-dark opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-info mb-3">Why Deep Learning?</h3>
                                    <p className="card-text opacity-75 mb-4">
                                        DL is the cutting edge of Artificial Intelligence. From **Medical Diagnosis** to **Autonomous Spaceflight**, deep neural networks are solving problems previously thought impossible for machines.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-info" size={20} />
                                                <span className="small fw-semibold">Multi-layer Architectures</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Cpu className="text-warning" size={20} />
                                                <span className="small fw-semibold">GPU Optimized Ops</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-success" size={20} />
                                                <span className="small fw-semibold">Vision & Speech Mastery</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-primary" size={20} />
                                                <span className="small fw-semibold">AGI Ready Skills</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* DL AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Advanced Transformers & LLMs</h2>
                                    <p className="lead mb-4" style={{ color: "#ffffff" }}>Mastering the architecture behind ChatGPT: Understanding Attention and Self-Supervised Learning.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Attention Mechanisms</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn how neural networks focus on the most important parts of information for massive performance gains.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-white bg-opacity-25 p-2 rounded">
                                                    <Layers size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Fine-Tuning Foundation Models</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to take massive pre-trained models and specialize them for unique business tasks.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">DL ARCH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-info mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-info" /> DL Engineering Curriculum
                    </h2>
                    <div className="accordion bg-dark shadow-sm rounded overflow-hidden border-0" id="dlSyllabus">
                        {syllabus.map((module, index) => (
                            <div className="accordion-item bg-dark border-0 border-bottom border-secondary" key={index}>
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
                    <div className="card h-100 shadow-sm border-0 bg-secondary bg-opacity-10 text-white border-top border-info border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-info position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Deep Learning Engineer</h6>
                                    <p className="small opacity-75">Designing and training custom vision or language models.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">AI Research Scientist</h6>
                                    <p className="small opacity-75">Pushing the boundaries of neural network theory and architecture.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-warning rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Computer Vision / NLP Lead</h6>
                                    <p className="small opacity-75">Directing enterprise-wide deep learning strategy and research teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3 text-info">Salary Trends</h4>
                            <p className="opacity-75 small">Deep Learning roles are the highest-compensated in the entire Data Science ecosystem due to technical depth.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>DL Specialist</span>
                                    <span className="text-success fw-bold">₹15 - ₹25 LPA</span>
                                </div>
                                <div className="progress mb-4 bg-secondary" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior Research Eng (5+ Yrs)</span>
                                    <span className="text-info fw-bold">₹35 - ₹65 LPA</span>
                                </div>
                                <div className="progress mb-4 bg-secondary" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>AI Director / VP</span>
                                    <span className="text-warning fw-bold">₹75 - ₹2.5 Cr+ LPA</span>
                                </div>
                                <div className="progress bg-secondary" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-info text-dark p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Architect the Future of Intelligence</h2>
                        <p className="mb-4 fw-semibold">Enroll today for 180+ hours of advanced PyTorch, CNN and Transformer training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Join Research Track</button>
                            <button className="btn btn-outline-dark btn-lg px-4">Download Curriculum</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DeepLearningInfo;
