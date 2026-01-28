
import React, { useState } from "react";
import { useAuth } from "./Authprovider";
import "../Styles/Contactform.css";
import BaseUrl from "./BaseUrl";

const Contactform = () => {
  const { token } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [requirements, setRequirements] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      email,
      phone_number,
      requirements,
    };

    BaseUrl
      .post(
        "/contactform",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Form submitted:", res.data);
        alert("Form submitted successfully!");
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
      });
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
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactform;
