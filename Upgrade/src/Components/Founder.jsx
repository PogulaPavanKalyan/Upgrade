import React from "react";
import "../Styles/Founder.css";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Founder = () => {
  return (
    <section className="founder-section-classic">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Image Side */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="founder-frame"
            >
              <div className="frame-border-gold"></div>
              <img
                src="SuccessImages/r.ravindra.jpeg"
                alt="Ravindra Reddy - Founder"
                className="founder-img-classic"
              />
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="founder-text-content ps-lg-5"
            >
              <Quote size={48} className="text-gold mb-4 opacity-50" />

              <h2 className="display-5 fw-bold playfair-font mb-4">
                Message from the Founder
              </h2>

              <div className="founder-message">
                <p className="lead text-secondary">
                  "UpgradeU was created with a clear purpose — to help learners gain
                  skills that actually matter in the real world."
                </p>
                <p className="text-muted">
                  We focus on practical learning, mentorship, and confidence-building
                  so learners are prepared for real careers, not just exams. Our goal is simple: make learning meaningful, practical, and career-oriented.
                </p>
              </div>

              <div className="founder-signature mt-5">
                <div className="divider-gold mb-3" style={{ width: '60px', height: '2px' }}></div>
                <h4 className="fw-bold fs-4 mb-0 playfair-font">Ravindra Reddy</h4>
                <p className="small text-uppercase tracking-widest text-gold fw-bold mb-0">
                  Founder & Lead Mentor
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
