import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";
import fallbackImg from "../assets/images/img2.png";
import { Star, TrendingUp, Award, ChevronRight } from "lucide-react";
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

  // Filter courses by category/criteria
  const featuredCourses = courses.slice(0, 4); // First 4 courses as featured
  const topRatedCourses = courses
    .filter((c) => c.rating >= 4.5 || c.category?.toLowerCase().includes("popular"))
    .slice(0, 4);
  const inDemandCourses = courses
    .filter(
      (c) =>
        c.category?.toLowerCase().includes("demand") ||
        c.category?.toLowerCase().includes("trending") ||
        c.title?.toLowerCase().includes("popular")
    )
    .slice(0, 4);

  // CourseCard Component
  const CourseCard = ({ course, badge }) => (
    <div className="course-card" onClick={() => navigate(`/SingleCourseDetails/${course.id}`)}>
      {badge && <div className={`course-badge ${badge.type}`}>{badge.text}</div>}

      <img
        src={images[course.id] || fallbackImg}
        className="course-img"
        alt={course.title}
      />

      <div className="course-info">
        <h4>{course.title}</h4>
        <p className="course-category">{course.category || "Technology"}</p>

        <div className="course-meta-info">
          <span className="course-duration">⏱ {course.course_duration || "8 weeks"}</span>
          <span className="course-rating">⭐ {course.rating || "4.6"}</span>
        </div>

        <div className="price-box">
          {course.oldPrice && (
            <span className="old-price">₹{course.oldPrice}</span>
          )}
          <span className="new-price">₹{course.price}</span>
        </div>

        <button className="know-more-btn">
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );

  // Section Renderer
  const CourseSection = ({ title, icon, courses, badgeType }) => {
    if (!courses || courses.length === 0) return null;

    return (
      <div className="course-category-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            {icon}
            <h3 className="section-title">{title}</h3>
          </div>
          <button
            className="view-all-btn"
            onClick={() => navigate('/Courses')}
          >
            View All <ChevronRight size={18} />
          </button>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              badge={badgeType ? { type: badgeType, text: badgeType === 'featured' ? 'Featured' : badgeType === 'trending' ? 'Trending' : 'Top Rated' } : null}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="course-section">
      {/* Featured Courses */}
      <CourseSection
        title="Featured Courses"
        icon={<Award className="section-icon" size={28} />}
        courses={featuredCourses}
        badgeType="featured"
      />

      {/* Top Rated Courses */}
      <CourseSection
        title="Top Rated Courses"
        icon={<Star className="section-icon" size={28} />}
        courses={topRatedCourses}
        badgeType="top-rated"
      />

      {/* In-Demand / Trending Courses */}
      <CourseSection
        title="Most In-Demand Courses"
        icon={<TrendingUp className="section-icon" size={28} />}
        courses={inDemandCourses}
        badgeType="trending"
      />

      {/* All Courses Section */}
      {courses.length > 0 && (
        <div className="course-category-section">
          <div className="section-header">
            <h3 className="section-title">All Available Courses</h3>
            <button
              className="view-all-btn"
              onClick={() => navigate('/Courses')}
            >
              Explore All <ChevronRight size={18} />
            </button>
          </div>
          <div className="course-grid">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseListings;
