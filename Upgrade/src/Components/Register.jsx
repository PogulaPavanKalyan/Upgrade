import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock, Camera, ArrowRight } from "lucide-react";
import BaseUrl from "./BaseUrl";
import "../Styles/Login.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !username || !number || !password) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const registerRes = await BaseUrl.post("/login/register", {
        name: name.trim(),
        email: email.trim(),
        username: username.trim(),
        phonenumber: Number(number),
        password: password,
      });

      const userId = registerRes.data?.id;

      if (image && userId) {
        const formData = new FormData();
        formData.append("image", image);
        await BaseUrl.post(`/login/profileimage/${userId}`, formData);
      }

      alert("Registration successful! Please login.");
      navigate("/login");

    } catch (err) {
      console.error(err);
      alert("Registration failed. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* BRAND SIDE */}
      <div className="auth-brand-side">
        <div className="brand-content">
          <div className="brand-logo-large">UpgradeU.</div>
          <h2 className="brand-quote">Start your learning journey today.</h2>
          <p className="brand-sub">Build real-world projects, learn from industry experts, and join a community of lifelong learners.</p>
        </div>
      </div>

      {/* FORM SIDE */}
      <div className="auth-form-side">
        <div className="auth-card-modern" style={{ maxWidth: '500px' }}>
          <div className="form-header">
            <h1>Create Account</h1>
            <p>Join the next generation of digital creators.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form-stack">
            <div className="input-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="modern-input-field" style={{ gridColumn: 'span 2' }}>
                <label>Full Name</label>
                <div className="input-with-icon">
                  <User className="field-icon" size={18} />
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="modern-input-field">
                <label>Username</label>
                <div className="input-with-icon">
                  <User className="field-icon" size={18} />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="modern-input-field">
                <label>Phone Number</label>
                <div className="input-with-icon">
                  <Phone className="field-icon" size={18} />
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="modern-input-field" style={{ gridColumn: 'span 2' }}>
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail className="field-icon" size={18} />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="modern-input-field" style={{ gridColumn: 'span 2' }}>
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock className="field-icon" size={18} />
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="modern-input-field" style={{ gridColumn: 'span 2' }}>
                <label>Profile Picture (Optional)</label>
                <div className="input-with-icon">
                  <Camera className="field-icon" size={18} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ paddingLeft: '48px', paddingTop: '12px' }}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="premium-btn" disabled={loading} style={{ marginTop: '20px' }}>
              {loading ? "Creating account..." : (
                <>
                  Register Now <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="auth-footer-simple">
            Already have an account?
            <a href="/login">Sign in instead</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
