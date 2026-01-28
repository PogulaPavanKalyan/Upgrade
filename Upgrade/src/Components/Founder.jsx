import React, { useEffect, useRef } from "react";
import "../Styles/Founder.css";

const Founder = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add("show"),
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="founder-section reveal" ref={ref}>
      <div className="founder-container">
        <div className="founder-image">
          <img
            src="SuccessImages/r.ravindra.jpeg"
            alt="Founder of UpgradeU"
          />
        </div>

        <div className="founder-content">
          <h2>Message from the Founder</h2>

          <p>
            UpgradeU was created with a clear purpose — to help learners gain
            skills that actually matter in the real world.
          </p>

          <p>
            We focus on practical learning, mentorship, and confidence-building
            so learners are prepared for real careers, not just exams.
          </p>

          <p>
            Our goal is simple: make learning meaningful, practical, and
            career-oriented.
          </p>

          <h4>Ravindra Reddy</h4>
          <span>Founder & Lead Mentor, UpgradeU</span>
        </div>
      </div>
    </section>
  );
};

export default Founder;
