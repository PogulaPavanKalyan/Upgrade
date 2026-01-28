import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";
import "../AdminStyles/EditCourse.css"


const EditCourse = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [course, setCourse] = useState({
    title: "",
    course_Name: "",
    course_duration: "",
    mode: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const res = await BaseUrl.get(`/Course/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCourse({
        title: res.data.title || "",
        course_Name: res.data.course_Name || "",
        course_duration: res.data.course_duration || "",
        mode: res.data.mode || "",
        description: res.data.description || "",
        price: res.data.price ?? "",
        category: res.data.category || "",
      });
    } catch (err) {
      console.error("Failed to load course", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await BaseUrl.put(`/admin/editcourse/${id}`, course, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Course updated successfully");
      navigate("/allcourses");
    } catch (err) {
      console.error("Update failed", err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading course details...</p>;

  return (
    <div className="edit-course-page">
      <h2>Edit Course</h2>

      <form onSubmit={handleSubmit} className="edit-course-form">
        <input
          name="course_Name"
          value={course.course_Name}
          onChange={handleChange}
          placeholder="Course Name"
          required
        />

        <input
          name="title"
          value={course.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <input
          name="course_duration"
          value={course.course_duration}
          onChange={handleChange}
          placeholder="Duration"
          required
        />

        <input
          name="mode"
          value={course.mode}
          onChange={handleChange}
          placeholder="Mode (Online / Offline)"
          required
        />

        <input
          name="category"
          value={course.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />

        <input
          type="number"
          name="price"
          value={course.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          placeholder="Course Description"
          rows={5}
          required
        />

        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Update Course"}
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
