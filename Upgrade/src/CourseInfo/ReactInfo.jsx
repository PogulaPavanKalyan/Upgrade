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

const ReactInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: React Fundamentals",
            topics: ["Introduction to React & Virtual DOM", "Setting up with Vite", "JSX & Rendering Elements", "Components (Functional) Concepts"]
        },
        {
            title: "Module 2: Props & State",
            topics: ["Passing Data via Props", "useState Hook in Depth", "Handling Events", "Conditional Rendering"]
        },
        {
            title: "Module 3: Styling in React",
            topics: ["CSS Modules", "Styled Components", "Tailwind CSS Integration", "Tailwind Utilities & Responsive Design"]
        },
        {
            title: "Module 4: Advanced Hooks",
            topics: ["useEffect & Lifecycle", "useMemo & useCallback (Performance)", "useRef for DOM Access", "Custom Hooks Architecture"]
        },
        {
            title: "Module 5: React Router (v6+)",
            topics: ["Dynamic Routing", "Nested Routes", "Loaders & Actions", "Protected Routes Implementation"]
        },
        {
            title: "Module 6: Context API & State Management",
            topics: ["Prop Drilling Problem", "CreateContext & UseContext", "Global State Management Patterns", "Performance Optimization"]
        },
        {
            title: "Module 7: Redux Toolkit (RTK)",
            topics: ["Redux Architecture", "Slices & Reducers", "Store Configuration", "Async Actions with createAsyncThunk"]
        },
        {
            title: "Module 8: API Integration",
            topics: ["Fetching Data (Fetch/Axios)", "Error Handling & Loading States", "React Query (TanStack Query)", "Mutation & Caching"]
        },
        {
            title: "Module 9: Forms & Validation",
            topics: ["Controlled vs Uncontrolled Components", "React Hook Form", "Zod/Yup Schema Validation", "Complex Multi-step Forms"]
        },
        {
            title: "Module 10: Next.js Foundation",
            topics: ["SSR vs Static Generation", "App Router Basics", "Server Components", "API Routes in Next.js"]
        },
        {
            title: "Module 11: Testing React Apps",
            topics: ["Jest & React Testing Library", "Mocking APIs", "Unit vs Integration Tests", "Snapshot Testing"]
        },
        {
            title: "Module 12: Performance & Deployment",
            topics: ["Code Splitting & Lazy Loading", "Profiling React Apps", "Deploying to Vercel/Netlify", "SEO Optimization"]
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
                <h1 className="fw-bold text-primary display-4 mb-3">Mastering React & Modern Frontend</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Build lightning-fast, highly-interactive web applications with the world's most popular UI library. Master the stack used by Facebook, Netflix, and Airbnb.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-info text-dark px-3 py-2">React 18/19</span>
                    <span className="badge bg-primary px-3 py-2">Next.js Ready</span>
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
                            <div className="col-md-4 bg-info d-flex align-items-center justify-content-center p-4">
                                <Layout size={120} className="text-dark opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why React in 2024?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        React is the industry standard for building modern UIs. With the introduction of **Server Components** and **Concurrent Mode**, React has evolved into a powerhouse for both small startups and massive enterprise applications.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-info" size={20} />
                                                <span className="small fw-semibold">Component-Based Architecture</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Declarative UI</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-primary" size={20} />
                                                <span className="small fw-semibold">World's Largest Ecosystem</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Smartphone className="text-success" size={20} />
                                                <span className="small fw-semibold">Native App Support (React Native)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* React AI spotlight (Frontend AI) */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #20232a 0%, #61dafb 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI-Driven Frontends</h2>
                                    <p className="lead mb-4" style={{ color: "#ffffff" }}>Integrating Intelligent AI features directly into your React Components.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-info" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Generative UI</h6>
                                                    <p className="small mb-0" style={{ color: "#e3f2fd" }}>Learn to build interfaces that adapt and respond using GenAI models (Vercel AI SDK).</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Code size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Web-ML Integration</h6>
                                                    <p className="small mb-0" style={{ color: "#e3f2fd" }}>Build smart React apps with client-side inference using TensorFlow.js and Transformers.js.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">REACT AI</div>
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
                                <Layout className="text-info" />
                            </div>
                            <h5 className="fw-bold">Dynamic UIs</h5>
                            <p className="small text-muted">Creating fluid, single-page application experiences with real-time updates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Layers className="text-primary" />
                            </div>
                            <h5 className="fw-bold">State Excellence</h5>
                            <p className="small text-muted">Managing complex application data across hundreds of components efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-dark border-4">
                        <div className="card-body">
                            <div className="bg-dark bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Server className="text-dark" />
                            </div>
                            <h5 className="fw-bold">Full Stack React</h5>
                            <p className="small text-muted">Bridging the gap between server and client with Next.js and Server Actions.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Syllabus Section */}
                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-info" /> React Mastery Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="reactSyllabus">
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
                                <Layout className="text-info" /> React Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-info position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior React Dev</h6>
                                    <p className="small text-muted">Mastering hooks, props and basic API integration.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">State & Performance Lead</h6>
                                    <p className="small text-muted">Redux Toolkit, RTK Query and App Optimization expert.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Full Stack React Architect</h6>
                                    <p className="small text-muted">Scaling Next.js apps with complex backend integrations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">React developers see some of the highest growth rates in frontend technology.</p>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher</span>
                                    <span className="text-success fw-bold">₹5 - ₹9 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Senior (3-5 Years)</span>
                                    <span className="text-info fw-bold">₹12 - ₹25 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "65%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Staff Architect (7+ Years)</span>
                                    <span className="text-warning fw-bold">₹30 - ₹60+ LPA</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div className="alert alert-light bg-opacity-10 border-0 mt-4 py-2">
                                <small className="text-muted italic text-info">
                                    * Data based on 2024 Product Company Salary Surveys.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placement Success Stories */}
                <div className="col-12 mt-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
                            <Users className="text-info" /> React Placement Hall of Fame
                        </h2>
                        <p className="text-muted">Our alumni are building the next generation of web at these companies.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-info" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Rohan M.</h6>
                                        <small className="text-muted text-uppercase">Frontend Dev @ Uber</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The depth of knowledge in Redux and performance here is unrivaled. It directy helped me crack Uber."</p>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3 border-start border-info border-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <CheckCircle className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">You (Future Engineer)</h6>
                                        <small className="text-info fw-bold text-uppercase">Next React Specialist</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">Master modern frontend today and be the next success story featured here!</p>
                                <div className="mt-3">
                                    <button className="btn btn-sm btn-outline-info w-100">Apply Now</button>
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
                                        <h6 className="fw-bold mb-0">Sona P.</h6>
                                        <small className="text-muted text-uppercase">SDE-2 @ Atlassian</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"I learned more in 3 months here about Next.js and testing than I did in 3 years of college. Highly recommended!"</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="col-12 mt-5 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-info text-dark p-5 rounded-4 shadow-lg"
                    >
                        <h2 className="fw-bold mb-3">Build Your Dream Career in React</h2>
                        <p className="mb-4 opacity-75 fw-semibold">Join thousands of students and master the most in-demand library in the world.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Enroll Now</button>
                            <button className="btn btn-outline-dark btn-lg px-4">Watch Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ReactInfo;
