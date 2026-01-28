import React, { useEffect, useState } from "react";

import { useAuth } from "./Authprovider";
import { useNavigate } from "react-router-dom";
import "../Styles/AddtoCart.css";
import BaseUrl from "../Components/BaseUrl";
import NavBar from "../UserDashboardComponent/NavBar";

const AddtoCart = () => {
  const { token } = useAuth();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  /* ================= FETCH CART ================= */
  const fetchCart = async () => {
    if (!token) return;

    try {
      const res = await BaseUrl.get(
        "getcart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart(res.data);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  /* ================= DELETE CART ITEM ================= */
  const handleDeleteCart = async (cartId, e) => {
    e.stopPropagation(); // prevent navigation

    try {
      await BaseUrl.delete(
        `deletecart/${cartId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update UI immediately
      setCart((prev) =>
        prev.filter((item) => item.id !== cartId)
      );
    } catch (err) {
      console.error("Failed to delete cart item", err);
    }
  };

  /* ================= TOTAL PRICE ================= */
  const totalPrice = cart.reduce(
    (total, item) => total + (item.course?.price || 0),
    0
  );

  return (
    <>

    <NavBar/>
    <div className="cart-page container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-card"
                onClick={() =>
                  navigate(`/SingleCourseDetails/${item.course.id}`)
                }
              >
                <img
                  src={
                    item.course.thumbnail ||
                    "https://via.placeholder.com/200"
                  }
                  alt={item.course.title}
                  className="cart-thumbnail"
                />

                <div className="cart-details">
                  <h4 className="course-title">
                    {item.course.title}
                  </h4>

                  <p className="course-desc">
                    {item.course.description}
                  </p>

                  <p className="course-price">
                    <strong>Price:</strong> ₹{item.course.price}
                  </p>

                  {/* DELETE BUTTON */}
                  <button
                    className="cart-delete-btn"
                    onClick={(e) =>
                      handleDeleteCart(item.id, e)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default AddtoCart;
