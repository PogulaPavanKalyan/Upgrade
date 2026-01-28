import React, { useState } from "react";
import "../Styles/faq.css"


const faqData = [
  {
    question: "What is UpgradeU LMS and how does it help in building my career?",
    answer:
      "UpgradeU LMS is an online learning platform that provides industry-focused IT training programs designed to build practical skills and career readiness."
  },
  {
    question: "Who can enroll in the courses on UpgradeU LMS?",
    answer:
      "Anyone interested in learning can enroll, including students, fresh graduates, working professionals, and career switchers."
  },
  {
    question: "Are the courses suitable for beginners with no technical background?",
    answer:
      "Yes. Our courses start from the basics and gradually progress to advanced topics."
  },
  {
    question: "Can I learn at my own pace while working or studying?",
    answer:
      "Yes. All courses are self-paced and flexible."
  },
  {
    question: "Do the courses include practical projects?",
    answer:
      "Yes. Each course includes hands-on projects and assignments."
  },
  {
    question: "How long does it take to complete a course?",
    answer:
      "Most courses can be completed within a few weeks."
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes. A certificate is provided after successful completion."
  },
  {
    question: "Is the certificate industry-recognized?",
    answer:
      "It validates your skills and adds value to your resume."
  },
  {
    question: "What payment options are available?",
    answer:
      "Multiple secure payment options are available."
  },
  {
    question: "Does UpgradeU provide career guidance?",
    answer:
      "Yes. We provide resume support and interview guidance."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-bg">
      
      <div className="faq-overlay">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="faq-question"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
