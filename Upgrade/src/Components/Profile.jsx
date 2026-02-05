import React, { useEffect, useState } from "react";
import { Edit2, User, BookOpen, Briefcase, Save, X } from "lucide-react";
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
    name: "",
    phonenumber: "",
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

  // Sync editData whenever profile is fetched or updated
  useEffect(() => {
    if (profile) {
      setEditData({
        name: profile.name || "",
        phonenumber: profile.phonenumber || "",
        dateofbirth: profile.dateofbirth || "",
        qualification: profile.qualification || "",
        branch: profile.branch || "",
        yearofpassedout: profile.yearofpassedout || "",
        collegename: profile.collegename || "",
        currentworkingstatus: profile.currentworkingstatus || "",
      });
    }
  }, [profile]);

  const fetchProfile = async () => {
    try {
      const res = await BaseUrl.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(res.data);

      if (res.data.profileImageentity) {
        fetchProfileImage(res.data.profileImageentity.id);
      }
    } catch (err) {
      console.error("Fetch profile error:", err);
    }
  };

  const fetchProfileImage = async (id) => {
    try {
      const res = await BaseUrl.get(`/getprofileimage/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });
      const url = URL.createObjectURL(res.data);
      setImageUrl(url);
    } catch (err) {
      console.error("Error fetching profile image:", err);
      setImageUrl(null); // Fallback to default
    }
  };

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveProfile = async () => {
    setLoading(true);
    try {
      const dataToSend = {
        ...editData,
        phonenumber: editData.phonenumber ? Number(editData.phonenumber) : null
      };

      await BaseUrl.put("/editprofile", dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully");
      setEditMode(false);
      fetchProfile();
    } catch (err) {
      console.error(err);
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

    if (!profile?.id) {
      alert("User ID not found. Please refresh the page.");
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("image", newImage);

    try {
      // Updated to use the correct PUT endpoint provided by the backend
      // Note: The backend identifies the user from the JWT token
      await BaseUrl.put("/editprofileimage", fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        },
      });

      alert("Profile picture updated successfully!");
      setShowImagePicker(false);
      setNewImage(null); // Clear selected image
      fetchProfile();
    } catch (err) {
      console.error("Upload error:", err);
      if (err.response?.status === 404) {
        alert("Image upload endpoint not found. Please contact support.");
      } else {
        alert("Failed to upload image. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card-tabs">
        {/* HEADER DECORATION */}
        <div className="profile-header-gradient">
          {!editMode && (
            <button className="floated-edit-btn" onClick={() => setEditMode(true)}>
              <Edit2 size={16} />
              <span>Edit Profile</span>
            </button>
          )}
        </div>

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
          <h2>{editMode ? editData.name : profile.name}</h2>
          <p className="profile-subtitle">
            @{profile.username} • {editMode ? (editData.currentworkingstatus || "Learner") : (profile.currentworkingstatus || "Learner")}
          </p>
        </div>

        {/* TABS (Hidden in Edit Mode for better focus) */}
        {!editMode && (
          <div className="profile-tabs">
            <button onClick={() => setActiveTab("profile")} className={activeTab === "profile" ? "active" : ""}>
              <User size={16} /> Personal
            </button>
            <button onClick={() => setActiveTab("education")} className={activeTab === "education" ? "active" : ""}>
              <BookOpen size={16} /> Education
            </button>
            <button onClick={() => setActiveTab("work")} className={activeTab === "work" ? "active" : ""}>
              <Briefcase size={16} /> Employment
            </button>
          </div>
        )}

        {/* CONTENT */}
        <div className="tab-content">
          {!editMode ? (
            /* ================= VIEW MODE (TABBED) ================= */
            <>
              {activeTab === "profile" && (
                <div className="tab-pane">
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
                </div>
              )}

              {activeTab === "education" && (
                <div className="tab-pane">
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
                </div>
              )}

              {activeTab === "work" && (
                <div className="tab-pane">
                  <div className="info-grid">
                    <div className="info-item full-width">
                      <span className="info-label">Working Status</span>
                      <span className="info-value">{profile.currentworkingstatus || "Not set"}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* ================= EDIT MODE (UNIFIED FORM) ================= */
            <div className="unified-edit-form">
              <h3 className="edit-section-title"><User size={18} /> Personal Information</h3>
              <div className="edit-form-stack">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={editData.name} disabled className="disabled-input" />
                </div>
                <div className="form-group">
                  <label>Username (Read only)</label>
                  <input type="text" value={profile.username} disabled className="disabled-input" />
                </div>
                <div className="form-group">
                  <label>Email (Read only)</label>
                  <input type="email" value={profile.email} disabled className="disabled-input" />
                </div>
                <div className="form-group">
                  <label>Phone Number (Read only)</label>
                  <input type="tel" value={profile.phonenumber} disabled className="disabled-input" />
                </div>
                <div className="form-group full-width">
                  <label>Date of Birth</label>
                  <input type="date" name="dateofbirth" value={editData.dateofbirth} onChange={handleChange} />
                </div>
              </div>

              <h3 className="edit-section-title" style={{ marginTop: '30px' }}><BookOpen size={18} /> Education Details</h3>
              <div className="edit-form-stack">
                <div className="form-group">
                  <label>Qualification</label>
                  <select name="qualification" value={editData.qualification} onChange={handleChange}>
                    <option value="">Select Qualification</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="B.Com">B.Com</option>
                    <option value="M.Com">M.Com</option>
                    <option value="MBA">MBA</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Degree">Degree</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Other">Other</option>
                  </select>
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
                    <option value="">Select Year</option>
                    {["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"].map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>College Name</label>
                  <input type="text" name="collegename" placeholder="College Name" value={editData.collegename} onChange={handleChange} />
                </div>
              </div>

              <h3 className="edit-section-title" style={{ marginTop: '30px' }}><Briefcase size={18} /> Employment Status</h3>
              <div className="edit-form-stack">
                <div className="form-group full-width">
                  <label>Current Status</label>
                  <select name="currentworkingstatus" value={editData.currentworkingstatus} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="Student">Student</option>
                    <option value="Fresher">Fresher</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Career Switcher">Career Switcher</option>
                    <option value="Self Employed">Self Employed</option>
                  </select>
                </div>
              </div>

              {/* GLOBAL ACTIONS */}
              <div className="profile-actions edit-active">
                <button className="btn-secondary" onClick={() => setEditMode(false)}>
                  <X size={18} /> Cancel
                </button>
                <button className="save-btn" onClick={saveProfile} disabled={loading}>
                  {loading ? "Updating..." : (
                    <>
                      <Save size={18} /> Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
