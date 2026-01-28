import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../Components/Authprovider";
import "../Styles/AddCourse.css";
import BaseUrl from "../Components/BaseUrl";

const AddCourse = () => {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  const [course_duration, setCourseDuration] = useState("");
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("");
  const [course_Name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const[thumbnail,setThumbnail]=useState("")

  const handlesubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!course_Name) newErrors.course_Name = "Course name is required";
    if (!title) newErrors.title = "Title is required";
    if (!course_duration) newErrors.course_duration = "Duration is required";
    if (!mode) newErrors.mode = "Mode is required";
    if (!category) newErrors.category = "Category is required";
    if (!price) newErrors.price = "Price is required";
    if (!description) newErrors.description = "Description is required";
    if (!date) newErrors.date = "Date is required";
    if(!thumbnail)newErrors.thumbnail="Thumbnil is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setError("");
      return;
    }

    setErrors({});
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await BaseUrl.post(
        "admin/addcourse",
        {
          title,
          mode,
          course_Name,
          description,
          price: Number(price),
          category,
          thumbnail,
          date,
          course_duration
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setSuccess("Course added successfully");

      setCourseDuration("");
      setTitle("");
      setMode("");
      setCourseName("");
      setDescription("");
      setPrice("");
      setThumbnail("");
      setCategory("");
      setDate("");
    } catch (err) {
      setError("Failed to add course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="add-course-form" onSubmit={handlesubmit} noValidate>

      {error && <div className="form-error">{error}</div>}
      {success && <div className="form-success">{success}</div>}

      <input
        type="text"
        placeholder="Course Name"
        value={course_Name}
        required
        onChange={(e) => setCourseName(e.target.value)}
        className={errors.course_Name ? "error" : ""}
      />
      {errors.course_Name && <div className="field-error">{errors.course_Name}</div>}

      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        className={errors.title ? "error" : ""}
      />
      {errors.title && <div className="field-error">{errors.title}</div>}

      <input
        type="text"
        placeholder="Duration"
        value={course_duration}
        required
        onChange={(e) => setCourseDuration(e.target.value)}
        className={errors.course_duration ? "error" : ""}
      />
      {errors.course_duration && <div className="field-error">{errors.course_duration}</div>}

      <input
        type="text"
        placeholder="Mode"
        value={mode}
        required
        onChange={(e) => setMode(e.target.value)}
        className={errors.mode ? "error" : ""}
      />
      {errors.mode && <div className="field-error">{errors.mode}</div>}

      <input
        type="text"
        placeholder="Category"
        value={category}
        required
        onChange={(e) => setCategory(e.target.value)}
        className={errors.category ? "error" : ""}
      />
      {errors.category && <div className="field-error">{errors.category}</div>}

      <input
        type="number"
        placeholder="Price"
        value={price}
        required
        onChange={(e) => setPrice(e.target.value)}
        className={errors.price ? "error" : ""}
      />
      {errors.price && <div className="field-error">{errors.price}</div>}

      <input
        type="text"
        placeholder="Thumbnail"
        value={thumbnail}
        required
        onChange={(e) => setThumbnail(e.target.value)}
        className={errors.thumbnail ? "error" : ""}
      />
      {errors.thumbnail && <div className="field-error">{errors.thumbnail}</div>}

     
     

      <textarea
        placeholder="Description"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
        className={errors.description ? "error" : ""}
      />
      {errors.description && <div className="field-error">{errors.description}</div>}

      <input
        type="datetime-local"
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
        className={errors.date ? "error" : ""}
      />
      {errors.date && <div className="field-error">{errors.date}</div>}

      <button type="submit" className={loading ? "loading" : ""}>
        {loading ? "Saving..." : "Add Course"}
      </button>

    </form>
  );
};

export default AddCourse;
