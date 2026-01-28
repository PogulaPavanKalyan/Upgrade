import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate
} from "framer-motion";
import {
  GraduationCap,
  Users,
  Briefcase,
  Award,
  Zap,
  Globe,
  Rocket,
  ShieldCheck
} from "lucide-react";
import "../Styles/WhyChooseUpgradeU.css";

/* ===========================
   KPI BLOCK (Counter + Bar)
=========================== */
function KPI({ label, value, max = 100, suffix, icon: Icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const percent = useTransform(motionValue, v => `${(v / max) * 100}%`);
  const rounded = useTransform(motionValue, v => Math.floor(v));

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, {
        duration: 2,
        ease: "circOut"
      });
    }
  }, [inView, value, motionValue]);

  return (
    <div className="kpi-card" ref={ref}>
      <div className="kpi-icon-wrapper">
        <Icon size={20} />
      </div>
      <div className="kpi-content">
        <div className="kpi-header">
          <span className="kpi-label">{label}</span>
          <h4 className="kpi-value">
            <motion.span>{rounded}</motion.span>{suffix}
          </h4>
        </div>
        <div className="kpi-bar-container">
          <motion.div
            className="kpi-bar-fill"
            style={{ width: percent }}
          />
        </div>
      </div>
    </div>
  );
}

/* ===========================
   MAIN COMPONENT
=========================== */
export default function WhyChooseUpgradeU() {
  return (
    <section className="why-upgrade-section">
      <div className="bg-decoration">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <div className="why-container">
        {/* TOP HEADER */}
        <div className="why-header-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge"
          >
            <Zap size={14} className="zap-icon" />
            <span>Why UpgradeU?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Unlock Your Potential with <br />
            <span className="gradient-text">Future-Ready Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="subtitle"
          >
            We don't just teach; we transform. Join thousands of students who have
            accelerated their careers through our industry-leading platform.
          </motion.p>
        </div>

        <div className="why-grid">
          {/* LEFT FEATURES */}
          <div className="features-grid">
            {[
              {
                icon: <GraduationCap />,
                title: "Expert-Led Curriculum",
                text: "Curated by industry veterans to match current market demands and emerging technologies.",
                color: "blue"
              },
              {
                icon: <Users />,
                title: "Personalized Mentorship",
                text: "Direct access to mentors who provide tailored feedback and career guidance every step of the way.",
                color: "purple"
              },
              {
                icon: <Briefcase />,
                title: "Real-World Projects",
                text: "Apply your knowledge to practical, industry-standard projects that build a professional portfolio.",
                color: "orange"
              },
              {
                icon: <Award />,
                title: "Value Certifications",
                text: "Earn recognized certifications that validate your skills and boost your credibility with employers.",
                color: "green"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                className={`feature-card ${f.color}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT STATS & INFO */}
          <div className="stats-column">
            <div className="stats-glass-card">
              <h3>Our Impact in Numbers</h3>
              <div className="kpi-group">
                <KPI
                  label="Global Learners"
                  value={15000}
                  max={20000}
                  suffix="+"
                  icon={Globe}
                />
                <KPI
                  label="Career Transitions"
                  value={850}
                  max={1000}
                  suffix="+"
                  icon={Rocket}
                />
                <KPI
                  label="Employer Trust"
                  value={98}
                  max={100}
                  suffix="%"
                  icon={ShieldCheck}
                />
              </div>

              <div className="cta-box">
                <h4>Ready to start?</h4>
                <p>Join our community today and get access to free premium resources.</p>
                <button className="cta-button">Explore Courses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
