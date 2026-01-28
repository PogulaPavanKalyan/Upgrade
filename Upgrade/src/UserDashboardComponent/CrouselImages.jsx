import React, { useEffect, useState } from "react";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import "../Styles/Crouselimages.css";

const CrouselImages = () => {
  const { token } = useAuth();

  const [items, setItems] = useState([]);
  const [images, setImages] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await BaseUrl.get("/getcrouselimagelist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(res.data);
    };
    if (token) fetchData();
  }, [token]);

  
  useEffect(() => {
    const loadImages = async () => {
      const map = {};
      for (const item of items) {
        const res = await BaseUrl.get(`/getcrouselimage/${item.id}`, {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "blob",
        });
        map[item.id] = URL.createObjectURL(res.data);
      }
      setImages(map);
    };
    if (items.length) loadImages();
  }, [items, token]);

 useEffect(() => {
  if (items.length <= 1) return;

  const interval = setInterval(() => {
    setActiveIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, [items]);


  return (
    <section className="split-carousel">

      
     <div className="split-left">
 <h2>{items[activeIndex]?.title}</h2>
<p>{items[activeIndex]?.Description}</p>
<button>{items[activeIndex]?.Actionbutton}</button>

</div>


    
      <div className="split-right">
       
        <div className="main-image">
          {images[items[activeIndex]?.id] && (
            <img
              src={images[items[activeIndex].id]}
              alt="active"
            />
          )}
        </div>

        <div className="thumb-strip">
          {items.map((item, index) => (
            <img
              key={item.id}
              src={images[item.id]}
              alt=""
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default CrouselImages;
