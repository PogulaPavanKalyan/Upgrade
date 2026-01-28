import React, { useEffect, useState } from "react";
import BaseUrl from "./BaseUrl";
import "../Styles/Profile.css";

const Profile = () => {
  const token = localStorage.getItem("token");

  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);

  const [editData, setEditData] = useState({
    dateofbirth: "",
    qualification: "",
    branch: "",
    yearofpassedout: "",
    collegename: "",
    currentworkingstatus: "",
  });

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await BaseUrl.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfile(res.data);

      setEditData({
        dateofbirth: res.data.dateofbirth || "",
        qualification: res.data.qualification || "",
        branch: res.data.branch || "",
        yearofpassedout: res.data.yearofpassedout || "",
        collegename: res.data.collegename || "",
        currentworkingstatus: res.data.currentworkingstatus || "",
      });

      if (res.data.profileImageentity) {
        fetchProfileImage(res.data.profileImageentity.id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProfileImage = async (id) => {
    const res = await BaseUrl.get(`/getprofileimage/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: "blob",
    });
    setImageUrl(URL.createObjectURL(res.data));
  };

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveProfile = async () => {
    setLoading(true);
    try {
      await BaseUrl.put("/editprofile", editData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully");
      setEditMode(false);
      fetchProfile();
    } catch {
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async () => {
    if (!newImage) {
      alert("Please select an image first");
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("image", newImage);

    try {
      // Trying the endpoint from Register.jsx first, but with error handling
      await BaseUrl.post(`/profileimage/${profile.id}`, fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        },
      });

      alert("Profile picture updated successfully!");
      setShowImagePicker(false);
      fetchProfile();
    } catch (err) {
      console.error("Upload error:", err);
      if (err.response?.status === 404) {
        alert("Image upload endpoint not found. Please contact support.");
      } else {
        alert("Failed to upload image. Please try again.");
      }
    } finally {
      setLoading(true); // Should be false, but following the pattern in saveProfile
      setLoading(false);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card-tabs">
        {/* HEADER DECORATION */}
        <div className="profile-header-gradient"></div>

        {/* IMAGE */}
        <div className="profile-image-small">
          <img src={imageUrl || "/user.png"} alt="Profile" />
          <button onClick={() => setShowImagePicker(!showImagePicker)}>
            {showImagePicker ? "Cancel" : "Change Photo"}
          </button>

          {showImagePicker && (
            <div className="image-upload-controls">
              <input
                type="file"
                onChange={(e) => setNewImage(e.target.files[0])}
              />
              <button className="upload-confirm-btn" onClick={uploadImage}>Confirm Upload</button>
            </div>
          )}
        </div>

        {/* NAME */}
        <div style={{ textAlign: 'center' }}>
          <h2>{profile.name}</h2>
          <p className="profile-subtitle">@{profile.username} • {profile.currentworkingstatus || "Learner"}</p>
        </div>

        {/* TABS */}
        <div className="profile-tabs">
          <button onClick={() => setActiveTab("profile")} className={activeTab === "profile" ? "active" : ""}>Personal</button>
          <button onClick={() => setActiveTab("education")} className={activeTab === "education" ? "active" : ""}>Education</button>
          <button onClick={() => setActiveTab("work")} className={activeTab === "work" ? "active" : ""}>Employment</button>
        </div>

        {/* CONTENT */}
        <div className="tab-content">

          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="tab-pane">
              {!editMode ? (
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Full Name</span>
                    <span className="info-value">{profile.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email Address</span>
                    <span className="info-value">{profile.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Username</span>
                    <span className="info-value">{profile.username}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone Number</span>
                    <span className="info-value">{profile.phonenumber}</span>
                  </div>
                </div>
              ) : (
                <div className="edit-form-stack">
                  <div className="form-group full-width">
                    <label>Date of Birth</label>
                    <input type="date" name="dateofbirth" value={editData.dateofbirth} onChange={handleChange} />
                  </div>
                </div>
              )}

              {!editMode && (
                <div className="profile-actions">
                  <button className="save-btn" onClick={() => setEditMode(true)}>Edit Profile Details</button>
                </div>
              )}
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === "education" && (
            <div className="tab-pane">
              {!editMode ? (
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Qualification</span>
                    <span className="info-value">{profile.qualification || "Not set"}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Branch</span>
                    <span className="info-value">{profile.branch || "Not set"}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Passout Year</span>
                    <span className="info-value">{profile.yearofpassedout || "Not set"}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">College</span>
                    <span className="info-value">{profile.collegename || "Not set"}</span>
                  </div>
                </div>
              ) : (
                <div className="edit-form-stack">
                  <div className="form-group">
                    <label>Qualification</label>
                    <input type="text" name="qualification" placeholder="e.g. B.Tech"
                      value={editData.qualification} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label>Branch</label>
                    <select name="branch" value={editData.branch} onChange={handleChange}>
                      <option value="">Select Branch</option>
                      <option value="CSE">Computer Science</option>
                      <option value="IT">Information Technology</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="MECH">Mechanical</option>
                      <option value="CIVIL">Civil</option>
                      <option value="BSC">B.Sc</option>
                      <option value="BCA">BCA</option>
                      <option value="BCOM">B.Com</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Passout Year</label>
                    <select name="yearofpassedout" value={editData.yearofpassedout} onChange={handleChange}>
                      <option value="">Year of Passed Out</option>
                      {["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"].map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>College Name</label>
                    <input type="text" name="collegename" placeholder="College Name"
                      value={editData.collegename} onChange={handleChange} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* WORK TAB */}
          {activeTab === "work" && (
            <div className="tab-pane">
              {!editMode ? (
                <div className="info-grid">
                  <div className="info-item full-width">
                    <span className="info-label">Working Status</span>
                    <span className="info-value">{profile.currentworkingstatus || "Not set"}</span>
                  </div>
                </div>
              ) : (
                <div className="edit-form-stack">
                  <div className="form-group full-width">
                    <label>Current Status</label>
                    <select
                      name="currentworkingstatus"
                      value={editData.currentworkingstatus}
                      onChange={handleChange}
                    >
                      <option value="">Current Status</option>
                      <option value="Student">Student</option>
                      <option value="Fresher">Fresher</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Career Switcher">Career Switcher</option>
                      <option value="Self Employed">Self Employed</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SAVE ACTIONS */}
          {editMode && (
            <div className="profile-actions">
              <button className="btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
              <button className="save-btn" onClick={saveProfile} disabled={loading}>
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
