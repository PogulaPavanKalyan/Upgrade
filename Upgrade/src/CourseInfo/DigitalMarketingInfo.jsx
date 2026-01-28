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
    Megaphone,
    Search,
    BarChart3
} from "lucide-react";

const DigitalMarketingInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const syllabus = [
        {
            title: "Module 1: Performance Marketing Foundations",
            topics: ["Introduction to the Digital Marketing Funnel", "Understanding Customer Personas & Value Journey", "Competitor Analysis & Market Research Tools", "Budget Allocation & ROI Calculation Basics"]
        },
        {
            title: "Module 2: Search Engine Optimization (SEO)",
            topics: ["Keyword Research Mastery", "On-Page vs Off-Page SEO Strategies", "Technical SEO & Core Web Vitals", "Backlink Building & Content Authority"]
        },
        {
            title: "Module 3: Social Media Marketing (SMM) & Ads",
            topics: ["Meta (Facebook/Instagram) Ads Manager", "LinkedIn Marketing for B2B", "YouTube & TikTok Content Strategy", "Handling Viral Campaigns & Organic Growth"]
        },
        {
            title: "Module 4: Search Engine Marketing (SEM - Google Ads)",
            topics: ["Search, Display, and Video Campaign Setup", "Ad Copywriting & Quality Score Optimization", "Remarketing & Retargeting Flows", "Managing Google Merchant Center for E-commerce"]
        },
        {
            title: "Module 5: Content Marketing & Email Automation",
            topics: ["Copywriting for Conversions", "Building Automated Email Drip Campaigns", "Mastering CRM tools like HubSpot/Mailchimp", "Influencer Marketing & Partnership Strategy"]
        },
        {
            title: "Module 6: Data Analytics & Performance Reporting",
            topics: ["Google Analytics 4 (GA4) Mastery", "Looker Studio for Executive Dashboards", "A/B Testing with Google Optimize", "Attribution Models & Growth Hacking Frameworks"]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center mb-5">
                <div className="d-flex justify-content-center mb-3">
                    <Megaphone size={48} className="text-danger" />
                </div>
                <h1 className="fw-bold text-dark display-4 mb-3">Mastering Digital Marketing</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    From SEO to AI-driven performance marketing. Master the art and science of growing brands in the digital age.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <span className="badge bg-danger px-3 py-2">Growth Hacker</span>
                    <span className="badge bg-dark px-3 py-2">SEO Expert</span>
                    <span className="badge bg-info text-dark px-3 py-2">Ads Specialist</span>
                </div>
            </motion.div>

            <div className="row g-4">
                <div className="col-12">
                    <motion.div whileHover={{ scale: 1.01 }} className="card shadow-sm border-0 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-4 bg-danger d-flex align-items-center justify-content-center p-4">
                                <Search size={120} className="text-white opacity-75" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold text-dark mb-3">Why Digital Marketing?</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Traditional advertising is evolving. Every business needs a digital presence. Mastering **Performance Marketing** and **SEO** allows you to drive measurable growth and command budgets in any industry.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <TrendingUp className="text-success" size={20} />
                                                <span className="small fw-semibold">High ROI Execution</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <BarChart3 className="text-primary" size={20} />
                                                <span className="small fw-semibold">Data-Driven Strategy</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Globe className="text-info" size={20} />
                                                <span className="small fw-semibold">Global Brand Reach</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2">
                                                <Users className="text-warning" size={20} />
                                                <span className="small fw-semibold">Community Building</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Digital Marketing AI Spotlight Section */}
                <div className="col-12 mt-4">
                    <div className="card border-0 shadow-lg text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #e74c3c 0%, #34495e 100%)" }}>
                        <div className="card-body p-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="fw-bold mb-3 text-white">AI in Performance Marketing</h2>
                                    <p className="lead mb-4" style={{ color: "#ecf0f1" }}>Revolutionizing content creation, ad targeting, and customer insights with Generative AI tools.</p>
                                    <div className="row mt-4 g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-danger bg-opacity-25 p-2 rounded">
                                                    <Brain size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">AI Content Generation</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Learn to use LLMs to draft SEO-friendly blogs and high-converting ad copy in seconds, reducing production time by 80%.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex gap-3 align-items-start p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-10">
                                                <div className="bg-info bg-opacity-25 p-2 rounded">
                                                    <Cpu size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-white">Programmatic AI Bidding</h6>
                                                    <p className="small mb-0" style={{ color: "#ffffff" }}>Experience how to leverage AI-driven bidding strategies in Google and Meta ads to automatically optimize for the lowest CPA.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mt-5 mt-md-0 d-none d-md-block">
                                    <div className="display-1 fw-bold opacity-10 text-white">DM AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <h2 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                        <BookOpen className="text-danger" /> Digital Marketing Curriculum
                    </h2>
                    <div className="accordion bg-white shadow-sm rounded overflow-hidden" id="dmSyllabus">
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
                                                    <div className="bg-danger rounded-circle" style={{ width: "6px", height: "6px" }}></div>
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
                    <div className="card h-100 shadow-sm border-0 border-top border-danger border-4">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <Users className="text-danger" /> Career Roadmap
                            </h4>
                            <div className="position-relative ms-2">
                                <div className="border-start border-2 border-danger position-absolute h-100" style={{ left: "0", top: "0" }}></div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-danger rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Digital Marketing Executive</h6>
                                    <p className="small text-muted">Daily campaign management, social media updates, and basic reporting.</p>
                                </div>
                                <div className="mb-4 ms-4 position-relative">
                                    <div className="position-absolute bg-danger rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Performance Marketing Manager</h6>
                                    <p className="small text-muted">Managing large ad budgets, optimizing funnel conversions, and driving growth.</p>
                                </div>
                                <div className="ms-4 position-relative">
                                    <div className="position-absolute bg-success rounded-circle" style={{ width: "12px", height: "12px", left: "-31px", top: "6px" }}></div>
                                    <h6 className="fw-bold mb-1">Chief Marketing Officer (CMO)</h6>
                                    <p className="small text-muted">Directing global brand strategy, integrated marketing, and corporate revenue growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="card h-100 shadow-sm border-0 bg-dark text-white p-2">
                        <div className="card-body">
                            <h4 className="fw-bold mb-3">Salary & Market Value</h4>
                            <p className="text-muted small">Specialized digital marketers are among the highest-paid non-technical roles in the tech industry.</p>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Junior Marketing Exec</span>
                                    <span className="text-success fw-bold">₹5 - ₹9 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-success" style={{ width: "35%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Marketing Manager (5-8 Yrs)</span>
                                    <span className="text-info fw-bold">₹15 - ₹35 LPA</span>
                                </div>
                                <div className="progress mb-4" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-info" style={{ width: "65%" }}></div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>CMO / Head of Growth</span>
                                    <span className="text-warning fw-bold">₹45 - ₹1.8 Cr+ LPA</span>
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
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-danger text-white p-5 rounded-4 shadow-lg">
                        <h2 className="fw-bold mb-3">Scale Your Brand's Potential</h2>
                        <p className="mb-4 opacity-75">Enroll now for 100+ hours of Practical Performance Marketing and SEO Labs.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-dark btn-lg px-5 fw-bold">Join DM Track</button>
                            <button className="btn btn-outline-light btn-lg px-4">See Lab Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingInfo;
