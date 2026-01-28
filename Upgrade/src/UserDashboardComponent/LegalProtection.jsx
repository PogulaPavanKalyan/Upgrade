import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShieldCheck, Lock, Eye, FileText, Globe } from "lucide-react";
import NavBar from "./NavBar";

const LegalProtection = () => {
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                            <div className="bg-dark text-white p-5 text-center">
                                <ShieldCheck size={64} className="mb-4 text-success" />
                                <h1 className="fw-bold mb-2">Privacy Policy</h1>
                                <p className="opacity-75 mb-0 text-white">Last Updated: January 2026</p>
                            </div>
                            <div className="card-body p-5">
                                <section className="mb-5">
                                    <h3 className="fw-bold text-dark d-flex align-items-center gap-2 mb-4">
                                        <Eye className="text-primary" /> 1. Overview
                                    </h3>
                                    <p className="text-secondary lh-lg">
                                        At **UpgradeU**, your privacy is our priority. This policy outlines how we collect, use, and protect your information when you use our platform. By accessing our services, you agree to the practices described here.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h3 className="fw-bold text-dark d-flex align-items-center gap-2 mb-4">
                                        <Lock className="text-primary" /> 2. Information We Collect
                                    </h3>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="p-4 rounded-3 border bg-light h-100">
                                                <h6 className="fw-bold">Personal Data</h6>
                                                <p className="small text-muted mb-0">Name, email address, phone number, and billing details provided during registration.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-4 rounded-3 border bg-light h-100">
                                                <h6 className="fw-bold">Usage Data</h6>
                                                <p className="small text-muted mb-0">Learning progress, course interactions, and technical logs (IP address, browser type).</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-5">
                                    <h3 className="fw-bold text-dark d-flex align-items-center gap-2 mb-4">
                                        <FileText className="text-primary" /> 3. How We Use Data
                                    </h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item bg-transparent px-0 border-0 d-flex gap-3">
                                            <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2" style={{ width: "fit-content", height: "fit-content" }}>
                                                <span className="small fw-bold">01</span>
                                            </div>
                                            <p className="mb-0 text-secondary">To provide and maintain our learning platform and services.</p>
                                        </li>
                                        <li className="list-group-item bg-transparent px-0 border-0 d-flex gap-3">
                                            <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2" style={{ width: "fit-content", height: "fit-content" }}>
                                                <span className="small fw-bold">02</span>
                                            </div>
                                            <p className="mb-0 text-secondary">To process payments and prevent fraudulent transactions.</p>
                                        </li>
                                        <li className="list-group-item bg-transparent px-0 border-0 d-flex gap-3">
                                            <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2" style={{ width: "fit-content", height: "fit-content" }}>
                                                <span className="small fw-bold">03</span>
                                            </div>
                                            <p className="mb-0 text-secondary">To communicate course updates, certificates, and marketing offers.</p>
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-5 border-top pt-5">
                                    <h3 className="fw-bold text-dark d-flex align-items-center gap-2 mb-4">
                                        <Globe className="text-primary" /> 4. Data Sharing & Security
                                    </h3>
                                    <p className="text-secondary lh-lg mb-4">
                                        We do not sell your personal data. We only share information with trusted third-party services (like payment gateways and cloud providers) necessary to operate the platform.
                                    </p>
                                    <div className="alert alert-info border-0 rounded-3">
                                        <strong>Data Residency:</strong> All data is stored securely using industry-standard encryption protocols on our cloud servers.
                                    </div>
                                </section>

                                <div className="text-center mt-5 pt-4 border-top">
                                    <p className="text-muted small mb-0">If you have questions about your data, contact us at <strong>privacy@upgradeu.com</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LegalProtection;
