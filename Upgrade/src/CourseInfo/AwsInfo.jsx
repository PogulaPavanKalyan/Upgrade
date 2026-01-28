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
    Cloud
} from "lucide-react";

const AwsInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Cloud Fundamentals & AWS Overview",
            topics: ["Introduction to Cloud Computing", "AWS Global Infrastructure (Regions/AZs)", "Setting up AWS Free Tier Account", "IAM Roles, Users & Policies"]
        },
        {
            title: "Module 2: Compute Services (EC2 & Lambda)",
            topics: ["Amazon EC2 Instance Types", "Security Groups & Key Pairs", "Elastic Load Balancer (ELB)", "AWS Lambda & Serverless Basics"]
        },
        {
            title: "Module 3: Storage Solutions (S3 & EBS)",
            topics: ["Amazon S3 Buckets & Policies", "S3 Storage Classes", "Elastic Block Store (EBS)", "AWS EFS & Storage Gateway"]
        },
        {
            title: "Module 4: Networking (VPC)",
            topics: ["Amazon VPC Architecture", "Subnets, Route Tables & Internet Gateways", "Network ACLs vs Security Groups", "AWS Direct Connect & Transit Gateway"]
        },
        {
            title: "Module 5: Databases on AWS",
            topics: ["Amazon RDS (SQL)", "Amazon DynamoDB (NoSQL)", "Amazon Redshift (Data Warehouse)", "AWS ElastiCache"]
        },
        {
            title: "Module 6: Monitoring & Security",
            topics: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Shield & WAF", "KMS & Certificate Manager"]
        },
        {
            title: "Module 7: Infrastructure as Code (IaC)",
            topics: ["AWS CloudFormation Basics", "Intro to AWS CDK", "Terraform Integration with AWS", "Managing Infrastructure via CLI"]
        },
        {
            title: "Module 8: Application Integration",
            topics: ["Amazon SQS (Simple Queue Service)", "Amazon SNS (Notification Service)", "AWS Step Functions", "SES Integration"]
        },
        {
            title: "Module 9: DevOps on AWS",
            topics: ["AWS CodeCommit & CodePipeline", "AWS CodeDeploy", "AWS CodeBuild", "CI/CD Best Practices"]
        },
        {
            title: "Module 10: AI & Machine Learning on AWS",
            topics: ["Amazon SageMaker", "Amazon Rekognition", "Amazon Polly & Lex", "Integration AI into Apps"]
        },
        {
            title: "Module 11: Well-Architected Framework",
            topics: ["Operational Excellence", "Security & Reliability", "Performance Efficiency", "Cost Optimization"]
        },
        {
            title: "Module 12: Certification Prep (SAA-C03)",
            topics: ["Exam Strategy & Dumps Analysis", "Hands-on Lab scenarios", "Scenario-based Question Solving", "Mock Exams"]
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
                <h1 className="fw-bold text-primary display-4 mb-3">Mastering Amazon Web Services (AWS)</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Scale the world's most comprehensive and broadly adopted cloud platform. Build, deploy, and manage highly available systems in the cloud.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary px-3 py-2">SAA-C03 Ready</span>
                    <span className="badge bg-warning text-dark px-3 py-2">Cloud Solutions Path</span>
                    <span className="badge bg-dark px-3 py-2">DevOps Focus</span>
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
                                <Cloud size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why AWS Cloud?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        AWS powers millions of businesses in 190 countries. In the era of digital transformation, **Cloud Architects** are the backbone of the tech world, ensuring scalability, security, and global reach for every application.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-primary" size={20} />
                                                <span className="small fw-semibold">Global Infrastructure</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <ShieldCheck className="text-success" size={20} />
                                                <span className="small fw-semibold">Unmatched Security</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Layers className="text-info" size={20} />
                                                <span className="small fw-semibold">200+ Trusted Services</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Zap className="text-warning" size={20} />
                                                <span className="small fw-semibold">Infinite Scalability</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* AWS AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #232f3e 0%, #ff9900 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI/ML on AWS Cloud</h2>
                                    <p className="lead mb-4" style={{ color: "#f2f2f2" }}>Building intelligent applications using industrial-strength AI services.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-warning bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-warning" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Amazon SageMaker</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>The most comprehensive machine learning service for building, training, and deploying models.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-primary bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AWS Bedrock</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Scale generative AI applications by integrating customized foundation models via API.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">AWS AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Pillars */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div className="card-body">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Server className="text-primary" />
                            </div>
                            <h5 className="fw-bold">High Availability</h5>
                            <p className="small text-muted">Designing fault-tolerant systems that survive region-level failures automatically.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-success border-4">
                        <div className="card-body">
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <ShieldCheck className="text-success" />
                            </div>
                            <h5 className="fw-bold">Cloud Security</h5>
                            <p className="small text-muted">Mastering the shared responsibility model to protect enterprise data and workloads.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 border-top border-warning border-4">
                        <div className="card-body">
                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                <Zap className="text-warning" />
                            </div>
                            <h5 className="fw-bold">Cost Mastery</h5>
                            <p className="small text-muted">Optimizing cloud spend using Reserved Instances, Spot, and Savings Plans effectively.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Syllabus Section */}
                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-primary" /> Cloud Architect Syllabus
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="awsSyllabus">
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
                                <Layout className="text-info" /> Cloud Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-primary position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">AWS Certified Practitioner</h6>
                                    <p className="small text-muted">Foundational understanding of core cloud services and billing.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-primary rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Solutions Architect Associate</h6>
                                    <p className="small text-muted">Designing cost-effective and resilient architectures for clients.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Senior Cloud Architect/DevOps Lead</h6>
                                    <p className="small text-muted">Managing enterprise deployments and hybrid cloud automation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary Packages</h4>
                            <p className="text-muted small">Cloud computing experts represent the highest paid tier in modern IT infrastructure.</p>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Fresher (Associate)</span>
                                    <span className="text-success fw-bold">₹7 - ₹12 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "45%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Cloud Engineer (3-5 Years)</span>
                                    <span className="text-info fw-bold">₹15 - ₹35 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Staff Architect (8+ Years)</span>
                                    <span className="text-warning fw-bold">₹40 - ₹90+ LPA</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div className="alert alert-light bg-opacity-10 border-0 mt-4 py-2">
                                <small className="text-muted italic text-info">
                                    * Data based on 2024 Tier-1 IT Hiring Analytics.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placement Success Stories */}
                <div className="col-12 mt-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
                            <Users className="text-primary" /> Cloud Hall of Fame
                        </h2>
                        <p className="text-muted">Meet the architects who transformed their careers on the cloud.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                                        <TrendingUp className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Sameer T.</h6>
                                        <small className="text-muted text-uppercase">Cloud Lead @ Capgemini</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The real-world VPC projects here were exactly what they asked in my Capgemini interview. Worth every penny."</p>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div whileHover={{ y: -5 }} className="card border-0 shadow-sm p-3 border-start border-primary border-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                                        <CheckCircle className="text-success" size={20} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">You (Future Architect)</h6>
                                        <small className="text-primary fw-bold text-uppercase">Next AWS Pro</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">Join our cloud track today and be the next architect to land a 20+ LPA role!</p>
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
                                        <h6 className="fw-bold mb-0">Neha R.</h6>
                                        <small className="text-muted text-uppercase">DevOps @ Goldman Sachs</small>
                                    </div>
                                </div>
                                <p className="small text-secondary mb-0">"The combination of AWS and Terraform was lethal in the job market. This course is a Must for DevOps roles."</p>
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
                        <h2 className="fw-bold mb-3">Ready to Build the Future on AWS?</h2>
                        <p className="mb-4 opacity-75 fw-semibold">Enroll now for 100+ hours of Hands-on Cloud Labs and Certification Training.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-5 fw-bold text-primary">Enroll Now</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AwsInfo;
