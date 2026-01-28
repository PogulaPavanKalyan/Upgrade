import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";
import fallbackImg from "../assets/images/img2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/CourseListing.css";

const CourseListings = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [courses, setCourses] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    if (!token) return;

    BaseUrl.get("/Course", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => setCourses(res.data));
  }, [token]);

  useEffect(() => {
    if (!token || courses.length === 0) return;

    const loadImages = async () => {
      const map = {};
      for (const c of courses) {
        try {
          const res = await BaseUrl.get(`/getimage/${c.id}`, {
            headers: { Authorization: `Bearer ${token}` },
            responseType: "blob",
          });
          map[c.id] = URL.createObjectURL(res.data);
        } catch {
          map[c.id] = fallbackImg;
        }
      }
      setImages(map);
    };

    loadImages();
  }, [courses, token]);

  return (
    <div className="course-section">
      <div className="course-header text-center mb-5">
        <h2>Our Current Live Courses</h2>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img
              src={images[course.id] || fallbackImg}
              className="course-img"
              alt={course.title}
            />

            <div className="course-info text-center">
              <h4>{course.title}</h4>

              <p>📅 {course.startDate || "Coming Soon"}</p>

              <p>⏰ {course.startTime || "8:00 AM"}</p>

              <div className="price-box mb-3">
                <span className="old-price">
                  ₹{course.oldPrice || "49,999"}
                </span>
                <span className="new-price">₹{course.price}</span>
              </div>

              <button
                className="know-more-btn"
                onClick={() => navigate(`/SingleCourseDetails/${course.id}`)}
              >
                KNOW MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListings;
