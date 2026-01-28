import React, { useEffect, useState } from "react";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import "../Styles/GetBlogs.css";
import NavBar from "../UserDashboardComponent/NavBar";

const GetBlogList = () => {
  const { token } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // 1️⃣ Fetch blog list (JSON only)
      const blogRes = await BaseUrl.get("/getbloglist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const blogList = blogRes.data;

      // 2️⃣ Fetch image BLOB for each blog
      const blogsWithImages = await Promise.all(
        blogList.map(async (blog) => {
          try {
            const imageRes = await BaseUrl.get(
              `/getblogimage/${blog.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                responseType: "blob", // IMPORTANT
              }
            );

            const imageObjectUrl = URL.createObjectURL(imageRes.data);

            return {
              ...blog,
              imageBlobUrl: imageObjectUrl,
            };
          } catch (error) {
            console.error("Image load failed for blog:", blog.id);
            return {
              ...blog,
              imageBlobUrl: null,
            };
          }
        })
      );

      setBlogs(blogsWithImages);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      alert("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  // Optional: cleanup blob URLs (good practice)
  useEffect(() => {
    return () => {
      blogs.forEach((blog) => {
        if (blog.imageBlobUrl) {
          URL.revokeObjectURL(blog.imageBlobUrl);
        }
      });
    };
  }, [blogs]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading blogs...</p>;
  }

  return (

    <>
    <NavBar/>
    <div className="blog-list-page">
      <h2 className="blog-list-title">Blog List</h2>

      <div className="blog-list-grid">
        {blogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          blogs.map((blog) => (
            <div className="blog-list-card" key={blog.id}>
              {blog.imageBlobUrl ? (
                <img
                  src={blog.imageBlobUrl}
                  alt={blog.title}
                  className="blog-list-img"
                />
              ) : (
                <div className="blog-image-placeholder">
                  Image not available
                </div>
              )}

              <div className="blog-list-content">
                <h3>{blog.title}</h3>
                <p>
                  {blog.content.length > 120
                    ? blog.content.substring(0, 120) + "..."
                    : blog.content}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

    </>
  );
};

export default GetBlogList;
