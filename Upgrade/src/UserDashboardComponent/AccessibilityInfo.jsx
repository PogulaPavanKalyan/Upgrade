import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, Users, CheckCircle, Globe, Accessibility } from "lucide-react";
import NavBar from "./NavBar";

const AccessibilityInfo = () => {
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card shadow-md border-0 rounded-4 overflow-hidden">
                            <div className="bg-primary text-white p-5 text-center" style={{ background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)" }}>
                                <Accessibility size={64} className="mb-4 text-white" />
                                <h1 className="fw-bold mb-2">Accessibility Statement</h1>
                                <p className="opacity-75 mb-0 text-white">Our commitment to inclusive learning for everyone.</p>
                            </div>
                            <div className="card-body p-5">
                                <section className="mb-5">
                                    <h3 className="fw-bold text-dark d-flex align-items-center gap-2 mb-4">
                                        <Globe className="text-primary" /> Our Commitment
                                    </h3>
                                    <p className="text-secondary lh-lg">
                                        UpgradeU is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                                    </p>
                                </section>

                                <section className="mb-5 border-top pt-5">
                                    <h3 className="fw-bold text-dark d-flex align-items-center gap-2 mb-4">
                                        <CheckCircle className="text-success" /> Conformance Status
                                    </h3>
                                    <p className="text-secondary mb-4">
                                        The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to maintain **WCAG 2.1 Level AA** compliance across our platform.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-light">
                                                <span className="fw-bold text-dark">Screen Reader Friendly</span>
                                                <p className="small text-muted mb-0">Semantic HTML and ARIA labels for seamless navigation.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-light">
                                                <span className="fw-bold text-dark">Keyboard Navigable</span>
                                                <p className="small text-muted mb-0">Full interactivity without the need for a mouse.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-5 border-top pt-5">
                                    <h3 className="fw-bold text-dark d-flex align-items-center gap-2 mb-4">
                                        <Eye className="text-primary" /> Visual Accessibility
                                    </h3>
                                    <p className="text-secondary lh-lg">
                                        We use high-contrast color palettes and scalable typography to ensure that our learning content is readable by everyone, including those with low vision or color blindness.
                                    </p>
                                </section>

                                <section className="mt-5 pt-4 border-top text-center text-md-start">
                                    <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                                        <div className="bg-primary bg-opacity-10 p-4 rounded-circle">
                                            <Users className="text-primary" size={32} />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold">Need Assistance?</h5>
                                            <p className="text-muted mb-0">If you encounter any accessibility barriers on our site, please let us know at <strong>accessibility@upgradeu.com</strong>. We aim to respond to feedback within 2 business days.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccessibilityInfo;
