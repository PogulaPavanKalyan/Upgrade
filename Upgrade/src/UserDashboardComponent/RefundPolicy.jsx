import React from "react";
import "../Styles/RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-policy-container">
      <h1>Cancellation & Refund Policy</h1>
      <p className="last-updated">Last Updated: December 18, 2025</p>

      <p>
        YGR Gobal IT Services provides service-based digital and IT solutions,
        including training, software development, website development, and
        digital services. No physical products are sold or shipped. Please read
        this policy carefully before making a payment.
      </p>

      <h2>Cancellation Policy</h2>
      <ul>
        <li>
          Cancellations are allowed only if the request is made within 24 hours
          of payment and before access to any service, training material, login
          credentials, or sessions is provided.
        </li>
        <li>
          Once the service is initiated or access is shared, cancellation
          requests will not be accepted.
        </li>
      </ul>

      <h2>Refund Policy</h2>
      <ul>
        <li>
          Refunds are applicable only if the service has not been accessed,
          started, or delivered.
        </li>
        <li>
          No refunds will be issued once course materials, credentials, project
          work, or live session access is provided.
        </li>
        <li>Approved refunds will be processed within 7–10 working days.</li>
        <li>
          Refunds will be credited only to the original payment method used
          during the transaction.
        </li>
        <li>
          Payment gateway charges, if any, may be deducted from the refund
          amount.
        </li>
      </ul>

      <h2>Non-Refundable Situations</h2>
      <ul>
        <li>Training or service has already started</li>
        <li>Materials or login access has been shared</li>
        <li>Non-attendance after enrollment</li>
        <li>Change of mind after purchase</li>
        <li>Delay caused by the customer</li>
      </ul>

      <h2>Business Details</h2>
      <div className="business-details">
        <p><strong>Business Name:</strong> YGR Gobal IT Services</p>
        <p><strong>GST Number:</strong> 36AABCYY6221BZB</p>

        <p className="address-title">Head Office:</p>
        <p>
          1st Floor, Manjeera Trinity Corporate,<br />
          Unit No. 114, Next to Lulu Mall,<br />
          Kukatpally Housing Board Colony,<br />
          Kukatpally, Hyderabad,<br />
          Telangana – 500072
        </p>

        <p className="address-title">Branch Office:</p>
        <p>
          H.No. 15-25-101, 4th Floor,<br />
          Road No. 2, KPHB Colony,<br />
          Near KPHB Metro Station,<br />
          Hyderabad – 500072
        </p>
      </div>

      <h2>Contact & Grievance Information</h2>
      <p>
        For cancellations, refunds, or payment-related grievances, contact us
        at:
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> support@ygrgobalitservices.com</p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://ygrgobalitservices.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ygrgobalitservices.com
          </a>
        </p>
      </div>

      <p className="response-note">
        Our support team will respond within 48 business hours.
      </p>
    </div>
  );
};

export default RefundPolicy;
