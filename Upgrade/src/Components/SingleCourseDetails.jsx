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
  const [imageUrl, setImageUrl] = useState(null);
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [videos, setVideos] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    if (token) {
      fetchCourse();
    }
  }, [id, token]);

  // Fetch single course + videos
  const fetchCourse = async () => {
    try {
      const res = await BaseUrl.get(
        `Course/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCourse(res.data);
      fetchImage(id);
      fetchVideos(id);
      checkIfPurchased(id); // Check purchase status
    } catch (err) {
      console.error(err);
    }
  };

  const fetchVideos = async (courseId) => {
    try {
      const res = await BaseUrl.get(`courseVideoList/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVideos(res.data);
    } catch (err) {
      console.error("Failed to fetch videos", err);
    }
  };

  const checkIfPurchased = async (courseId) => {
    try {
      // Attempt to check against "mypaymentuser" (Correct endpoint provided by user)
      const res = await BaseUrl.get("/mypaymentuser", {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Check if any payment corresponds to this course
      // Assuming structure: [{ course: { id: ... } }, ...]
      const isOwned = res.data.some(payment =>
        payment.course && payment.course.id === parseInt(courseId)
      );
      setIsPurchased(isOwned);
      if (isOwned) console.log("User owns this course.");
    } catch (err) {
      console.error("Failed to verify purchase status:", err);
      // Helper for debugging: if 404, maybe try another endpoint?
    }
  };

  const fetchImage = async (courseId) => {
    try {
      const res = await BaseUrl.get(`getimage/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });
      setImageUrl(URL.createObjectURL(res.data));
    } catch (err) {
      console.error("Failed to fetch image", err);
    }
  };

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

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
      <NavBar />
      <div className="course-page">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-9">
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

              {/* COURSE CURRICULUM SECTION */}
              <div className="course-section">
                <h3>Course Content</h3>
                <p className="small text-muted mb-3">{videos.length} lessons</p>

                <div className="curriculum-list">
                  {videos.length === 0 ? <p>No videos uploaded yet.</p> : (
                    videos.map((video, index) => (
                      <div
                        key={video.videoId}
                        className={`curriculum-item ${isPurchased ? 'unlocked' : 'locked'}`}
                        title={video.videoDescription || "No description available"}
                        onClick={() => {
                          if (isPurchased) {
                            // Deep linking: Pass videoId in prompt
                            navigate(`/SingleCourse/${id}?videoId=${video.videoId}`);
                          } else {
                            alert("Please purchase the course to unlock this content.");
                          }
                        }}
                      >
                        <div className="curr-icon">
                          {isPurchased ? "▶" : "🔒"}
                        </div>
                        <div className="curr-info">
                          <span className="curr-title">{video.videoTitle || `Lesson ${index + 1}`}</span>
                          <span className="curr-desc-preview">{video.videoDescription ? video.videoDescription.substring(0, 50) + "..." : "Watch now"}</span>
                        </div>

                        {isPurchased ? <span className="curr-action">Watch</span> : <span className="curr-action">Locked</span>}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="buy-card sticky-top">
                <div className="thumbnail-wrapper">
                  <img src={imageUrl || "https://via.placeholder.com/600x400"} alt={course.title} />
                  <span className="preview-badge">Preview this course</span>
                </div>

                <div className="price-box">
                  <h2>₹{course.price}</h2>
                  <span className="discount">Limited time offer</span>
                </div>

                {/* Add to Cart button */}
                {!isPurchased ? (
                  <>
                    <button
                      className="btn btn-primary w-100 mb-2"
                      onClick={() => handleAddToCart(course.id)}
                      disabled={alreadyInCart}
                    >
                      {alreadyInCart ? "Already in Cart" : "Add to cart"}
                    </button>
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() => navigate(`/Payment/${course.id}`)}
                    >
                      Buy now
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-success w-100 mb-2"
                    onClick={() => navigate(`/SingleCourse/${course.id}`)}
                  >
                    Go to Course
                  </button>
                )}

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
