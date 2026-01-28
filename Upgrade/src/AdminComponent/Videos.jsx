import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import "../AdminStyles/Videos.css";

const Videos = () => {
  const { token } = useAuth();
  const { id } = useParams(); // ✅ USING id
  const navigate = useNavigate();

  const [previews, setPreviews] = useState([]);
  const [message, setMessage] = useState("");
  const videoRefs = useRef([]);

  // Cleanup blob URLs
  useEffect(() => {
    return () => previews.forEach(p => URL.revokeObjectURL(p.url));
  }, [previews]);

  const onSelectFiles = (e) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;

    setPreviews(
      selected.map(file => ({
        file,
        url: URL.createObjectURL(file),
        start: 0,
        end: null,
      }))
    );
  };

  const onLoadedMeta = (idx) => {
    const v = videoRefs.current[idx];
    if (!v) return;
    setPreviews(prev =>
      prev.map((p, i) =>
        i === idx ? { ...p, end: Math.floor(v.duration || 0) } : p
      )
    );
  };

  const uploadAll = async (e) => {
    e.preventDefault();

    // ✅ SAFETY CHECK
    if (!id) {
      setMessage("Invalid course. Please open upload from course page.");
      return;
    }

    if (!previews.length) {
      setMessage("Select at least one video.");
      return;
    }

    try {
      for (const p of previews) {
        const fd = new FormData();
        fd.append("video", p.file);
        fd.append("trimStart", p.start ?? 0);
        fd.append("trimEnd", p.end ?? 0);

        await BaseUrl.post(
          `/admin/postvideo/${id}`, // ✅ USING id
          fd,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setMessage("All videos uploaded successfully");
      setTimeout(() => navigate(-1), 1200);
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Upload failed";
      setMessage(msg);
    }
  };

  return (
    <div className="multi-video-page">
      <h2>Add Videos</h2>

      <form onSubmit={uploadAll} className="upload-form">
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={onSelectFiles}
        />

        <div className="preview-grid">
          {previews.map((p, idx) => (
            <div className="preview-card" key={idx}>
              <video
                ref={el => (videoRefs.current[idx] = el)}
                src={p.url}
                controls
                onLoadedMetadata={() => onLoadedMeta(idx)}
              />
            </div>
          ))}
        </div>

        <button type="submit" className="upload-btn">
          Upload Videos
        </button>

        {message && <p className="status-text">{message}</p>}
      </form>
    </div>
  );
};

export default Videos;
