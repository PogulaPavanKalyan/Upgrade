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

const MongodbInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: NoSQL & Document Model Foundations",
            topics: ["Relation vs Non-Relational DBs", "JSON & BSON Formats", "Installing MongoDB & Compass", "Database & Collection Operations"]
        },
        {
            title: "Module 2: CRUD & Query Mastery",
            topics: ["Advanced Query Operators ($in, $and, $or)", "Projection & Array Manipulation", "Working with Embedded Documents", "Upserts & Multi-updates"]
        },
        {
            title: "Module 3: Schema Design & Data Modeling",
            topics: ["One-to-One vs One-to-Many Relationships", "Nesting vs Referencing ($lookup)", "Schema Validation & Constraints", "Optimizing for Read vs Write performance"]
        },
        {
            title: "Module 4: Aggregation Framework",
            topics: ["The Aggregation Pipeline ($gs, $match, $group)", "Unlocking Business Insights with $project", "Faceted Search & Pagination", "Performance Tuning Pipelines"]
        },
        {
            title: "Module 5: Indexing & Performance",
            topics: ["Single & Compound Indexes", "Multikey & Text Indexes", "Geospatial Data & Queries", "Explain Plans & Profiling"]
        },
        {
            title: "Module 6: Replication, Sharding & Security",
            topics: ["Replica Sets for High Availability", "Sharding for Horizontal Scaling", "Role-Based Access Control (RBAC)", "MongoDB Atlas & Cloud Management"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#fdfdfd", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-success display-4 mb-3" style={{ color: "#47A248" }}>Mastering MongoDB & NoSQL</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    The world's most popular NoSQL database. Master document-oriented modeling, complex aggregations, and enterprise-grade cluster management.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-success px-3 py-2">Atlas Certified</span>
                    <span className="badge bg-dark px-3 py-2">Aggregation Pro</span>
                    <span className="badge bg-info text-dark px-3 py-2">Big Data Ready</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-success bg-opacity-75 d-flex align-items-center justify-content-center p-4" style={{ backgroundColor: "#47A248" }}>
                                <Database size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why MongoDB?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        MongoDB allows developers to build faster by storing data in flexible, JSON-like documents. Its ability to scale horizontally through **Sharding** makes it the backbone of high-traffic modern apps.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Schema Flexibility</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-primary" size={20} />
                                                <span className="small fw-semibold">Auto-Scaling Shards</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Multi-Cloud Availability</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-success" size={20} />
                                                <span className="small fw-semibold">Rich Aggregation Framework</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* MongoDB AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #47A248 0%, #116149 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Vector Search & AI Integration</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Turning MongoDB into a high-performance Vector Database for Generative AI and RAG applications.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Semantic Search</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to store and query AI-generated vectors for high-relevancy search results beyond keyword matching.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Real-time Feed AI</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to build recommendation engines that adapt to user behavior in real-time using Change Streams.</p>
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

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-success" /> MongoDB Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="mongoSyllabus">
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
                                <Users className="text-success" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-success position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Database Developer</h6>
                                    <p className="small text-muted">Building schemas and optimizing queries for application developers.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Database Administrator (NoSQL)</h6>
                                    <p className="small text-muted">Managing cluster multi-region deployments, security and sharding strategy.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Data Architect</h6>
                                    <p className="small text-muted">Designing the entire data ecosystem and storage strategies for enterprises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Specialized MongoDB experts are in high demand for fintech and modern web tech companies.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior DB Developer</span>
                                    <span className="text-success fw-bold">₹7 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>NoSQL Pro (5+ Yrs)</span>
                                    <span className="text-info fw-bold">₹18 - ₹45 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Principal Data Architect</span>
                                    <span className="text-warning fw-bold">₹50 - ₹1.8 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-success text-white p-5 rounded-4 shadow-lg" style={{ backgroundColor: "#47A248" }}>
                        <h2 className="fw-bold mb-3">Master the Future of Data Storage</h2>
                        <p className="mb-4 opacity-75">Enroll now for 80+ hours of Practical MongoDB and Big Data Engineering labs.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Start Learning</button>
                            <button className="btn btn-outline-light btn-lg px-4">Download Assets</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MongodbInfo;
