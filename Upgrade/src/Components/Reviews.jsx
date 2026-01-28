import React from "react";
import "../Styles/Reviews.css";

const reviews = [
  {
    name: "Praneeth",
    role: "Full Stack Web Development",
    image: "/SuccessImages/praneeth.jpeg",
    content:
      "The projects pushed me out of my comfort zone. I now understand frontend and backend confidently."
  },
  {
    name: "Vamsi krishna",
    role: "UI/UX Design",
    image: "/SuccessImages/vamsi.jpeg",
    content:
      "Every class was interactive. I built a portfolio that actually impressed interviewers."
  },
  {
    name: "Mahesh Patel",
    role: "Artificial Intelligence",
    image: "/SuccessImages/mahesh1.jpeg",
    content:
      "We didn’t just learn theory. We built and deployed real AI models."
  },
  {
    name: "Suresh Reddy",
    role: "Python",
    image: "/SuccessImages/suresh.jpeg",
    content:
      "I joined with zero coding experience and now build applications confidently."
  },
  {
    name: "Bhavana Edara",
    role: "Digital Marketing",
    image: "/SuccessImages/bhavana.jpg",
    content:
      "Learning through live campaigns felt like real industry work."
  },
  {
    name: "Pavan Thomas",
    role: "Cloud Computing",
    image: "/SuccessImages/pavan.jpeg",
    content:
      "Hands-on labs helped me understand cloud tools practically."
  }
];

const Reviews = () => {
  return (
    <section className="review-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Learners Who Transformed Their Careers
        </h2>

        <div className="review-columns">
  {[1, 2, 3].map((col, idx) => (
    <div className={`review-column speed-${idx}`} key={idx}>
      {[...reviews, ...reviews].map((item, index) => (
        <div className="review-card" key={index}>
                  <div className="review-header">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h6>{item.name}</h6>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
