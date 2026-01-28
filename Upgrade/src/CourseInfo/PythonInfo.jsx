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

const PythonInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Python Basics & Environment",
            topics: ["History of Python", "Installing Anaconda & Jupyter", "Variables, Data Types & Operators", "Reserved Keywords", "Input/Output with Python"]
        },
        {
            title: "Module 2: Data Structures in Python",
            topics: ["Lists (Indexing, Slicing, Methods)", "Tuples (Immutability)", "Dictionaries (Key-Value pairs)", "Sets (Uniqueness & Operations)", "List Comprehensions"]
        },
        {
            title: "Module 3: Control Flow & Functions",
            topics: ["Conditional Statements (if, elif, else)", "Loops (For, While, Range)", "Functional Programming Basics", "Args & Kwargs", "Lambda Expressions"]
        },
        {
            title: "Module 4: Modules & Packages",
            topics: ["Pip & Package Management", "Creating Custom Modules", "Common Libs: OS, Sys, Math", "Virtual Environments", "Importing Best Practices"]
        },
        {
            title: "Module 5: Exception Handling & File I/O",
            topics: ["Try, Except, Finally blocks", "Reading & Writing Text Files", "CSV and JSON Handling", "Custom Exception Classes", "Context Managers (with)"]
        },
        {
            title: "Module 6: Object-Oriented Python",
            topics: ["Classes and Objects", "Inheritance & Polymorphism", "Encapsulation & Decorators", "Method Overriding & Overloading", "Magic Methods (__init__, __str__)"]
        },
        {
            title: "Module 7: Numerical Computing with NumPy",
            topics: ["ND-Arrays & Vectorization", "Array Arithmetic", "Broadcasting Rules", "Matrix Operations", "Random Number Generation"]
        },
        {
            title: "Module 8: Data Analysis with Pandas",
            topics: ["Series & DataFrames", "Data Cleaning (Handling NaNs)", "Filtering & Grouping Data", "Pivot Tables", "Merging & Joining DataFrames"]
        },
        {
            title: "Module 9: Data Visualization",
            topics: ["Matplotlib (Line, Scatter, Bar plots)", "Seaborn (Heathmaps, Boxplots)", "Interactive Visuals with Plotly", "Dashboard Basics"]
        },
        {
            title: "Module 10: Machine Learning Fundamentals",
            topics: ["Supervised vs Unsupervised Learning", "Linear & Logistic Regression", "Decision Trees & Random Forests", "K-Means Clustering", "Model Evaluation (Accuracy, F1-Score)"]
        },
        {
            title: "Module 11: Deep Learning with TensorFlow",
            topics: ["Neural Network Architecture", "Keras API Basics", "CNNs for Computer Vision", "RNNs for Sequential Data", "Model Deployment Basics"]
        },
        {
            title: "Module 12: Python for Automation",
            topics: ["Web Scraping with BeautifulSoup", "API Interaction (Requests)", "Automating Excel with OpenPyXL", "Task Scheduling"]
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
                <h1 className="fw-bold text-success display-4 mb-3">Mastering Python & Data Science</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    The world's most popular language for Machine Learning, Artificial Intelligence, and Automation. Learn the skills that drive the AI revolution.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-success px-3 py-2">Python 3.12+</span>
                    <span className="badge bg-primary px-3 py-2">AI & ML Path</span>
                    <span className="badge bg-dark px-3 py-2">Data Science Ready</span>
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
                            <div className="col-md-4 bg-success d-flex align-items-center justify-content-center p-4">
                                <Terminal size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Python for the Future?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Python is the foundational language for **Artificial Intelligence**. Its simple syntax combined with powerful libraries like **Numpy**, **Pandas**, and **Scikit-Learn** makes it the go-to choice for researchers and engineers worldwide.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-success" size={20} />
                                                <span className="small fw-semibold">Industry-Standard AI Libs</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Rapid Prototyping</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Database className="text-info" size={20} />
                                                <span className="small fw-semibold">Massive Data Handling</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-primary" size={20} />
                                                <span className="small fw-semibold">Automation Powerhouse</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Python AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1c1c1c 0%, #34495e 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-success">Python: The AI King</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Powering the most advanced LLMs and Neural Networks in existence.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-success" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">PyTorch & TensorFlow</h6>
                                                    <p className="small mb-0" style={{ color: "#d1d1e0" }}>Master the frameworks used by OpenAI and Google to build breakthrough AI models.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">NLP & LLMs</h6>
                                                    <p className="small mb-0" style={{ color: "#d1d1e0" }}>Learn Natural Language Processing to build your own intelligent chatbots and analyzers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-success">PY AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Pillars */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-success border-4">
                        <div className="card-body">
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Database className="text-success" />
                            </div>
                            <h5 className="fw-bold">Data Engineering</h5>
                            <p className="small text-muted">Building robust data pipelines and cleaning messy real-world datasets for analysis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Cpu className="text-primary" />
                            </div>
                            <h5 className="fw-bold">Predictive Modeling</h5>
                            <p className="small text-muted">Using advanced algorithms to predict future trends and business outcomes with accuracy.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-info border-4">
                        <div className="card-body">
                            <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Layers className="text-info" />
                            </div>
                            <h5 className="fw-bold">System Automation</h5>
                            <p className="small text-muted">Automating repetitive tasks, web scraping, and office workflows with one-click scripts.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Syllabus Section */}
                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-success" /> Full Stack Python Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="pySyllabus">
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

                {/* Salary & Career Path */}
                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Layout className="text-info" /> Python Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-success position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Python Developer</h6>
                                    <p className="small text-muted">Master logic, scripts and basic web backend (Django/Flask).</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Data Scientist</h6>
                                    <p className="small text-muted">In-depth statistical analysis, visualization and ML modeling.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">AI/ML Engineer</h6>
                                    <p className="small text-muted">Architecting deep learning models and AI systems for production.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">AI and Data Science roles command the highest premiums in the tech world.</p>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher (Data Analyst)</span>
                                    <span className="text-success fw-bold">₹6 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Scientist (3-5 Years)</span>
                                    <span className="text-info fw-bold">₹15 - ₹30 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>AI Architect (7+ Years)</span>
                                    <span className="text-warning fw-bold">₹35 - ₹80+ LPA</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div className="alert alert-light bg-opacity-10 border-0 mt-4 py-2">
                                <small className="text-muted italic text-info">
                                    * Data based on 2024 AI Market Reports for Top Tech Firms.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placement Success Stories */}
                <div className="col-12 mt-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
                            <Users className="text-success" /> Data Science Hall of Fame
                        </h2>
                        <p className="text-muted">Meet our alumni leading the data revolution at global firms.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Vikram K.</h6>
                                        <small className="text-muted text-uppercase">Data Scientist @ Microsoft</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The hands-on ML projects gave me the portfolio I needed to land my role at Microsoft. Incredible support!"</p>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3 border-start border-success border-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                                        <CheckCircle className="text-info" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">You (Future Expert)</h6>
                                        <small className="text-success fw-bold text-uppercase">Next Data Viz Pro</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">Begin your Python journey today and feature your career milestone here!</p>
                                <div className="mt-3">
                                    <button className="btn btn-sm btn-outline-success w-100">Claim Your Spot</button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Meera S.</h6>
                                        <small className="text-muted text-uppercase">AI Research @ Nvidia</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"From basic syntax to training GPT-like models, this course was a complete roadmap for my career."</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-success text-white p-5 rounded-4 shadow-lg"
                    >
                        <h2 className="fw-bold mb-3">Ready to Lead the AI Revolution?</h2>
                        <p className="mb-4 opacity-75 fw-semibold">Enroll now for 100+ hours of Python, Data Science, and Machine Learning training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-success">Enroll Now</button>
                            <button className="btn btn-outline-light btn-lg px-4">Download Syllabus</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PythonInfo;
