import React, { useEffect, useState } from "react";
import { useAuth } from "./Authprovider";
import "../Styles/Courses.css";
import { useNavigate, useParams } from "react-router-dom";
import BaseUrl from "./BaseUrl";
import NavBar from "../UserDashboardComponent/NavBar";

const Courses = () => {
  const { token } = useAuth();
  const [courses, setCourses] = useState([]);
  const [images, setImages] = useState({}); // ✅ store courseId -> imageURL
  const nav = useNavigate();
  const { keyword } = useParams();

  /* ================= FETCH COURSES ================= */
  useEffect(() => {
    if (!token) return;

    let url = "Course";
    if (keyword) url = `search/${keyword}`;

    BaseUrl.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setCourses(res.data);
        loadImages(res.data); // ✅ load images after courses
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setCourses([]);
      });
  }, [token, keyword]);

  /* ================= FETCH COURSE IMAGE ================= */
  const loadImages = async (courseList) => {
    const imageMap = {};

    await Promise.all(
      courseList.map(async (course) => {
        try {
          const res = await BaseUrl.get(`/getimage/${course.id}`, {
            headers: { Authorization: `Bearer ${token}` },
            responseType: "blob",
          });

          imageMap[course.id] = URL.createObjectURL(res.data);
        } catch (err) {
          console.error("Image load failed for course:", course.id);
        }
      })
    );

    setImages(imageMap);
  };

  /* ================= CLEANUP IMAGE URLS ================= */
  useEffect(() => {
    return () => {
      Object.values(images).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  return (
    <>
    <NavBar/>

    <div className="courses-page">
      <div className="course-list">

        {courses.length === 0 ? (
          <p>No courses found</p>
        ) : (
          courses.map((course) => (
            <div
              className="course-card"
              key={course.id}
              onClick={() => nav(`/SingleCourseDetails/${course.id}`)}
            >
              {/* ================= THUMBNAIL ================= */}
              <div className="course-thumb-wrap">
                <img
                  src={images[course.id] || "/course-placeholder.png"}
                  alt={course.title}
                />
              </div>

              {/* ================= INFO ================= */}
              <div className="course-info-small">
                <h3 className="course-title">{course.title}</h3>

                <p className="course-category">{course.category}</p>

                <div className="course-meta">
                  <span className="course-rating">
                    ⭐ {course.rating || "4.5"}
                  </span>
                  <span className="course-duration">
                    ⏱ {course.course_duration}
                  </span>
                </div>

                <div className="course-footer">
                  <p className="course-price">
                    <span>Price:</span> ₹{course.price}
                  </p>

                  <button
                    className="enroll-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      nav(`/payment/${course.id}`);
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
    </>
  );
};

export default Courses;
