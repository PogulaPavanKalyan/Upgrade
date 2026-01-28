import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Authprovider";
import "../Styles/Payment.css";
import BaseUrl from "./BaseUrl";

const PaymentPage = () => {
  const { id } = useParams(); // courseId from URL
  const { token } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  // Fetch course details including price
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await BaseUrl.get(`Course/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourse(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourse();
  }, [id, token]);

  const handlePayment = async (method) => {
    try {
      await BaseUrl.post(
        `payment/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Payment successful! ✅");
      navigate(`/singlecourse/${id}`);
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  if (!course) return <h2>Loading course details...</h2>;

  return (
    <div className="payment-container">
      <div className="payment-left">
        <h2>Select Payment Method</h2>
        <div className="payment-card" onClick={() => handlePayment("UPI")}>
          <h3>UPI</h3>
          <p>Pay quickly using UPI apps</p>
        </div>
        <div className="payment-card" onClick={() => handlePayment("Card")}>
          <h3>Credit / Debit Card</h3>
          <p>Pay with your card securely</p>
        </div>
        <div className="payment-card" onClick={() => handlePayment("Wallet")}>
          <h3>Wallet</h3>
          <p>Use your digital wallet</p>
        </div>
      </div>

      <div className="payment-right">
        <h2>Course Summary</h2>
        <div className="summary-box">
          <p><strong>Course Name:</strong> {course.course_Name}</p>
          
          <p><strong>Price:</strong> ₹{course.price}</p>
          <p><strong>Discount:</strong> {course.discount || 0}%</p>
          <hr />
          <p>
            <strong>Total:</strong> ₹
            {course.price - (course.price * (course.discount || 0)) / 100}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
