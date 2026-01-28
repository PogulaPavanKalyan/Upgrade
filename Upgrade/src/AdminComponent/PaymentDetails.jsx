import React, { useEffect, useState } from "react";
import BaseUrl from "../Components/BaseUrl";
import { useAuth } from "../Components/Authprovider";
import {
  CreditCard,
  Search,
  Download,
  Filter,
  Calendar,
  Clock,
  User,
  BookOpen,
  IndianRupee,
  ChevronRight,
  TrendingUp,
  History
} from "lucide-react";
import "../Styles/PaymentDetails.css";

const AdminPaymentDetails = () => {
  const { token } = useAuth();

  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await BaseUrl.get("/admin/mypayment", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPayments(res.data);
        setFilteredPayments(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load payment details");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [token]);

  useEffect(() => {
    const results = payments.filter(pay =>
      pay.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pay.user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pay.course?.course_Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pay.paymentId?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPayments(results);
  }, [searchTerm, payments]);

  const totalRevenue = payments.reduce((acc, pay) => acc + (pay.amount || pay.totalAmount || pay.course?.price || 0), 0);

  if (loading) return (
    <div className="payments-status-container">
      <div className="payments-loader"></div>
      <p>Syncing transaction records...</p>
    </div>
  );

  if (error) return (
    <div className="payments-status-container">
      <div className="payments-error-card">
        <h3>Connection Error</h3>
        <p>{error}</p>
        <button className="retry-btn" onClick={() => window.location.reload()}>Retry Sync</button>
      </div>
    </div>
  );

  return (
    <div className="payments-management-viewport">
      {/* HEADER SECTION */}
      <div className="payments-header-main">
        <div className="header-left-group">
          <div className="payments-icon-box">
            <History size={24} />
          </div>
          <div className="header-titles">
            <h1>Transaction History</h1>
            <p>Monitor all course purchases and financial activities.</p>
          </div>
        </div>

        <div className="revenue-summary-card">
          <div className="revenue-stat">
            <span className="revenue-label">Total Revenue Generated</span>
            <div className="revenue-value-box">
              <IndianRupee size={20} className="currency-icon" />
              <h2>{totalRevenue.toLocaleString()}</h2>
            </div>
          </div>
          <div className="revenue-trend">
            <TrendingUp size={16} />
            <span>Live Overview</span>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="payments-controls">
        <div className="search-bar-wrapper">
          <Search size={18} className="search-icon-fixed" />
          <input
            type="text"
            placeholder="Search by user, email, course or payment ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="action-button-group">
          <button className="control-outline-btn">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="control-outline-btn">
            <Download size={16} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="payments-table-container">
        <table className="payments-pro-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Details</th>
              <th>Course Package</th>
              <th>Transaction Amount</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length === 0 ? (
              <tr>
                <td colSpan="6" className="payments-empty-cell">
                  <div className="empty-visual">
                    <CreditCard size={48} />
                    <p>No transactions found matching your criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredPayments.map((pay, index) => (
                <tr key={pay.id}>
                  <td className="payment-id-cell">
                    <span className="id-label">TXN</span>
                    <span className="id-value">{pay.paymentId || 'PAY-REF-' + pay.id}</span>
                  </td>
                  <td>
                    <div className="customer-info-box">
                      <div className="avatar-mini">
                        <User size={14} />
                      </div>
                      <div className="customer-text">
                        <span className="customer-name">{pay.user?.username}</span>
                        <span className="customer-email">{pay.user?.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="course-info-box">
                      <BookOpen size={14} className="course-icon-dim" />
                      <span>{pay.course?.course_Name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="amount-pill">
                      <IndianRupee size={14} />
                      <span>{(pay.amount || pay.totalAmount || pay.course?.price || 0).toLocaleString()}</span>
                    </div>
                  </td>
                  <td>
                    <span className="status-badge success">
                      <div className="dot"></div>
                      Completed
                    </span>
                  </td>
                  <td>
                    <div className="datetime-box">
                      <div className="date-item"><Calendar size={12} /> {pay.date}</div>
                      <div className="time-item"><Clock size={12} /> {pay.time}</div>
                    </div>
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

export default AdminPaymentDetails;
