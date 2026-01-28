import React, { useState } from "react";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import "../Styles/PostBlog.css"

const PostBlogs = () => {
  const { token } = useAuth();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url,setUrl]=useState("")

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
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("url",url)

    try {
      const res = await BaseUrl.post(
        "admin/addblog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Blog posted successfully");

      setImage(null);
      setTitle("");
      setContent("");
      setUrl("")
    } catch (err) {
      console.error("Blog post failed:", err.response?.data || err.message);
      alert("Blog post failed");
    }
  };

  return (
    <div className="blog-upload-page">
      <div className="blog-card">
        <h2>Add Blog</h2>

        <form className="blog-form" onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
          />


          <input type="text"
          placeholder="Enter url"
          value={url}
          onChange={(e)=>setUrl(e.target.value)} />
            

          <button type="submit">
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostBlogs;
