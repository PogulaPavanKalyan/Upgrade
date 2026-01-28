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
    Box
} from "lucide-react";

const KubernetesInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Introduction to Containers & K8s",
            topics: ["Monolithic vs Microservices Architecture", "Docker Fundamentals Recap", "Kubernetes Architecture (Control Plane & Nodes)", "The Role of etcd and Kube-scheduler"]
        },
        {
            title: "Module 2: Core Kubernetes Objects",
            topics: ["Pods, ReplicaSets, and Deployments", "Namespaces & Resource Quotas", "Labels & Selectors", "Service Types (ClusterIP, NodePort, LoadBalancer)"]
        },
        {
            title: "Module 3: Storage & Configuration Management",
            topics: ["Volumes & PersistentVolumes (PV/PVC)", "ConfigMaps & Secrets", "Storage Classes", "Dynamic Provisioning"]
        },
        {
            title: "Module 4: Networking & Ingress Controllers",
            topics: ["Cluster Networking Model", "CoreDNS in Kubernetes", "Ingress Resources & Controllers (Nginx/Traefik)", "Network Policies for Security"]
        },
        {
            title: "Module 5: Application Lifecycle & Updates",
            topics: ["Rolling Updates & Rollbacks", "Liveness & Readiness Probes", "Job & CronJob Management", "Horizontal Pod Autoscaler (HPA)"]
        },
        {
            title: "Module 6: Advanced Cluster Ops & Security",
            topics: ["RBAC (Role-Based Access Control)", "Helm Package Management", "Monitoring with Prometheus & Grafana", "GitOps with ArgoCD/Flux"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <h1 className="fw-bold text-primary display-4 mb-3" style={{ color: "#326ce5" }}>Mastering Kubernetes (K8s)</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    The operating system of the cloud. Learn to orchestrate containers at scale, automate deployments, and manage resilient microservices.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">CKA / CKAD Ready</span>
                    <span className="badge bg-dark px-3 py-2">DevOps Expert</span>
                    <span className="badge bg-info text-dark px-3 py-2">GitOps Integrated</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <Box size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Kubernetes?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Kubernetes has become the standard for modern infrastructure. Whether you are at a startup or Google, **Cloud Orchestration** is the skill that bridges development and reliable production operations.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Server className="text-primary" size={20} />
                                                <span className="small fw-semibold">Auto-Healing Clusters</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Seamless Scaling</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Multi-Cloud Portability</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Zero-Downtime Updates</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* K8s AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #326ce5 0%, #1a1a2e 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AIOps & K8s Intelligence</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Using machine learning to predict resource needs and automate cluster troubleshooting.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Predictive Autoscaling</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to deploy models that scale your cluster before the traffic spike hits.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-success bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Log Analysis</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Master tools that use NLP to correlate thousands of logs and find root causes in seconds.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">AIOPS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Kubernetes Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="k8sSyllabus">
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
                                <Users className="text-info" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Junior DevOps Engineer</h6>
                                    <p className="small text-muted">CI/CD pipeline maintenance and basic manifest management.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Kubernetes Administrator / SRE</h6>
                                    <p className="small text-muted">Cluster reliability and performance tuning for production loads.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Platform Architect</h6>
                                    <p className="small text-muted">Designing internal developer platforms and multi-region cloud infra.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">K8s skills are currently the highest-paid in the DevOps and Cloud engineering domain.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>DevOps Associate</span>
                                    <span className="text-success fw-bold">₹10 - ₹15 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Cloud/K8s Pro (4-7 Yrs)</span>
                                    <span className="text-info fw-bold">₹22 - ₹45 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Staff SRE / Architect</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-primary text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Ready to Command the Cloud?</h2>
                        <p className="mb-4 opacity-75">Enroll now for 120+ hours of Hands-on Kubernetes Labs and CKA Prep.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Start Orchestrating</button>
                            <button className="btn btn-outline-light btn-lg px-4">Watch Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default KubernetesInfo;
