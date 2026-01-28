import React, { useEffect, useState } from "react";

import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";
import "../Styles/Crouseldelete.css"

const CarouselList = () => {
  const { token } = useAuth();
  const [carousels, setCarousels] = useState([]);

  const fetchCarousels = async () => {
    const res = await BaseUrl.get("/getcrouselimagelist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCarousels(res.data);
  };

  useEffect(() => {
    fetchCarousels();
  }, []);

  const handleDelete = async (id) => {
    try {
      await BaseUrl.delete(
        `/admin/deletecrousellist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // remove from UI after delete
      setCarousels((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div>
      <h2>Carousel List</h2>

      {carousels.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "10px" }}>
          <img src={item.image_path} width="120" alt="" />
          <h4>{item.title}</h4>

          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarouselList;
