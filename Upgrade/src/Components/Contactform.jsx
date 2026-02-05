import React, { useState } from "react";
import { useAuth } from "./Authprovider";
import "../Styles/Contactform.css";
import BaseUrl from "./BaseUrl";

const Contactform = () => {
  const { token } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [requirement, setRequirement] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      email,
      phone_number,
      requirement,
    };

    try {
      // 1️⃣ Submit form to backend
      const res = await BaseUrl.post("/contactform", body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Form submitted:", res.data);

      // 2️⃣ Build WhatsApp message from user input
      const whatsappNumber = "919347790288"; // 🔴 replace with YOUR WhatsApp number

      const message = `
New Contact Request

Name: ${name}
Email: ${email}
Phone: ${phone_number}
Requirements: ${requirement}
      `;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      // 3️⃣ Open WhatsApp
      window.open(whatsappUrl, "_blank");

      alert("Form submitted successfully!");

      // 4️⃣ Optional: clear form
      setName("");
      setEmail("");
      setPhone_number("");
      setRequirement("");

    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handlesubmit}>
        <h2>Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Requirements"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}

          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactform;