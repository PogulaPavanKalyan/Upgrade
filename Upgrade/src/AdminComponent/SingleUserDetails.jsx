import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Tag,
  Calendar,
  GraduationCap,
  BookOpen,
  Briefcase,
  School,
  IdCard,
  Building
} from "lucide-react";
import "../AdminStyles/SingleUserDetails.css";

const SingleUserDetails = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const res = await BaseUrl.get(`/registerstudents/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user details", err);
    } finally {
      setLoading(false);
    }
  };

  const showValue = (value) =>
    value === null || value === "" ? "Not Provided" : value;

  if (loading) return (
    <div className="status-container">
      <div className="loader"></div>
      <p>Fetching user details...</p>
    </div>
  );

  if (!user) return (
    <div className="status-container">
      <div className="error-box">
        <h3>User Not Found</h3>
        <p>The requested user ID does not exist or has been removed.</p>
        <button className="primary-btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );

  return (
    <div className="user-details-viewport">
      <div className="details-container">
        {/* TOP BAR */}
        <div className="details-header">
          <button className="back-link-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} />
            <span>Back to Users</span>
          </button>
          <div className="header-main">
            <div className="user-profile-circle">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="header-text">
              <h1>{showValue(user.name)}</h1>
              <div className="header-badges">
                <span className="user-role-badge">{user.role}</span>
                <span className="user-id-badge">ID: #{user.id}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="details-grid">
          {/* PERSONAL INFO SECTION */}
          <div className="details-section">
            <div className="section-title">
              <User size={18} />
              <h3>Personal Information</h3>
            </div>
            <div className="info-cards">
              <div className="info-item">
                <label><Mail size={14} /> Email Address</label>
                <strong>{showValue(user.email)}</strong>
              </div>
              <div className="info-item">
                <label><IdCard size={14} /> Username</label>
                <strong>{showValue(user.username)}</strong>
              </div>
              <div className="info-item">
                <label><Phone size={14} /> Phone Number</label>
                <strong>{showValue(user.phonenumber)}</strong>
              </div>
              <div className="info-item">
                <label><Calendar size={14} /> Date of Birth</label>
                <strong>
                  {user.dateofbirth
                    ? new Date(user.dateofbirth).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })
                    : "Not Provided"}
                </strong>
              </div>
            </div>
          </div>

          {/* ACADEMIC DETAILS SECTION */}
          <div className="details-section">
            <div className="section-title">
              <GraduationCap size={18} />
              <h3>Educational Background</h3>
            </div>
            <div className="info-cards">
              <div className="info-item">
                <label><Tag size={14} /> Qualification</label>
                <strong>{showValue(user.qualification)}</strong>
              </div>
              <div className="info-item">
                <label><BookOpen size={14} /> Branch / Specialization</label>
                <strong>{showValue(user.branch)}</strong>
              </div>
              <div className="info-item">
                <label><Calendar size={14} /> Year of Completion</label>
                <strong>{showValue(user.yearofpassedout)}</strong>
              </div>
              <div className="info-item">
                <label><School size={14} /> University / College</label>
                <strong>{showValue(user.collegename)}</strong>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL STATUS */}
          <div className="details-section highlight-section">
            <div className="section-title">
              <Briefcase size={18} />
              <h3>Career & Status</h3>
            </div>
            <div className="status-banner">
              <div className="info-item">
                <label><Building size={14} /> Current Working Status</label>
                <div className="status-pill">{showValue(user.currentworkingstatus)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserDetails;
