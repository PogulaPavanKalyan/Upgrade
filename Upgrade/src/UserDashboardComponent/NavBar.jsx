import React, { useRef, useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import upgrade from "../assets/images/upgrade.jpeg";
import { useAuth } from "../Components/Authprovider";

const NavBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    navigate(`/Courses/${keyword}`);
    setKeyword("");
  };

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="app-navbar">
      <div className="logo">
        <a href="/">
        <img src={upgrade} alt="UpgradeU" className="logoo" />
        </a>
      </div>

      {/* SEARCH BOX */}
      <form className="searchbox" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search courses..."
          className="searchbox"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      <div className="list">
        <button onClick={() => navigate("/GetBlogs")}>Blogs</button>
        <button onClick={() => navigate("/Courses")}>Course</button>
        <button onClick={() => navigate("/Contactform")}>Contact</button>
        <button onClick={() => navigate("/Aboutus")}>AboutUs</button>
        <button onClick={() => navigate("/AddtoCart")}>🛒</button>
      </div>

      <div className="nav-right" ref={dropdownRef}>
        {token && (
          <div className="profile-wrapper">
            <button className="profile" onClick={() => setOpen(!open)}>
              👤
            </button>

            {open && (
              <div className="profile-dropdown1">
                <div
                  className="dropdown-item1"
                  onClick={() => {
                    setOpen(false);
                    navigate("/profile");
                  }}
                >
                  Profile
                </div>

                <div
                  className="dropdown-item logout1"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
