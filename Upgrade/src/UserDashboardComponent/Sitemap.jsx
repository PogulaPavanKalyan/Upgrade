import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Map, Book, Settings, Info, Briefcase, HelpCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Sitemap = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Core Platform",
            icon: <Map className="text-primary" />,
            links: [
                { name: "Dashboard", path: "/" },
                { name: "All Courses", path: "/Courses" },
                { name: "User Profile", path: "/Profile" },
                { name: "My Cart", path: "/AddtoCart" },
            ]
        },
        {
            title: "Course Categories",
            icon: <Book className="text-success" />,
            links: [
                { name: "Web Development", path: "/javascriptinfo" },
                { name: "Data Science", path: "/datascienceinfo" },
                { name: "Cloud Computing", path: "/awsinfo" },
                { name: "AI & Machine Learning", path: "/machinelearninginfo" },
                { name: "Design (UI/UX)", path: "/uiuxinfo" },
                { name: "Business & Management", path: "/leadershipinfo" },
            ]
        },
        {
            title: "About & Legal",
            icon: <Info className="text-info" />,
            links: [
                { name: "About Us", path: "/Aboutus" },
                { name: "Blog", path: "/GetBlogs" },
                { name: "Privacy Policy", path: "/legal-protection" },
                { name: "Terms of Use", path: "/termsofuses" },
                { name: "Refund Policy", path: "/RefundPolicy" },
                { name: "Accessibility", path: "/accessibility" },
            ]
        },
        {
            title: "Support & Growth",
            icon: <HelpCircle className="text-warning" />,
            links: [
                { name: "Contact Support", path: "/Contactform" },
                { name: "Teach on UpgradeU", path: "/Contactform" },
                { name: "Affiliate Program", path: "/Contactform" },
                { name: "Business Solutions", path: "/Contactform" },
            ]
        }
    ];

    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold display-4 text-dark mb-3">Sitemap</h1>
                    <p className="lead text-muted">A comprehensive map of all pages and resources on UpgradeU.</p>
                </div>

                <div className="row g-4">
                    {sections.map((section, idx) => (
                        <div className="col-md-6 col-lg-3" key={idx}>
                            <div className="card h-100 shadow-sm border-0 rounded-4">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center gap-2 mb-4">
                                        {section.icon}
                                        <h5 className="fw-bold mb-0">{section.title}</h5>
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        {section.links.map((link, lIdx) => (
                                            <li key={lIdx} className="mb-3">
                                                <button
                                                    onClick={() => navigate(link.path)}
                                                    className="btn btn-link text-decoration-none p-0 text-secondary hover-primary text-start w-100"
                                                    style={{ fontSize: "0.95rem" }}
                                                >
                                                    {link.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 pt-5 border-top text-center">
                    <p className="text-muted small">Can't find what you're looking for? <button onClick={() => navigate('/Contactform')} className="btn btn-link p-0 small fw-bold text-primary text-decoration-none">Contact our team</button></p>
                </div>
            </div>
        </>
    );
};

export default Sitemap;
