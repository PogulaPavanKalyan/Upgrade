import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/SingleCourse.css";
import BaseUrl from "./BaseUrl";

const SingleCourse = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const token = localStorage.getItem("token");

  /* ================= LOAD COURSE + VIDEOS ================= */
  useEffect(() => {
    fetchCourse();
    fetchVideos();
    // eslint-disable-next-line
  }, [id]);

  const fetchCourse = async () => {
    const res = await BaseUrl.get(
      `Course/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCourse(res.data);
  };

  const fetchVideos = async () => {
    const res = await BaseUrl.get(
      `courseVideoList/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.length > 0) {
      setVideos(res.data);
      setCurrentVideo(res.data[0]);
    }
  };

  /* ================= LOAD VIDEO STREAM ================= */
  useEffect(() => {
    if (!currentVideo) return;

    const loadVideo = async () => {
      const res = await BaseUrl.get(
        `getvideo/${currentVideo.videoId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "blob",
        }
      );
      setVideoUrl(URL.createObjectURL(res.data));
    };

    loadVideo();
  }, [currentVideo]);

  const playNext = () => {
    const index = videos.findIndex(
      (v) => v.videoId === currentVideo.videoId
    );
    if (videos[index + 1]) {
      setCurrentVideo(videos[index + 1]);
    }
  };

  if (!course) return <h2>Loading...</h2>;

  return (
    <div className="udemy-page">

      {/* LEFT: VIDEO AREA */}
      <div className="video-area">
        <h1 className="course-title">{course.title}</h1>

        {videoUrl && (
          <video
            key={currentVideo.videoId}
            controls
            autoPlay
            onEnded={playNext}
            className="video-player"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          
        )}

  
        

        <p className="course-desc">{course.description}</p>
      </div>

      {/* RIGHT: PLAYLIST */}
      <div className="playlist-panel">
        <h3>Course content</h3>

        <div className="playlist-scroll">
          {videos.map((v, index) => (
            <div
              key={v.videoId}
              className={`playlist-item ${
                currentVideo.videoId === v.videoId ? "active" : ""
              }`}
              onClick={() => setCurrentVideo(v)}
            >
              <span>{index + 1}.</span>
              <span>Lesson {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
