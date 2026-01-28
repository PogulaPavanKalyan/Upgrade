import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Components/Authprovider";
import BaseUrl from "../Components/BaseUrl";
import {
  Users,
  BookOpen,
  IndianRupee,
  CreditCard,
  LogOut,
  LayoutDashboard,
  PlusSquare,
  FileText,
  Image as ImageIcon,
  Trash2,
  Moon,
  Sun,
  Bell,
  Search,
  ChevronRight
} from "lucide-react";
import "../Styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, role = "ADMIN" } = useAuth(); // role: ADMIN | INSTRUCTOR
  const [dark, setDark] = useState(true);
  const [statsData, setStatsData] = useState({
    userCount: 0,
    courseCount: 0,
    revenue: 0,
    totalTransactions: 0
  });
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [usersRes, coursesRes, paymentsRes] = await Promise.all([
          BaseUrl.get("/registerstudents", { headers: { Authorization: `Bearer ${token}` } }),
          BaseUrl.get("/Course", { headers: { Authorization: `Bearer ${token}` } }),
          BaseUrl.get("/admin/mypayment", { headers: { Authorization: `Bearer ${token}` } })
        ]);

        const totalRevenue = paymentsRes.data.reduce((acc, pay) => {
          // Priority: pay.amount > pay.totalAmount > pay.course.price
          const amount = pay.amount || pay.totalAmount || (pay.course?.price || 0);
          return acc + amount;
        }, 0);

        setStatsData({
          userCount: usersRes.data.length,
          courseCount: coursesRes.data.length,
          revenue: totalRevenue,
          totalTransactions: paymentsRes.data.length
        });

        // Get recent 5 users
        const sortedUsers = [...usersRes.data].reverse().slice(0, 5);
        setRecentUsers(sortedUsers);

        // Get recent 5 payments
        const sortedPayments = [...paymentsRes.data].reverse().slice(0, 5);
        setRecentPayments(sortedPayments);
      } catch (err) {
        console.error("Failed to fetch dashboard stats", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchDashboardData();
    }
  }, [token]);

  const menuItems = [
    { name: "Dashboard", path: "/admindashboard", icon: <LayoutDashboard size={20} />, roles: ["ADMIN", "INSTRUCTOR"] },
    { name: "Courses", path: "/AllCourses", icon: <BookOpen size={20} />, roles: ["ADMIN"] },
    { name: "Add Course", path: "/addCourse", icon: <PlusSquare size={20} />, roles: ["ADMIN"] },
    { name: "Users", path: "/registeruser", icon: <Users size={20} />, roles: ["ADMIN"] },
    { name: "Blogs", path: "/PostBlogs", icon: <FileText size={20} />, roles: ["ADMIN"] },
    { name: "Payments", path: "/PaymentDetails", icon: <CreditCard size={20} />, roles: ["ADMIN"] },
    { name: "Carousel Post", path: "/crouselposting", icon: <ImageIcon size={20} />, roles: ["ADMIN"] },
    { name: "Carousel Delete", path: "/crouseldeleting", icon: <Trash2 size={20} />, roles: ["ADMIN"] },
  ];

  const stats = [
    { title: "Total Users", value: statsData.userCount.toLocaleString(), icon: <Users size={24} />, color: "blue", trend: "+12%" },
    { title: "Active Courses", value: statsData.courseCount.toLocaleString(), icon: <BookOpen size={24} />, color: "purple", trend: "+5%", link: "/AllCourses" },
    { title: "Revenue", value: `₹${statsData.revenue.toLocaleString()}`, icon: <IndianRupee size={24} />, color: "green", trend: "+18%" },
    { title: "Transactions", value: statsData.totalTransactions.toLocaleString(), icon: <CreditCard size={24} />, color: "orange", trend: "-2%", link: "/PaymentDetails" },
  ];

  return (
    <div className={`admin-app ${dark ? "dark-theme" : "light-theme"}`}>
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="admin-logo">
            <div className="logo-icon">U</div>
            <span onClick={() => navigate("/adminDashboard")}>UpgradeU Admin</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-label">Main Menu</div>
          {menuItems.filter(item => item.roles.includes(role)).map((item) => (
            <button
              key={item.path}
              className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={() => {
            localStorage.removeItem("token");
            navigate("/register");
          }}>
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="content-wrapper">
        {/* TOP NAVBAR */}
        <header className="admin-header">
          <div className="header-search">
            <Search size={18} />
            <input type="text" placeholder="Search analytics..." />
          </div>

          <div className="header-actions">
            <button className="icon-btn" onClick={() => setDark(!dark)}>
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge"></span>
            </button>
            <div className="user-profile">
              <div className="user-avatar">AD</div>
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">{role}</span>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="admin-main">
          <div className="page-header">
            <div>
              <h1 className="page-title">Dashboard Overview</h1>
              <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
            </div>
            <button className="primary-btn">Download Report</button>
          </div>

          {/* STATS GRID */}
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`stat-card ${stat.color}`}
                onClick={stat.link ? () => navigate(stat.link) : undefined}
                style={{ cursor: stat.link ? "pointer" : "default" }}
              >
                <div className="stat-icon-box">
                  {stat.icon}
                </div>
                <div className="stat-details">
                  <span className="stat-label">{stat.title}</span>
                  <div className="stat-value-group">
                    <h2 className="stat-value">{stat.value}</h2>
                    <span className={`stat-trend ${stat.trend.startsWith('+') ? 'up' : 'down'}`}>
                      {stat.trend}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TWO COLUMN SECTION (Placeholder for future expansion) */}
          <div className="dashboard-grid">
            <div className="data-card large">
              <div className="card-header">
                <h3>Recent Activities</h3>
                <button className="text-btn">View All</button>
              </div>
              <div className="placeholder-content">
                {recentUsers.length === 0 && (
                  <div className="activity-item">
                    <div className="activity-dot"></div>
                    <div className="activity-text">
                      <span>No recent activities found</span>
                    </div>
                  </div>
                )}

                {recentUsers.slice(0, 3).map((user, idx) => (
                  <div className="activity-item" key={`user-${user.id}`}>
                    <div className="activity-dot"></div>
                    <div className="activity-text">
                      <strong>New User Registered</strong>
                      <span>{user.name} joined the platform</span>
                      <small>Just now</small>
                    </div>
                  </div>
                ))}

                {recentPayments.slice(0, 2).map((pay, idx) => (
                  <div className="activity-item" key={`pay-${pay.id}`}>
                    <div className="activity-dot blue"></div>
                    <div className="activity-text">
                      <strong>Payment Received</strong>
                      <span>₹{pay.amount || pay.totalAmount || pay.course?.price || 0} from {pay.user?.username || 'Student'}</span>
                      <small>Recent transaction</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="data-card small">
              <div className="card-header">
                <h3>Quick Actions</h3>
              </div>
              <div className="quick-actions">
                <button className="action-tile" onClick={() => navigate("/addCourse")}>
                  <PlusSquare />
                  <span>New Course</span>
                </button>
                <button className="action-tile" onClick={() => navigate("/PostBlogs")}>
                  <FileText />
                  <span>Write Blog</span>
                </button>
                <button className="action-tile" onClick={() => navigate("/registeruser")}>
                  <Users />
                  <span>Manage Users</span>
                </button>
                <button className="action-tile" onClick={() => navigate("/PaymentDetails")}>
                  <IndianRupee />
                  <span>Finance</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
