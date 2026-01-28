import React, { useState } from "react";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import "../Styles/CrouselPosting.css";

const Carouselposting = () => {
  const { token } = useAuth();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [actionButton, setActionButton] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("TOKEN FROM CONTEXT:", token);

    if (!token) {
      alert("You are not authenticated. Please login again.");
      return;
    }

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("ActionButton", actionButton);

    try {
      const res = await BaseUrl.post(
        "/admin/postcrousel",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Carousel uploaded successfully");

      setImage(null);
      setTitle("");
      setDescription("");
      setActionButton("");
    } catch (err) {
      console.error("Upload failed:", err.response?.data || err.message);
      alert("Upload failed");
    }
  };

  return (
    <div className="carousel-upload-page">
      <div className="carousel-card">
        <h2>Add Carousel</h2>

        <form className="carousel-form" onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Action Button"
            value={actionButton}
            onChange={(e) => setActionButton(e.target.value)}
          />

          <button type="submit">
            Upload Carousel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Carouselposting;
