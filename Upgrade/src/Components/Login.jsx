import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "./Authprovider";
import BaseUrl from "./BaseUrl";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const { saveToken } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    setIsLoading(true);
    try {
      const res = await BaseUrl.post("/login/login", {
        username,
        password,
      });

      saveToken(res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "ADMIN") {
        navigate("/admindashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      alert("Invalid credentials. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* BRAND SIDE */}
      <div className="auth-brand-side">
        <div className="brand-content">
          <div className="brand-logo-large">UpgradeU.</div>
          <h2 className="brand-quote">Accelerate your career with industry-led training.</h2>
          <p className="brand-sub">Join thousands of students who are upgrading their skills and landing dream jobs with our expert-led curriculum.</p>
        </div>
      </div>

      {/* FORM SIDE */}
      <div className="auth-form-side">
        <div className="auth-card-modern">
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handlesubmit} className="auth-form-stack">
            <div className="input-stack">
              <div className="modern-input-field">
                <label>Username / Email</label>
                <div className="input-with-icon">
                  <User className="field-icon" size={18} />
                  <input
                    type="text"
                    placeholder="e.g. rahul_sharma"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="modern-input-field">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock className="field-icon" size={18} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="premium-btn" disabled={isLoading}>
              {isLoading ? "Signing in..." : (
                <>
                  Sign In <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="auth-footer-simple">
            Don’t have an account?
            <a href="/register">Create one for free</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
