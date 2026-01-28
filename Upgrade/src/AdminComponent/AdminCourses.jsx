import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";
import {
  BookOpen,
  Plus,
  Search,
  Edit3,
  Image as ImageIcon,
  Video,
  Trash2,
  MoreVertical,
  ChevronRight,
  Monitor,
  Clock,
  Tag,
  IndianRupee,
  Filter
} from "lucide-react";
import "../AdminStyles/AdminCourses.css";

const AdminCourses = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const results = courses.filter(course =>
      course.course_Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(results);
  }, [searchTerm, courses]);

  const fetchCourses = async () => {
    try {
      const res = await BaseUrl.get("/Course", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(res.data);
      setFilteredCourses(res.data);
    } catch (err) {
      console.error("Failed to fetch courses", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("⚠️ Are you sure you want to delete this course PERMANENTLY?")) return;
    try {
      await BaseUrl.delete(`/admin/deletecourse/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Course deleted successfully");
      fetchCourses();
    } catch (err) {
      console.error("Delete failed", err);
      alert("❌ Failed to delete course");
    }
  };

  if (loading) return (
    <div className="courses-loader-container">
      <div className="courses-spinner"></div>
      <p>Loading course catalog...</p>
    </div>
  );

  return (
    <div className="admin-courses-viewport">
      {/* HEADER SECTION */}
      <div className="courses-header-wrapper">
        <div className="header-info">
          <div className="icon-hub">
            <BookOpen size={24} />
          </div>
          <div>
            <h1>Course Management</h1>
            <p>Create, update, and manage your educational content.</p>
          </div>
        </div>
        <button className="add-course-btn" onClick={() => navigate("/addCourse")}>
          <Plus size={20} />
          <span>New Course</span>
        </button>
      </div>

      {/* DASHBOARD STATS PREVIEW (Mini) */}
      <div className="courses-brief-stats">
        <div className="brief-item">
          <span className="brief-label">Total Published</span>
          <span className="brief-value">{courses.length}</span>
        </div>
        <div className="brief-item">
          <span className="brief-label">Categories</span>
          <span className="brief-value">{new Set(courses.map(c => c.category)).size}</span>
        </div>
      </div>

      {/* SEARCH & FILTER */}
      <div className="courses-filter-bar">
        <div className="search-input-group">
          <Search size={18} className="search-icon-abs" />
          <input
            type="text"
            placeholder="Search by course name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="filter-pill-btn">
          <Filter size={16} />
          <span>Filters</span>
        </button>
      </div>

      {/* COURSES LIST */}
      <div className="courses-grid-container">
        {filteredCourses.length === 0 ? (
          <div className="empty-catalog">
            <BookOpen size={48} />
            <h3>No courses found</h3>
            <p>Try adjusting your search or add a new course.</p>
          </div>
        ) : (
          <div className="courses-pro-table-wrapper">
            <table className="courses-pro-table">
              <thead>
                <tr>
                  <th>Course Information</th>
                  <th>Category & Mode</th>
                  <th>Duration</th>
                  <th>Pricing</th>
                  <th className="text-center">Management Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id}>
                    <td>
                      <div className="course-main-cell" onClick={() => navigate(`/admincoursedetails/${course.id}`)}>
                        <div className="course-square-icon">
                          {course.course_Name?.charAt(0)}
                        </div>
                        <div className="course-name-stack">
                          <span className="c-name">{course.course_Name}</span>
                          <span className="c-id">ID: #{course.id}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="category-stack">
                        <span className="c-cat"><Tag size={12} /> {course.category}</span>
                        <span className="c-mode"><Monitor size={12} /> {course.mode}</span>
                      </div>
                    </td>
                    <td>
                      <div className="duration-info">
                        <Clock size={14} />
                        <span>{course.course_duration}</span>
                      </div>
                    </td>
                    <td>
                      <div className="price-tag">
                        <IndianRupee size={14} />
                        <span>{course.price?.toLocaleString()}</span>
                      </div>
                    </td>
                    <td>
                      <div className="actions-flex">
                        <button className="icon-action-btn edit" title="Edit Details" onClick={() => navigate(`/editcourses/${course.id}`)}>
                          <Edit3 size={16} />
                        </button>
                        <button className="icon-action-btn image" title="Course Image" onClick={() => navigate(`/postCourseimage/${course.id}`)}>
                          <ImageIcon size={16} />
                        </button>
                        <button className="icon-action-btn video" title="Manage Videos" onClick={() => navigate(`/addVideos/${course.id}`)}>
                          <Video size={16} />
                        </button>
                        <button className="icon-action-btn delete" title="Delete Course" onClick={() => handleDelete(course.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCourses;
