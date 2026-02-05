import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import "../Styles/Crouselimages.css";

const CrouselImages = () => {
  const { token } = useAuth();

  const [items, setItems] = useState([]);
  const [images, setImages] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await BaseUrl.get("/getcrouselimagelist", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(res.data);
      } catch (err) {
        console.error("Fetch carousel data error:", err);
      }
    };
    if (token) fetchData();
  }, [token]);

  useEffect(() => {
    const loadImages = async () => {
      const map = {};
      try {
        for (const item of items) {
          const res = await BaseUrl.get(`/getcrouselimage/${item.id}`, {
            headers: { Authorization: `Bearer ${token}` },
            responseType: "blob",
          });
          map[item.id] = URL.createObjectURL(res.data);
        }
        setImages(map);
      } catch (err) {
        console.error("Load carousel images error:", err);
      }
    };
    if (items.length) loadImages();
  }, [items, token]);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [items, activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 400);
  };

  if (!items.length) return null;

  return (
    <section className="split-carousel">
      <div className="carousel-background-wrapper">
        <div className="carousel-container">
          {/* LEFT CONTENT */}
          <div className={`split-left ${isTransitioning ? "fade-out" : "fade-in"}`}>
            <h2>{items[activeIndex]?.title}</h2>
            <p>{items[activeIndex]?.Description}</p>
            <button className="carousel-cta">{items[activeIndex]?.Actionbutton || "Discover More"}</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="split-right">
            <div className={`main-image-container ${isTransitioning ? "scale-down" : "scale-up"}`}>
              {images[items[activeIndex]?.id] ? (
                <img
                  src={images[items[activeIndex].id]}
                  alt={items[activeIndex]?.title}
                  className="carousel-main-img"
                />
              ) : (
                <div className="image-placeholder"></div>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="thumb-strip">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`thumb-item ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {images[item.id] && <img src={images[item.id]} alt="" />}
                  <div className="thumb-progress"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrouselImages;
