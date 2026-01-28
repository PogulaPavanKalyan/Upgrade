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
    Cpu as AiIcon
} from "lucide-react";

const MachineLearningInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: ML Fundamentals & Pre-processing",
            topics: ["Types of ML (Supervised, Unsupervised)", "Data Cleaning & Feature Scaling", "Bias-Variance Tradeoff", "Train-Test Split & Validation"]
        },
        {
            title: "Module 2: Regression & Classification",
            topics: ["Linear & Logistic Regression", "Decision Trees & Random Forest", "Support Vector Machines (SVM)", "KNN & Naive Bayes"]
        },
        {
            title: "Module 3: Advanced Ensemble Techniques",
            topics: ["Bagging (Random Forest)", "Boosting (XGBoost, LightGBM, CatBoost)", "Stacking & Blending Models", "Model Hyperparameter Tuning"]
        },
        {
            title: "Module 4: Clustering & Dimensionality Reduction",
            topics: ["K-Means & DBSCAN Clustering", "Principal Component Analysis (PCA)", "t-SNE for Visualisation", "Anomaly Detection Algorithms"]
        },
        {
            title: "Module 5: Deep Learning & Neural Networks",
            topics: ["Perceptrons & Multilayer Neural Nets", "Backpropagation & Optimizers (Adam, SGD)", "Introduction to CNNs for Vision", "RNNs & LSTMs for Sequences"]
        },
        {
            title: "Module 6: Deployment & ML Ops",
            topics: ["Model Serialization (Pickle/Joblib)", "Building APIs with Flask/FastAPI", "Dockerizing ML Applications", "Monitoring & Retraining Pipelines"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Machine Learning</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Build intelligent systems that learn from data. Master the math, algorithms, and deployment techniques powering the AI revolution.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-dark px-3 py-2">Deep Learning Ready</span>
                    <span className="badge bg-primary px-3 py-2">Algorithms Expert</span>
                    <span className="badge bg-info text-dark px-3 py-2">MLOps Integrated</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-dark d-flex align-items-center justify-content-center p-4">
                                <AiIcon size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Machine Learning?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Machine Learning is the engine of modern technology. From **Recommendation Engines** at Netflix to **Self-Driving Cars**, the ability to extract patterns from vast data is the defining skill of the 21st century.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-primary" size={20} />
                                                <span className="small fw-semibold">Neural Architectures</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Database className="text-success" size={20} />
                                                <span className="small fw-semibold">Data Engineering</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Predictive Insights</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Real-world AI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ML AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #000428 0%, #004e92 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Gen AI & Large Language Models</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Stay ahead with the latest in Generative AI, Transformers, and Fine-tuning pre-trained models.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">LLM Fine-Tuning</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to customize Llama, GPT, and BERT models for specific enterprise use cases.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <AiIcon size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">RAG Architectures</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Build Retrieval Augmented Generation systems to connect AI with your private data.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">GEN AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> ML Engineering Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="mlSyllabus">
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
                                                    <div className="bg-dark rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-dark border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-primary" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-dark position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-dark rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior ML Analyst</h6>
                                    <p className="small text-muted">Focus on data preparation, EDA and basic regression models.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-dark rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">AI / ML Engineer</h6>
                                    <p className="small text-muted">Designing custom neural networks and deploying scalable AI solutions.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Principal AI Scientist</h6>
                                    <p className="small text-muted">Architecting complex AI strategies and research-driven innovations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">ML roles consistently reward deeper technical theoretical knowledge and practical engineering skills.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior ML Engineer</span>
                                    <span className="text-success fw-bold">₹10 - ₹18 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior AI Dev (4-7 Yrs)</span>
                                    <span className="text-info fw-bold">₹25 - ₹55 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>AI Research Lead</span>
                                    <span className="text-warning fw-bold">₹60 - ₹1.8 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-dark text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Ready to Lead the AI Revolution?</h2>
                        <p className="mb-4 opacity-75">Enroll now for 200+ hours of advanced Machine Learning and Deep Learning training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-primary btn-lg px-5 fw-bold">Join AI Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Syllabus</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MachineLearningInfo;
