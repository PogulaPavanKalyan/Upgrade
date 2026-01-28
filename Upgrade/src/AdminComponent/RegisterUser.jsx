import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../Components/BaseUrl";
import {
  Users,
  Search,
  Mail,
  Phone,
  User as UserIcon,
  ShieldCheck,
  Filter,
  ArrowUpDown,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import "../AdminStyles/RegisterUsers.css";

const RegisterUser = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    BaseUrl
      .get("/registerstudents", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setStudents(response.data);
        setFilteredStudents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        if (err.response?.status === 401) setError("Unauthorized. Please login again.");
        else if (err.response?.status === 403) setError("Access denied.");
        else setError("Failed to fetch students.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = students.filter(student =>
      student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.username?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(results);
  }, [searchTerm, students]);

  if (loading) return (
    <div className="users-loading-viewport">
      <div className="users-loader"></div>
      <p>Loading member directory...</p>
    </div>
  );

  if (error) return (
    <div className="users-error-viewport">
      <div className="users-error-card">
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    </div>
  );

  return (
    <div className="users-management-container">
      {/* HEADER SECTION */}
      <div className="users-header">
        <div className="header-left">
          <div className="icon-badge">
            <Users size={24} />
          </div>
          <div className="header-text">
            <h1>User Directory</h1>
            <p>Manage and monitor all registered students and administrators.</p>
          </div>
        </div>
        <div className="header-stats">
          <div className="stat-pill">
            <span className="stat-value">{students.length}</span>
            <span className="stat-label">Total Users</span>
          </div>
        </div>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="users-controls">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by name, email or username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-actions">
          <button className="control-btn">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="control-btn">
            <ArrowUpDown size={16} />
            <span>Sort</span>
          </button>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Contact Info</th>
              <th>System Details</th>
              <th>Role</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-state">
                  <div className="empty-msg">
                    <Search size={40} />
                    <p>No matching users found for "{searchTerm}"</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr key={student.id} onClick={() => navigate(`/singleuserdetails/${student.id}`)}>
                  <td>
                    <div className="member-cell">
                      <div className="member-avatar">
                        {student.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div className="member-info">
                        <span className="member-name">{student.name}</span>
                        <span className="member-id">ID: #{student.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-cell">
                      <div className="contact-item">
                        <Mail size={14} />
                        <span>{student.email}</span>
                      </div>
                      <div className="contact-item">
                        <Phone size={14} />
                        <span>{student.phonenumber || 'N/A'}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="system-cell">
                      <div className="system-item">
                        <UserIcon size={14} />
                        <span>{student.username}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`role-badge ${student.role?.toLowerCase()}`}>
                      <ShieldCheck size={12} />
                      {student.role}
                    </span>
                  </td>
                  <td className="text-right">
                    <button className="view-btn">
                      <span>Full Profile</span>
                      <ChevronRight size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterUser;