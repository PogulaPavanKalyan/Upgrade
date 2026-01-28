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
    Users,
    CheckCircle,
    TrendingUp,
    ChevronDown,
    ChevronUp
} from "lucide-react";

const JavaInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Introduction to Java",
            topics: ["History & Evolution of Java", "JVM, JRE, and JDK Architecture", "Setting up Environment", "First Java Program", "Internal working of Just-In-Time (JIT) compiler"]
        },
        {
            title: "Module 2: Language Fundamentals",
            topics: ["Variables & Data Types", "Operators (Arithmetic, Logical, Bitwise)", "Type Casting", "Console I/O (Scanner class)"]
        },
        {
            title: "Module 3: Control Statements",
            topics: ["Decision Making (if-else, switch-case)", "Loops (for, while, do-while)", "Enhanced for loop", "Jump Statements (break, continue)"]
        },
        {
            title: "Module 4: Object-Oriented Programming (OOPs)",
            topics: ["Classes and Objects", "Constructors & 'this' keyword", "Inheritance (Single, Multilevel, Hierarchical)", "Polymorphism (Overloading & Overriding)", "Abstraction (Abstract classes & Interfaces)", "Encapsulation (Access Modifiers)"]
        },
        {
            title: "Module 5: Exception Handling",
            topics: ["Try-Catch blocks", "Multiple Catch blocks", "Nested Try blocks", "Finally block", "Throw vs Throws", "Custom Exceptions"]
        },
        {
            title: "Module 6: Collections Framework",
            topics: ["List Interface (ArrayList, LinkedList, Vector)", "Set Interface (HashSet, TreeSet)", "Map Interface (HashMap, TreeMap, Hashtable)", "Queue Interface", "Iterators & Comparators"]
        },
        {
            title: "Module 7: Java 8+ New Features",
            topics: ["Lambda Expressions", "Functional Interfaces", "Stream API", "Optional Class", "Default & Static methods in Interfaces", "New Date-Time API"]
        },
        {
            title: "Module 8: Multithreading & Concurrency",
            topics: ["Thread Lifecycle", "Creating Threads (Thread class vs Runnable)", "Synchronization", "Inter-thread Communication", "Thread Pools & Executor Framework"]
        },
        {
            title: "Module 9: JDBC & Database Connectivity",
            topics: ["JDBC Architecture", "Drivers", "Connection Management", "Statement, PreparedStatement, ResultSet", "CRUD Operations with MySQL"]
        },
        {
            title: "Module 10: Spring Boot & Hibernate",
            topics: ["Servlets & JSP Basics", "Introduction to Spring Framework", "Spring Boot Basics", "Hibernate ORM Overview", "Maven/Gradle Build Tools"]
        },
        {
            title: "Module 11: Microservices & Spring Cloud",
            topics: ["Microservices Architecture vs Monolithic", "Service Discovery (Netflix Eureka)", "API Gateway (Spring Cloud Gateway)", "Config Server", "Inter-service Communication (OpenFeign)"]
        },
        {
            title: "Module 12: Reactive Programming (Project Reactor)",
            topics: ["Asynchronous and Non-blocking IO", "Mono vs Flux", "Reactive Streams API", "Spring WebFlux", "Backpressure Handling"]
        },
        {
            title: "Module 13: JVM Internals & Advanced Tuning",
            topics: ["JVM Memory Model (Heap, Stack, Metaspace)", "Garbage Collection Algorithms (G1, ZGC)", "Method Profiling & Heap Dump Analysis", "Performance Optimization Techniques"]
        },
        {
            title: "Module 14: Java for AI & Machine Learning",
            topics: ["Deeplearning4j (DL4J) Integration", "Deep Java Library (DJL) for Deep Learning", "WEKA for Data Mining", "Implementing Neural Networks in Java"]
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
                <h1 className="fw-bold text-primary display-4 mb-3">Mastering Java & AI Development</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    From robust backend systems to cutting-edge AI integrations, Java remains the industry choice. Master the language that powers the world's most intelligent applications.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">Version 21+ LTS</span>
                    <span className="badge bg-success px-3 py-2">AI-Enabled Path</span>
                    <span className="badge bg-info px-3 py-2">Enterprise Scale</span>
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
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <Cpu size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Java in the AI Era?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        While Python is popular for research, Java's <strong>Execution Speed</strong>, <strong>Robustness</strong>, and <strong>Enterprise Integration</strong> make it the leader for deploying high-performance AI models in production. With libraries like DL4J and Amazon's DJL, Java is more relevant than ever in the AI landscape.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Production Ready AI</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">High Concurrency Support</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Cloud-Native Architectures</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-primary" size={20} />
                                                <span className="small fw-semibold">Predictable Performance</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1e1e2f 0%, #2a2a40 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">Java for Artificial Intelligence</h2>
                                    <p className="lead mb-4" style={{ color: "#a0a0c0" }}>Harness the power of type-safety and high-performance for Machine Learning & Deep Learning models.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Code size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Deeplearning4j (DL4J)</h6>
                                                    <p className="small mb-0" style={{ color: "#d1d1e0" }}>Commercial-grade, distributed deep learning for the JVM, optimized for CPU and GPU.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-info" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Amazon DJL</h6>
                                                    <p className="small mb-0" style={{ color: "#d1d1e0" }}>An engine-agnostic Java framework to build, train, and deploy deep learning models.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10">AI POWER</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features Cards */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Smartphone className="text-primary" />
                            </div>
                            <h5 className="fw-bold">Mobile & Edge AI</h5>
                            <p className="small text-muted">Deploying machine learning models directly on Android devices using Java/Kotlin efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-success border-4">
                        <div className="card-body">
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Server className="text-success" />
                            </div>
                            <h5 className="fw-bold">Intelligent Microservices</h5>
                            <p className="small text-muted">Integrating AI capabilities into scalable Spring Boot services for real-time decision making.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-warning border-4">
                        <div className="card-body">
                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Database className="text-warning" />
                            </div>
                            <h5 className="fw-bold">Large Scale Processing</h5>
                            <p className="small text-muted">Powering Big Data AI with Apache Spark and Hadoop, leveraging Java's multithreading.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Syllabus Section */}
                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Comprehensive Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="javaSyllabus">
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

                {/* Salary & Career Path */}
                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Layout className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Core Java Maverick</h6>
                                    <p className="small text-muted">Master fundamentals, OOPS, and Collections.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Advanced Java Expert</h6>
                                    <p className="small text-muted">Deep dive into JDBC, Servlets, and Multi-threading.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Full Stack Developer</h6>
                                    <p className="small text-muted">Spring Boot, Rest APIs, and Hibernate integration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Java developers enjoy high demand and premium pay scales.</p>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher</span>
                                    <span className="text-success fw-bold">₹4 - ₹8 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "35%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior (2-4 Years)</span>
                                    <span className="text-info fw-bold">₹8 - ₹15 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "60%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior (5+ Years)</span>
                                    <span className="text-warning fw-bold">₹15 - ₹35+ LPA</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "90%" }}></div>
                                </div>
                            </div>

                            <div className="alert alert-light bg-opacity-10 border-0 mt-4 py-2">
                                <small className="text-muted italic text-info">
                                    * Data based on 2024-25 Industry Reports for Product-based companies.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placement Success Stories */}
                <div className="col-12 mt-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
                            <Users className="text-primary" /> Placement Hall of Fame
                        </h2>
                        <p className="text-muted">Join the community of 500+ members who cracked their dream jobs.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Rahul Sharma</h6>
                                        <small className="text-muted text-uppercase">Software Engineer @ Amazon</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The advanced Java modules and mentorship helped me clear the system design round with confidence."</p>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3 border-start border-primary border-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <CheckCircle className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">You (Future Member)</h6>
                                        <small className="text-primary fw-bold text-uppercase">Next Success Story</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">Enroll today and get your profile featured here once you land your dream job through our portal.</p>
                                <div className="mt-3">
                                    <button className="btn btn-sm btn-outline-primary w-100">Claim Your Spot</button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Priya Patel</h6>
                                        <small className="text-muted text-uppercase">Backend Dev @ Google</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The AI integration course was a game changer for my profile. I got 3 offers within a month!"</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-primary text-white p-5 rounded-4 shadow-lg"
                    >
                        <h2 className="fw-bold mb-3">Ready to start your Java Journey?</h2>
                        <p className="mb-4 opacity-75">Enroll now and get access to 100+ hours of content, daily live classes, and 1-on-1 mentorship.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Enroll Now</button>
                            <button className="btn btn-outline-light btn-lg px-4">Download PDF</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default JavaInfo;

