import React, { useEffect, useState } from "react";

import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";

const BackgroundImage = ({ id }) => {
  const { token } = useAuth();

  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    let objectUrl = null;

    const fetchImage = async () => {
      try {
        setLoading(true);

        const response = await BaseUrl.get(
          `/getbackgroundimageslist/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "blob", // 🔴 REQUIRED
          }
        );

        objectUrl = URL.createObjectURL(response.data);
        setImageUrl(objectUrl);
      } catch (err) {
        console.error("Image fetch error:", err);
        setError("Image not available");
      } finally {
        setLoading(false);
      }
    };

    fetchImage();

    // cleanup blob URL
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [id, token]);

  if (loading) return <p>Loading image...</p>;
  if (error) return <p>{error}</p>;

  return (
    <img
      src={imageUrl}
      alt="Background"
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "12px",
      }}
    />
  );
};

export default BackgroundImage;
