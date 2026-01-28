import React from "react";
import "../Styles/SuccessStories.css";

const data = [
  {
    name: "venkata Gopi Pathi",
    profile: "/SuccessImages/gopi.jpeg",
    company: "/SuccessImages/rrtraining.png",
    before: "Python Automation",
    after: "system Engineer",
    bg: "blue"
  },
  {
    name: "lokesh Reddy Ogirala",
    profile: "/SuccessImages/lokesh.jpg",
    company: "/SuccessImages/wipro.jpg",
    before: "Fresher",
    after: "Software Developer",
    bg: "yellow"
  },
  {
    name: "Mahesh  Vennapusala",
    profile: "/SuccessImages/mahesh1.jpeg",
    company: "/SuccessImages/hcl.jpg",
    before: "python Intern",
    after: "Python developer",
    bg: "pink"
  },
  {
    name: "Ramu Bhuvanaboina",
    profile: "/SuccessImages/ramu.jpg",
    company: "/images/infosys.png",
    before: "System Engineer",
    after: "Associate Consultant",
    bg: "purple"
  }
];

const LearnerSuccess = () => {
  return (
    <section className="ls-section">
      <h2 className="ls-title">THEY CHOSE TO LEARN. THEY CHOSE TO GROW. <br />
      THEY SUCCEEDED.
WILL YOU BE NEXT?</h2>

      <div className="ls-wrapper">
        <button className="nav-btn left">‹</button>

        <div className="ls-cards">
          {data.map((item, i) => (
            <div className={`ls-card ${item.bg}`} key={i}>
              {/* PROFILE IMAGE */}
              <img
                className="ls-profile-img"
                src={item.profile}
                alt={item.name}
              />

              <h3 className="ls-name">{item.name}</h3>

              <img
                className="company"
                src={item.company}
                alt="company"
              />

              <div className="before">{item.before}</div>

              {/* FLOW ROW */}
              <div className="flow-row">
                <div className="flow-left">
                  <div className="flow-icon">↻</div>
                  <div className="flow-line"></div>
                </div>

                <span className="flow-text">After UpgradeU</span>
              </div>

              <div className="after">{item.after}</div>
            </div>
          ))}
        </div>

        <button className="nav-btn right">›</button>
      </div>
    </section>
  );
};

export default LearnerSuccess;
