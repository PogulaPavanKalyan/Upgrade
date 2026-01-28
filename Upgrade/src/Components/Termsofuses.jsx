import React from "react";
import "../Styles/TermsOfUses.css";
import NavBar from "../UserDashboardComponent/NavBar";

const TermsOfUses = () => {
  return (
    <>
      <NavBar />
      <div className="terms-container">
        <h1 className="terms-title">Terms of Use</h1>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using our website and services, you agree to comply with and be bound
            by these Terms of Use and our Privacy Policy. We reserve the right to
            modify these terms at any time without prior notice.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Services Provided</h2>
          <p>
            We offer various IT training programs, workshops, and consulting
            services. The information on this website is for general purposes only
            and may be updated or changed without prior notice.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information when registering.</li>
            <li>
              Not misuse, copy, or distribute course materials without prior
              consent.
            </li>
            <li>
              Not engage in activities such as hacking, spamming, or unauthorized
              access.
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Payment & Refund Policy</h2>
          <p>
            Fees for training programs must be paid in full before the start of the
            course unless otherwise agreed. Refunds are subject to our Cancellation
            & Refund Policy. Course fees and offerings may change without notice.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Intellectual Property Rights</h2>
          <p>
            All content including text, images, course materials, and logos are
            the property of <strong>YGRGOBAL IT Services</strong> and protected by
            copyright laws. Unauthorized reproduction or distribution is
            prohibited.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            Our services are provided “as is” without warranties of any kind. We
            do not guarantee job placement after course completion.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            YGRGOBAL IT Services shall not be liable for any direct, indirect, or
            incidental damages resulting from the use of our services or website.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services
            for users who violate these Terms of Use.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be
            subject to the jurisdiction of courts in Kukatpally (KPHB), Hyderabad,
            Telangana.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Contact Information</h2>

          <div className="contact-block">
            <p><strong>Email:</strong> hr@rrgobalitservice.com</p>
            <p><strong>Phone:</strong> +91 6300297048, +91 9948257919</p>
          </div>

          <div className="address-block">
            <h3>Head Office</h3>
            <p>
              1st Floor, Manjeera Trinity Corporate, Unit No. 114,<br />
              Next to Lulu Mall, Kukatpally Housing Board Colony,<br />
              Kukatpally, Hyderabad, Telangana – 500072
            </p>

            <h3>Branch Office</h3>
            <p>
              H.No. 15-26-101, 4th Floor, Road No. 2,<br />
              KPHB Colony, Near KPHB Metro Station,<br />
              Hyderabad – 500072
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfUses;
