import React, { useState } from "react";
import { useAuth } from "../Components/Authprovider";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../Components/BaseUrl";
import "../AdminStyles/PostCourseImage.css";

const PostCourseImage = () => {
  const { token } = useAuth();
  const { id } = useParams(); // ✅ COURSE ID from URL

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const res = await BaseUrl.post(`/admin/postcourseimage/${id}`,   // ✅ PATH VARIABLE
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Course image uploaded successfully");
      navigate(-1)
      console.log(res.data);
      console.log("Course ID from URL:", id);


    } catch (err) {
      console.error(err);
      alert("Image upload failed");
      console.log("Course ID from URL:", id);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="course-image-page">
      <form className="course-image-card" onSubmit={handleSubmit}>
        <h2>Upload Course Image</h2>

        {/* IMAGE PREVIEW */}
        {preview && (
          <img src={preview} alt="Preview" className="preview-img" />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
          }}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
    </div>
  );
};

export default PostCourseImage;
