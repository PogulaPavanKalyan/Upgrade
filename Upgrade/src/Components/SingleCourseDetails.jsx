import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from './Authprovider';
import "../Styles/SingleCourseDetails.css";
import NavBar from '../UserDashboardComponent/NavBar';
import BaseUrl from './BaseUrl';


const SingleCourseDetails = () => {
  const { id } = useParams(); // courseId from URL
  const { token } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [alreadyInCart, setAlreadyInCart] = useState(false); // new state

  useEffect(() => {
    if (token) {
      fetchCourse();
    }
  }, [id, token]);

  // Fetch single course
  const fetchCourse = async () => {
    try {
      const res = await BaseUrl.get(
        `Course/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCourse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Check if course is already in cart
  useEffect(() => {
    const checkCart = async () => {
      try {
        const res = await BaseUrl.get("getcart", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const isInCart = res.data.some(
          (item) => item.course.id === course?.id
        );
        setAlreadyInCart(isInCart);
      } catch (err) {
        console.error("Failed to fetch cart", err);
      }
    };

    if (token && course) checkCart();
  }, [token, course]);

  // Buy course → POST payment → navigate to payment page
  const buyCourse = async () => {
    try {
      const res = await BaseUrl.post(
        `payment/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const paymentId = res.data.id; // backend returns payment entity with ID
      navigate(`/checkout/${paymentId}`);
    } catch (err) {
      console.error(err);
      alert("Payment failed. Try again.");
    }
  };

  // Add to Cart
  const handleAddToCart = async (id) => {
    try {
      const res = await BaseUrl.post(
        `addtocart/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res.data);

      setAlreadyInCart(true); // mark course as added
      navigate(`/Addtocart`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!course) return <h2>Loading course details...</h2>;

  return (
    <>
      <NavBar/>
      <div className="course-page">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-8">
              <p className="breadcrumb-text">Development › {course.category}</p>
              <h1 className="course-title">{course.title}</h1>
              <p className="course-subtitle">{course.description}</p>
              <div className="course-meta">⭐ 4.6 · 200+ learners · {course.mode}</div>

              <div className="course-section">
                <h3>What you'll learn</h3>
                <ul className="learn-list">
                  <li>Core Java & OOP concepts</li>
                  <li>Spring Boot & REST APIs</li>
                  <li>Microservices architecture</li>
                  <li>Database integration with JPA</li>
                  <li>Real-world project experience</li>
                </ul>
              </div>

              <div className="course-section">
                <h3>Course Details</h3>
                <p><strong>Course Name:</strong> {course.course_Name}</p>
                <p><strong>Duration:</strong> {course.course_duration}</p>
                <p><strong>Mode:</strong> {course.mode}</p>
                <p><strong>Created On:</strong> {new Date(course.date).toDateString()}</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="buy-card sticky-top">
                <div className="thumbnail-wrapper">
                  <img src={course.thumbnail} alt={course.title} />
                  <span className="preview-badge">Preview this course</span>
                </div>

                <div className="price-box">
                  <h2>₹{course.price}</h2>
                  <span className="discount">Limited time offer</span>
                </div>

                {/* Add to Cart button with already-in-cart logic */}
                <button
                  className="btn btn-primary w-100 mb-2"
                  onClick={() => handleAddToCart(course.id)}
                  disabled={alreadyInCart} // disable if already in cart
                >
                  {alreadyInCart ? "Already in Cart" : "Add to cart"}
                </button>

                {/* Buy now button */}
                <button
                  className="btn btn-outline-primary w-100"
                  key={course.id}
                  onClick={() => navigate(`/Payment/${course.id}`)}
                >
                  Buy now
                </button>

                <p className="guarantee">30-Day Money-Back Guarantee</p>
                <ul className="features">
                  <li>✔ Full lifetime access</li>
                  <li>✔ Access on mobile & desktop</li>
                  <li>✔ Certificate of completion</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourseDetails;
