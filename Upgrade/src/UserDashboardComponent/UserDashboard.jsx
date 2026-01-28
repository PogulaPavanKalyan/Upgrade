import React, { useEffect, useState, useRef } from "react";
import "../Styles/UserDasboard.css";


import profileImg from "../assets/images/rrtalks.jpg";
import rrtraining from "../assets/images/rrtraining.png";
import upgrade from "../assets/images/upgrade.jpeg"


import Chatbot from "./Chatbot"
import "../Styles/WhyChooseUpgradeU.css";



import { useNavigate } from "react-router-dom";

import WhyChooseUpgradeU from "./WhyChooseUpgradeU";
import CourseListings from "./CourseListings";
import NavBar from "../UserDashboardComponent/NavBar";
import Faq from "../Components/Faq";
import CarouselImages from "./CrouselImages";
import SuccessStories from "../Components/SuccessStories";
import Reviews from "../Components/Reviews";
import Certificates from "../Components/Certificates";




const UserDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);


  const [showChat, setShowChat] = useState(false);

  { showChat && <Chatbot onClose={() => setShowChat(false)} /> }

  const [step, setStep] = useState(0);


  return (
    <>

      <NavBar />
      <div className="body">
        <CarouselImages />







      </div>




      <CourseListings />
      <WhyChooseUpgradeU />
      <SuccessStories />
      <Reviews />
      <Certificates />















      <button
        className="help-fab"
        aria-label="Help"
        type="button"
        onClick={() => setShowChat(!showChat)}
      >
        💬
      </button>

      {showChat && (
        <div className="box">
          <Chatbot onClose={() => setShowChat(false)} />
        </div>
      )}














      <section className="collab" >
        <div className="mb-5 text-center">
          <h2 className="collab-title">Industry Collaborations</h2>
          <p className="collab-desc">
            We work closely with trusted industry partners to deliver
            real-world training and career-oriented learning.
          </p>
        </div>

        <div className="row gy-4 cards4">

          <div className="col-12 col-md-6 col-lg-5">
            <a href="https://ygrgobalitservices.com/">
              <div className="corp-card corp-left corp-blue icon-right" >


                <div className="corp-text">
                  <h6>YGR Global IT Services</h6>
                  <p>Industry collaboration, live projects,enterprise IT exposure.</p>
                </div>
                <img src={rrtraining} alt="YGR Global IT Services" />

              </div>
            </a>
          </div>

          <div className="col-12 col-md-6 col-lg-5" >
            <a href="https://ygrittraining.ygrgobalitservices.com/">
              <div className="corp-card corp-right corp-orange icon-left">
                <img src={rrtraining} alt="RR IT Trainings" />
                <div className="corp-text">
                  <h6>RR IT Trainings</h6>
                  <p>Job-oriented technical training with mentor support.</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <a href="https://youtube.com/@rrtalktrends?si=P_NbBgkCfE_Aj2kP">
              <div className="corp-card corp-left corp-green icon-right">
                <div className="corp-text">
                  <h6>RR Talks (YouTube)</h6>
                  <p>Career guidance, interviews, and industry awareness content.</p>
                </div>
                <img src={profileImg} alt="RR Talks" />
              </div>
            </a>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="corp-card corp-right corp-purple icon-left">
              <img src={upgrade} alt="UpgradeU LMS" />
              <div className="corp-text">
                <h6>UpgradeU LMS</h6>
                <p>Assessments, progress tracking, and verified certifications.</p>
              </div>
            </div>
          </div>

        </div>



      </section>








      <section className="soft-roadmap">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="soft-title">A Roadmap to Skill Development</h2>
            <p className="soft-subtitle">
              A smooth, structured learning journey designed for students and early professionals.
            </p>
          </div>

          <div className="row g-4 justify-content-center">

            <div className="col-lg-4 col-md-6">
              <div className="soft-card">
                <div className="soft-icon">🔍</div>
                <h5>Discover</h5>
                <p>Explore career paths and identify the skills that matter.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="soft-card">
                <div className="soft-icon">📘</div>
                <h5>Select Course</h5>
                <p>Choose a structured program aligned with your goals.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="soft-card highlight">
                <div className="soft-icon">🎓</div>
                <h5>Learn & Practice</h5>
                <p>Build skills through guided lessons and hands-on projects.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="soft-card">
                <div className="soft-icon">🛠</div>
                <h5>Apply Skills</h5>
                <p>Work on real-world problems with mentor support.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="soft-card final">
                <div className="soft-icon">🏆</div>
                <h5>Certification</h5>
                <p>Earn recognition and become job-ready.</p>
              </div>
            </div>

          </div>
        </div>
      </section>




      <Faq />











      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-section">
          <h3>In-demand Careers</h3>
          <p onClick={() => navigate(`/datascienceinfo`)}>Data Scientist</p>
          <p onClick={() => navigate(`/javascriptinfo`)}>Full Stack Web Developer</p>
          <p onClick={() => navigate(`/awsinfo`)}>Cloud Engineer</p>
          <p onClick={() => navigate(`/projectmanagementinfo`)}>Project Manager</p>
          <p onClick={() => navigate(`/gamedevinfo`)}>Game Developer</p>
          <p onClick={() => navigate(`/Courses`)}>All Career Accelerators</p>
        </div>

        <div className="footer-section">
          <h3>Web Development</h3>
          <p onClick={() => navigate(`/Courses`)}>Web Development</p>
          <p onClick={() => navigate(`/javascriptinfo`)}>JavaScript</p>
          <p onClick={() => navigate(`/reactinfo`)}>React JS</p>
          <p onClick={() => navigate(`/angularinfo`)}>Angular</p>
          <p onClick={() => navigate(`/javainfo`)}>Java</p>
          <p onClick={() => navigate(`/nodejsinfo`)}>Node JS</p>
          <p onClick={() => navigate(`/mongodbinfo`)}>MongoDB</p>
        </div>

        <div className="footer-section">
          <h3>IT Certifications</h3>
          <p onClick={() => navigate(`/awsinfo`)}>Amazon AWS</p>
          <p onClick={() => navigate(`/awsinfo`)}>AWS Certified Cloud Practitioner</p>
          <p onClick={() => navigate(`/azureinfo`)}>AZ-900: Microsoft Azure Fundamentals</p>
          <p onClick={() => navigate(`/awsinfo`)}>AWS Certified Solutions Architect – Associate</p>
          <p onClick={() => navigate(`/kubernetesinfo`)}>Kubernetes</p>
          <p onClick={() => navigate(`/salesforceinfo`)}>Salesforce Administrator</p>
        </div>

        <div className="footer-section">
          <h3>Leadership</h3>
          <p onClick={() => navigate(`/leadershipinfo`)}>Leadership</p>
          <p onClick={() => navigate(`/leadershipinfo`)}>Management Skills</p>
          <p onClick={() => navigate(`/projectmanagementinfo`)}>Project Management</p>
          <p onClick={() => navigate(`/productivityinfo`)}>Personal Productivity</p>
          <p onClick={() => navigate(`/productivityinfo`)}>Emotional Intelligence</p>
        </div>

        <div className="footer-section">
          <h3>Certifications by Skill</h3>
          <p onClick={() => navigate(`/cybersecurityinfo`)}>Cybersecurity Certification</p>
          <p onClick={() => navigate(`/projectmanagementinfo`)}>Project Management Certification</p>
          <p onClick={() => navigate(`/awsinfo`)}>Cloud Certification</p>
          <p onClick={() => navigate(`/datascienceinfo`)}>Data Analytics Certification</p>
          <p onClick={() => navigate(`/hrmanagementinfo`)}>HR Management Certification</p>
          <p onClick={() => navigate(`/digitalmarketinginfo`)}>Digital Marketing Certification</p>
          <p onClick={() => navigate(`/flutterinfo`)}>Flutter Mobile Dev Certification</p>
          <p onClick={() => navigate(`/Courses`)}>See all Certifications</p>
        </div>

        <div className="footer-section">
          <h3>Data Science</h3>
          <p onClick={() => navigate(`/datascienceinfo`)}>Data Science</p>
          <p onClick={() => navigate(`/pythoninfo`)}>Python</p>
          <p onClick={() => navigate(`/machinelearninginfo`)}>Machine Learning</p>
          <p onClick={() => navigate(`/chatgptinfo`)}>ChatGPT</p>
          <p onClick={() => navigate(`/deeplearninginfo`)}>Deep Learning</p>
        </div>

        <div className="footer-section">
          <h3>Communication</h3>
          <p onClick={() => navigate(`/communicationinfo`)}>Communication Skills</p>
          <p onClick={() => navigate(`/communicationinfo`)}>Presentation Skills</p>
          <p onClick={() => navigate(`/communicationinfo`)}>Public Speaking</p>
          <p onClick={() => navigate(`/communicationinfo`)}>Writing</p>
          <p onClick={() => navigate(`/communicationinfo`)}>PowerPoint</p>
        </div>

        <div className="footer-section">
          <h3>Business Analytics &amp; Intelligence</h3>
          <p onClick={() => navigate(`/excelinfo`)}>Microsoft Excel</p>
          <p onClick={() => navigate(`/sqlinfo`)}>SQL</p>
          <p onClick={() => navigate(`/digitalmarketinginfo`)}>Digital Marketing</p>
          <p onClick={() => navigate(`/powerbiinfo`)}>Microsoft Power BI</p>
          <p onClick={() => navigate(`/datascienceinfo`)}>Data Analysis</p>
          <p onClick={() => navigate(`/projectmanagementinfo`)}>Business Analysis</p>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <p onClick={() => navigate(`/Aboutus`)}>About us</p>
          <p onClick={() => navigate(`/GetBlogs`)}>Blog</p>
          <p onClick={() => navigate(`/termsofuses`)}>Terms of use</p>
          <p onClick={() => navigate(`/Shipping`)}>Shipping</p>
          <p onClick={() => navigate(`/RefundPolicy`)}>Refund policy</p>
        </div>

        <div className="footer-section">
          <h3>Discover UpgradeU</h3>
          <p onClick={() => navigate(`/Contactform`)}>Get the app</p>
          <p onClick={() => navigate(`/Contactform`)}>Teach on UpgradeU</p>
          <p onClick={() => navigate(`/Contactform`)}>Plans and Pricing</p>
          <p onClick={() => navigate(`/Contactform`)}>Affiliate</p>
          <p onClick={() => navigate(`/Contactform`)}>Help and Support</p>
        </div>

        <div className="footer-section">
          <h3>UpgradeU for Business</h3>
          <p onClick={() => navigate(`/Contactform`)}>UpgradeU Business</p>
        </div>

        <div className="footer-section">
          <h3>Legal &amp; Accessibility</h3>
          <p onClick={() => navigate(`/accessibility`)}>Accessibility statement</p>
          <p onClick={() => navigate(`/legal-protection`)}>Privacy policy</p>
          <p onClick={() => navigate(`/sitemap`)}>Sitemap</p>
          <p onClick={() => navigate(`/termsofuses`)}>Terms</p>
        </div>
      </footer>

      <div className="footer-bottom">
        <h2>
          ©<span>UpgradeU </span>, @2025 All Rights Reserved.
        </h2>
        <p>
          Designed By <span>YGR GOBAL IT SERVICES Pvt. Ltd, 2023.</span>
        </p>
      </div>
    </>
  );
};

export default UserDashboard;
