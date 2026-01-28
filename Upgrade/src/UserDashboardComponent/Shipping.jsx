import React from "react";
import "../Styles/Shipping.css";

const Shipping = () => {
  return (
    <div className="shipping-policy-container">
      <h1>Shipping Policy</h1>
      <p className="last-updated">Last Updated: December 18, 2025</p>

      <p>
        YGR Gobal IT Services provides service-based digital and IT solutions,
        including training, software development, website development, and
        digital services. No physical products are sold or shipped. Please read
        this policy carefully.
      </p>

      <h2>Service Delivery Policy</h2>
      <ul>
        <li>All services are delivered digitally.</li>
        <li>
          Service delivery is done via email, online platforms, cloud-based
          systems, or virtual meetings.
        </li>
        <li>
          No physical shipment, courier, or logistics service is involved.
        </li>
      </ul>

      <h2>No Physical Shipping</h2>
      <p>
        YGR Gobal IT Services does not deal with physical goods. Therefore, there
        are no shipping charges, tracking numbers, or delivery timelines related
        to courier services.
      </p>

      <h2>Delivery Timeline</h2>
      <p>
        Service delivery timelines depend on the nature of the project or
        service and will be communicated to the customer via official
        communication channels before service initiation.
      </p>

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

      <h2>Contact Information</h2>
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

export default Shipping;
