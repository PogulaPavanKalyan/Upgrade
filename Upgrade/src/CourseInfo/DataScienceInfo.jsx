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
    BarChart
} from "lucide-react";

const DataScienceInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Mathematics for Data Science",
            topics: ["Linear Algebra & Matrix Operations", "Calculus for Model Optimization", "Probability Theory & Distributions", "Hypothesis Testing & P-values"]
        },
        {
            title: "Module 2: Advanced Statistics",
            topics: ["Descriptive & Inferential Statistics", "Sampling Techniques", "Correlation vs Causation", "ANOVA & T-tests"]
        },
        {
            title: "Module 3: Data Analysis with Python (Numpy/Pandas)",
            topics: ["Data Manipulation with Series/DataFrames", "Handling Missing Data", "Feature Engineering Concepts", "Exploratory Data Analysis (EDA)"]
        },
        {
            title: "Module 4: Data Visualization (Tableau/Power BI)",
            topics: ["Building Interactive Dashboards", "Storytelling with Data", "Seaborn & Matplotlib Advanced", "Geospatial Analysis"]
        },
        {
            title: "Module 5: Machine Learning (Supervised)",
            topics: ["Regression (Linear, Ridge, Lasso)", "Classification (SVM, KNN, Logistic)", "Decision Trees & Random Forest", "Ensemble Learning (XGBoost, LightGBM)"]
        },
        {
            title: "Module 6: Machine Learning (Unsupervised)",
            topics: ["K-Means & Hierarchical Clustering", "Principal Component Analysis (PCA)", "Association Rule Mining", "Anomaly Detection"]
        },
        {
            title: "Module 7: Natural Language Processing (NLP)",
            topics: ["Tokenization & Lemmatization", "TF-IDF & Word Embeddings", "Sentiment Analysis Projects", "Named Entity Recognition (NER)"]
        },
        {
            title: "Module 8: SQL for Data Science",
            topics: ["Advanced Join Operations", "Window Functions", "Data Modeling in SQL", "Working with Large Datasets"]
        },
        {
            title: "Module 9: Big Data & PySpark",
            topics: ["RDDs & DataFrames in Spark", "Processing Real-time Data Streams", "Distributed Computing Concepts", "Scalable ML with Spark MLlib"]
        },
        {
            title: "Module 10: Deep Learning & Neural Networks",
            topics: ["Backpropagation & Activation Functions", "CNNs for Image Recognition", "RNNs/LSTMs for Time Series", "Transfer Learning Concepts"]
        },
        {
            title: "Module 11: Deployment & MLOps",
            topics: ["Model Packaging with Docker", "Flask/Streamlit App Integration", "Cloud Deployment Basics (AWS/Azure)", "Monitoring Model Drift"]
        },
        {
            title: "Module 12: Capstone Industry Projects",
            topics: ["Predictive Health Analytics", "Customer Churn Prediction", "Financial Fraud Detection", "Retail Demand Forecasting"]
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
                <h1 className="fw-bold text-info display-4 mb-3">Mastering Data Science & Analytics</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Identify patterns, extract insights, and build predictive models that transform businesses. Become a data-driven decision maker in the modern economy.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-info text-dark px-3 py-2">Big Data Ready</span>
                    <span className="badge bg-primary px-3 py-2">MLOps Integrated</span>
                    <span className="badge bg-dark px-3 py-2">Business Intel Path</span>
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
                            <div className="col-md-4 bg-info d-flex align-items-center justify-content-center p-4">
                                <BarChart size={120} className="text-dark opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Data: The New Oil</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Data Science is the most versatile field today. From **personalized medicine** to **algorithmic trading**, data scientists are solving the world's most complex problems by turning raw information into actionable intelligence.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Brain className="text-info" size={20} />
                                                <span className="small fw-semibold">Statistical Modeling</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Big Data Processing</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Cpu className="text-success" size={20} />
                                                <span className="small fw-semibold">Machine Learning</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-warning" size={20} />
                                                <span className="small fw-semibold">Business Intelligence</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Data Science AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0f3443 0%, #34e89e 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Insight-Driven Intelligence</h2>
                                    <p className="lead mb-4" style={{ color: "#dff9fb" }}>Using Data Science techniques to train the next generation of AI systems.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-info" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Advanced ML Algorithms</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Beyond basic models—master gradient boosting, reinforcement learning, and custom ensemble methods.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-success" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Predictive AI Systems</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Build end-to-end pipelines that not only analyze the past but actively predict the future.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">DATA AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Pillars */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-info border-4">
                        <div className="card-body">
                            <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <BarChart className="text-info" />
                            </div>
                            <h5 className="fw-bold">Business Viz</h5>
                            <p className="small text-muted">Turning complex datasets into beautiful, interactive stories for executive stakeholders.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Database className="text-primary" />
                            </div>
                            <h5 className="fw-bold">Big Data Systems</h5>
                            <p className="small text-muted">Leveraging Spark and Hadoop to process petabytes of data with ease and speed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-success border-4">
                        <div className="card-body">
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <ShieldCheck className="text-success" />
                            </div>
                            <h5 className="fw-bold">MLOps & Ethics</h5>
                            <p className="small text-muted">Designing fair algorithms and managing the complete lifecycle of ML models in production.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Syllabus Section */}
                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-info" /> Data Science Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="dsSyllabus">
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

                {/* Salary & Career Path */}
                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Layout className="text-info" /> Careers in Analytics
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-info position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Business Analyst</h6>
                                    <p className="small text-muted">Focus on data-driven insights and SQL to solve business problems.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Data Scientist</h6>
                                    <p className="small text-muted">Primary focus on ML models, statistics and predictive analytics.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Decision Scientist (Lead)</h6>
                                    <p className="small text-muted">Strategy-level data leadership and experimental design architecting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Data scientists remain the "sexiest job of the 21st century" with pay matching the hype.</p>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior Scientist</span>
                                    <span className="text-info fw-bold">₹8 - ₹15 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "45%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Lead Scientist (4-6 Years)</span>
                                    <span className="text-success fw-bold">₹20 - ₹45 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "75%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Principal Scientist (9+ Years)</span>
                                    <span className="text-warning fw-bold">₹50 - ₹1.2 Cr+ LPA</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div className="alert alert-light bg-opacity-10 border-0 mt-4 py-2">
                                <small className="text-muted italic text-info">
                                    * Data based on 2024 Product & Consulting FIRM Benchmarks.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placement Success Stories */}
                <div className="col-12 mt-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
                            <Users className="text-info" /> Analytics Hall of Fame
                        </h2>
                        <p className="text-muted">Join the ranks of our alumni working at top-tier data-driven companies.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-info" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Ananya R.</h6>
                                        <small className="text-muted text-uppercase">Data Scientist @ Amazon</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The depth of statistics covered here is unmatched. It was the key differentiator in my Amazon interview process."</p>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3 border-start border-info border-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <CheckCircle className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">You (Future Scientist)</h6>
                                        <small className="text-info fw-bold text-uppercase">Next Analytics Wizard</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">Start your data journey today and land your dream role among these giants!</p>
                                <div className="mt-3">
                                    <button className="btn btn-sm btn-outline-info w-100">Claim Your Spot</button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-info" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Karthik S.</h6>
                                        <small className="text-muted text-uppercase">Lead Analyst @ Walmart</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"I came from a non-tech background, but this course's roadmap helped me secure a Lead role at Walmart. Incredible journey!"</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-info text-white p-5 rounded-4 shadow-lg"
                    >
                        <h2 className="fw-bold mb-3">Become a Modern Data Scientist</h2>
                        <p className="mb-4 opacity-75 fw-semibold">Enroll today for 180+ hours of advanced analytics and machine learning mentorship.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-info">Enroll Now</button>
                            <button className="btn btn-outline-light btn-lg px-4">Download Brochure</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DataScienceInfo;
