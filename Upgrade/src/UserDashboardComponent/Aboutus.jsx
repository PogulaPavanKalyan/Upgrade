import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutUs.css";
import NavBar from "./NavBar";
import Founder from "../Components/Founder";
import ourjourney from "../assets/images/ourjourney.png";
 
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, TrendingUp, Award, Rocket, CheckCircle2 } from "lucide-react";




const AboutUs = () => {





  return (
    <section className="about-page">
      <NavBar />


      {/* ================= ABOUT UPGRADEU ================= */}
      <section className="container py-5 about-upgradeu">
        <div className="row align-items-center g-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-lg-6"
          >
            <span className="badge bg-warning text-dark px-3 py-2 mb-3 fw-bold">OUR STORY</span>
            <h1 className="fw-bold display-4 mb-4">About UpgradeU</h1>
            <p className="about-highlight">
              A career-focused learning platform built to turn technical skills into real-world professional outcomes.
            </p>
            <p className="lead text-secondary mb-4">
              UpgradeU isn't just about watching videos. It's about **active building**. We help learners move beyond stagnant theory by focusing on practical application, structured mentorship, and live project experience.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <div className="d-flex align-items-center gap-2 bg-light p-2 rounded-3 border">
                <CheckCircle2 size={20} className="text-success" />
                <span className="small fw-semibold">Mentorship Driven</span>
              </div>
              <div className="d-flex align-items-center gap-2 bg-light p-2 rounded-3 border">
                <CheckCircle2 size={20} className="text-success" />
                <span className="small fw-semibold">Industry Aligned</span>
              </div>
              <div className="d-flex align-items-center gap-2 bg-light p-2 rounded-3 border">
                <CheckCircle2 size={20} className="text-success" />
                <span className="small fw-semibold">Zero Fluff Theory</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="col-lg-6"
          >
            <div className="about-image-frame shadow-lg border-0 bg-transparent p-0 overflow-hidden">
              <img
                src=" public\SuccessImages\ourteam.jpg"
                alt="UpgradeU Career Training"
                className="img-fluid hover-zoom"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* ================= OUR PURPOSE ================= */}
      <section className="our-purpose-section overflow-hidden">
        <div className="container">
          <div className="row align-items-start gy-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-lg-5"
            >
              <div className="purpose-accent">
                <h2 className="purpose-title display-5">Our Purpose</h2>
                <p className="purpose-highlight">
                  To bridge the gap between static learning and dynamic real-world careers.
                </p>
                <p className="purpose-desc lead">
                  We exist to ensure that education leads to **confidence, capability, and meaningful growth** — not just digital certificates or textbook theory.
                </p>
                <div className="mt-5 d-none d-lg-block">
                  <div className="p-4 bg-white shadow-sm rounded-4 border-start border-4 border-warning">
                    <Lightbulb className="text-warning mb-3" size={32} />
                    <h6 className="fw-bold">The UpgradeU Edge</h6>
                    <p className="small text-muted mb-0">Every module is designed with one question in mind: "Will this help a learner succeed in a professional interview today?"</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="col-lg-7">
              <div className="purpose-points">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="purpose-point p-4 bg-white rounded-4 shadow-sm border mb-4"
                >
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div className="bg-success bg-opacity-10 p-2 rounded">
                      <Target className="text-success" size={24} />
                    </div>
                    <h5 className="mb-0">Our Mission</h5>
                  </div>
                  <p>Equip learners with practical skills, rigorous mentorship, and real industry exposure that directly translate into long-term career success and financial stability.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="purpose-point p-4 bg-white rounded-4 shadow-sm border mb-4"
                >
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div className="bg-primary bg-opacity-10 p-2 rounded">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                    <h5 className="mb-0">Our Vision</h5>
                  </div>
                  <p>To create a global learning ecosystem where technology education consistently produces job-ready, confident, and highly skilled professionals who lead in their fields.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="purpose-point p-4 bg-white rounded-4 shadow-sm border"
                >
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div className="bg-warning bg-opacity-10 p-2 rounded">
                      <Users className="text-warning" size={24} />
                    </div>
                    <h5 className="mb-0">Why UpgradeU</h5>
                  </div>
                  <p>Because today's job market demands applied capability, clarity, and expert guidance. We provide the bridge from being a "student" to becoming a "contributor".</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ================= OUR JOURNEY ================= */}
      <section className="journey-image-section">
        <div className="container">


          <div className="journey-image-wrapper">
            <img
              src={ourjourney}   // update path if needed
              alt="UpgradeU Journey Roadmap"
              className="journey-image"
            />
          </div>
        </div>
      </section>





      {/* ================= WHO WE ARE ================= */}
      <section className="who-we-are-section">
        <div className="container">
          <h2 className="who-title">Who We Are</h2>
          <p className="who-sub">
            A team committed to building real careers through practical learning
          </p>

          <div className="row who-grid">
            {/* Educators */}
            <div className="col-md-4">
              <div className="who-block educator">
                <h4>Educators</h4>
                <p>
                  Our educators focus on strong fundamentals, clear explanations,
                  and hands-on understanding. They ensure learners truly grasp
                  concepts instead of memorizing theory.
                </p>
              </div>
            </div>

            {/* Industry Mentors */}
            <div className="col-md-4">
              <div className="who-block mentors">
                <h4>Industry Mentors</h4>
                <p>
                  Working professionals who bring real-world tools, workflows,
                  and problem-solving approaches directly into the classroom.
                </p>
              </div>
            </div>

            {/* Career Team */}
            <div className="col-md-4">
              <div className="who-block careers">
                <h4>Career Enablers</h4>
                <p>
                  A dedicated team that supports learners with guidance, confidence
                  building, interview preparation, and career readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ================= OUR CORE VALUES ================= */}
      <section className="core-values-section">
        <div className="container">
          <h2 className="values-title">Our Core Values</h2>
          <p className="values-sub">
            Principles that guide how we teach, build, and support learners
          </p>

          <div className="values-list">

            <div className="value-item">
              <div className="value-icon">⚡</div>
              <div className="value-content">
                <h5>Practical Learning</h5>
                <p>
                  We focus on skills that can be applied immediately in real-world
                  environments, not just theoretical knowledge.
                </p>
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">🧭</div>
              <div className="value-content">
                <h5>Mentorship First</h5>
                <p>
                  Learning is faster and more effective when guided by experienced
                  professionals who have worked in the industry.
                </p>
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">🔍</div>
              <div className="value-content">
                <h5>Integrity & Transparency</h5>
                <p>
                  We believe in honest communication, clear expectations, and
                  measurable outcomes for every learner.
                </p>
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">📈</div>
              <div className="value-content">
                <h5>Career Impact</h5>
                <p>
                  Success is measured by learner growth, confidence, and long-term
                  professional progress.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <Founder />

      {/* ================= BUILD SKILLS CTA ================= */}
      <section className="skills-cta">
        <div className="container text-center">
          <h2>Build Skills That Employers Value</h2>
          <p>
            Learn through hands-on projects, mentorship, and real-world experience.
          </p>
          <button className="btn btn-dark px-4 py-2 fw-semibold">
            Start Your Journey
          </button>
        </div>
      </section>

    </section>
  );
};

export default AboutUs;
