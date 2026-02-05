import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutUs.css";
import NavBar from "./NavBar";
import Founder from "../Components/Founder";
import ourjourney from "../assets/images/ourjourney.png";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, TrendingUp, CheckCircle2 } from "lucide-react";

// Fade Up Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const AboutUs = () => {
  return (
    <div className="about-page-wrapper">
      <NavBar />

      {/* ================= HERO SECTION (Magazine Style) ================= */}
      <section className="about-hero container py-5">
        <div className="row align-items-center gy-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="col-lg-6"
          >
            <div className="hero-accent-line"></div>
            <span className="text-uppercase tracking-widest small fw-bold text-muted mb-2 d-block">
              Our Story
            </span>
            <h1 className="display-3 fw-bold mb-4 playfair-font">
              Defining the Future <br />
              <span className="text-gold fst-italic">of Career Growth</span>
            </h1>
            <p className="lead text-secondary mb-4 about-lead">
              UpgradeU isn't just about watching videos. It's about <strong>active building</strong>. We bridge the gap between static theory and dynamic careers through mentorship and real-world application.
            </p>

            <div className="d-flex flex-wrap gap-4 mt-5">
              <div className="d-flex align-items-center gap-3">
                <CheckCircle2 size={24} className="text-gold" />
                <span className="fw-semibold">Mentorship Driven</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <CheckCircle2 size={24} className="text-gold" />
                <span className="fw-semibold">Industry Aligned</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <CheckCircle2 size={24} className="text-gold" />
                <span className="fw-semibold">Zero Fluff</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6"
          >
            <div className="classic-image-frame">
              <img
                src="public\SuccessImages\ourteam.jpg"
                alt="UpgradeU Team"
                className="img-fluid"
              />
              <div className="gold-frame-border"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PURPOSE SECTION (Clean & Editorial) ================= */}
      <section className="purpose-section py-5 bg-cream">
        <div className="container py-5">
          <div className="row g-5">
            {/* Left Column: The "Why" */}
            <div className="col-lg-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="sticky-top"
                style={{ top: "100px" }}
              >
                <h2 className="display-5 fw-bold mb-4 playfair-font">Our Purpose</h2>
                <div className="divider-gold mb-4"></div>
                <p className="fs-5 text-secondary lh-lg">
                  To ensure that education leads to <strong>confidence, capability, and meaningful growth</strong> — not just digital certificates.
                </p>

                <div className="quote-box mt-5 p-4 border-start border-3 border-gold bg-white shadow-sm">
                  <Lightbulb className="text-gold mb-3" size={32} />
                  <p className="fst-italic mb-0">
                    "Will this help a learner succeed in a professional interview today?"
                  </p>
                  <span className="d-block mt-3 small text-muted text-uppercase fw-bold">
                    — The UpgradeU Standard
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: The Core Pillars */}
            <div className="col-lg-7">
              <div className="d-flex flex-column gap-5">
                {[
                  {
                    title: "Our Mission",
                    icon: <Target size={28} />,
                    desc: "Equip learners with practical skills, rigorous mentorship, and real industry exposure that directly translate into long-term career success."
                  },
                  {
                    title: "Our Vision",
                    icon: <TrendingUp size={28} />,
                    desc: "To create a global learning ecosystem where technology education consistently produces job-ready, confident, and highly skilled professionals."
                  },
                  {
                    title: "Why UpgradeU",
                    icon: <Users size={28} />,
                    desc: "Because today's job market demands applied capability. We provide the bridge from being a 'student' to becoming a 'contributor'."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="pillar-card p-4 bg-white border border-light"
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="icon-circle">{item.icon}</div>
                      <h3 className="h4 fw-bold mb-0">{item.title}</h3>
                    </div>
                    <p className="text-secondary mb-0">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY SECTION (Wide Cinematic) ================= */}
      <section className="journey-section py-5 bg-white">
        <div className="container py-5 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            {/* <span className="text-gold text-uppercase fw-bold small">The Roadmap</span>
            <h2 className="display-4 fw-bold mb-5 playfair-font">Our Journey</h2> */}
            <div className="journey-image-container">
              <img
                src={ourjourney}
                alt="UpgradeU Journey"
                className="img-fluid"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE (Grid) ================= */}
      <section className="who-section py-5 bg-dark text-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 playfair-font text-white">Who We Are</h2>
            <p className="text-muted">A team committed to building real careers.</p>
          </div>

          <div className="row g-4">
            {[
              { title: "Educators", desc: "Focusing on strong fundamentals and hands-on understanding.", color: "border-gold" },
              { title: "Industry Mentors", desc: "Bringing real-world tools and workflows directly to the classroom.", color: "border-white" },
              { title: "Career Enablers", desc: "Building confidence and preparing learners for the interview room.", color: "border-gold" }
            ].map((role, idx) => (
              <div key={idx} className="col-md-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`who-card p-4 h-100 bg-black border-top border-4 ${role.color}`}
                >
                  <h4 className="fw-bold mb-3 text-white">{role.title}</h4>
                  <p className="text-secondary mb-0">{role.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION (Minimalist) ================= */}
      <section className="values-section py-5 bg-cream">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="playfair-font fw-bold">Core Values</h2>
                <div className="divider-center mx-auto bg-gold my-3"></div>
              </div>

              <div className="row g-4">
                {[
                  { icon: "⚡", title: "Practical Learning", text: "Skills applied immediately, not just theory." },
                  { icon: "🧭", title: "Mentorship First", text: "Guided by experienced professionals." },
                  { icon: "🔍", title: "Integrity", text: "Honest communication and clear barriers." },
                  { icon: "📈", title: "Career Impact", text: "Success measured by your professional growth." }
                ].map((val, i) => (
                  <div key={i} className="col-md-6">
                    <div className="d-flex gap-4 align-items-start p-4 bg-white border shadow-sm h-100 value-box">
                      <span className="display-6">{val.icon}</span>
                      <div>
                        <h5 className="fw-bold mb-2">{val.title}</h5>
                        <p className="text-secondary small mb-0">{val.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Founder />

      {/* ================= CTA (Classic) ================= */}
      <section className="cta-section py-5 bg-black text-center text-white">
        <div className="container py-5">
          <h2 className="playfair-font mb-4">Ready to Build Your Future?</h2>
          <button className="btn btn-gold btn-lg rounded-0 px-5 fw-bold text-uppercase tracking-wider">
            Start Your Journey
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
