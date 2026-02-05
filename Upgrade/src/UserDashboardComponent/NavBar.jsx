import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut,
  ChevronDown,
  BookOpen,
  Phone,
  Info,
  Rss,
  Briefcase
} from "lucide-react";
import { useAuth } from "../Components/Authprovider";
import upgrade from "../assets/images/upgrade.jpeg";
import BaseUrl from "../Components/BaseUrl";
import "../Styles/Navbar.css";

const NavBar = () => {
  const [keyword, setKeyword] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useAuth();

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    navigate(`/Courses/${keyword}`);
    setKeyword("");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (token) {
      BaseUrl.get("/getcart", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setCartCount(res.data.length))
        .catch(err => console.error("Nav cart fetch error:", err));
    }
  }, [token, location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && !e.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Courses", path: "/Courses", icon: <BookOpen size={18} /> },
    { name: "Blogs", path: "/GetBlogs", icon: <Rss size={18} /> },
    { name: "About Us", path: "/Aboutus", icon: <Info size={18} /> },
    { name: "Career", path: "/career", icon: <Briefcase size={18} /> },
    { name: "Contact", path: "/Contactform", icon: <Phone size={18} /> },
  ];

  return (
    <nav className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={upgrade} alt="UpgradeU" />
          <span className="logo-text">Upgrade<span>U</span></span>
        </div>

        {/* Desktop Search */}
        <form className="navbar-search desktop-only" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search for courses..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
          </div>
        </form>

        {/* Desktop Links */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <button
              key={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
              onClick={() => navigate(link.path)}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button
            className="action-icon-btn cart-btn"
            onClick={() => navigate("/AddtoCart")}
            title="Cart"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {token ? (
            <div className="profile-container" ref={dropdownRef}>
              <button
                className="profile-trigger"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="avatar-circle">
                  <User size={20} />
                </div>
                <ChevronDown size={14} className={isProfileOpen ? "rotate" : ""} />
              </button>

              {isProfileOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <p className="user-email">Account Settings</p>
                  </div>
                  <button onClick={() => navigate("/profile")}>
                    <User size={16} /> Profile
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="logout-item" onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}>
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className={`mobile-menu-panel ${isMenuOpen ? "open" : ""}`} ref={mobileMenuRef}>
          <div className="mobile-menu-header">
            <div className="navbar-logo" onClick={() => navigate("/")}>
              <img src={upgrade} alt="UpgradeU" />
              <span className="logo-text">Upgrade<span>U</span></span>
            </div>
            <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
          </div>

          <form className="mobile-search" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search courses..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </form>

          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.path}
                className={`mobile-nav-item ${location.pathname === link.path ? "active" : ""}`}
                onClick={() => navigate(link.path)}
              >
                <span className="icon">{link.icon}</span>
                <span className="text">{link.name}</span>
              </button>
            ))}
          </div>

          <div className="mobile-menu-footer">
            {!token && (
              <button className="mobile-login-btn" onClick={() => navigate("/login")}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

