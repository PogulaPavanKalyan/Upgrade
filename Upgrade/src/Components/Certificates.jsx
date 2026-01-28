import React from 'react'
import "../Styles/Certificate.css"
import bg from "../assets/images/certificate2.jpg"

const Certificates = () => {
  return (
    <div>
         <div className="container my-5">
      <div className="row certificate-page">

        {/* LEFT SIDE – CERTIFICATE */}
        {/* <div className="col-md-7">
          <div className="certificate-box shadow-lg">

            <h1 className="cert-title">Certificate of Completion</h1>
            <p className="cert-subtitle">This certificate is proudly presented to</p>

            <h2 className="cert-name">John Doe</h2>

            <p className="cert-text">for successfully completing the course</p>

            <h3 className="cert-course">Full Stack Java Development</h3>

            <p className="cert-quote">
              “This certificate represents dedication, continuous learning,
              and readiness to apply skills in real-world scenarios.”
            </p>

            <div className="cert-footer">
              <div>
                <span>Issued By</span>
                <p>Your UpgradeU Academy</p>
              </div>
              <div>
                <span>Authorized By</span>
                <p>YGR gobal it services</p>
              </div>
            </div>

          </div>
        </div> */}

        <img src={bg} alt="certificate"  className="imagecertificate"/>

        {/* RIGHT SIDE – ABOUT CERTIFICATE */}
        <div className="col-md-5">
          <div className="certificate-info shadow-sm">

            <h4>About this Certificate</h4>
            <p>
              This certificate confirms that the learner has successfully
              completed the course and demonstrated practical understanding
              of the subject.
            </p>

            <ul className="cert-points">
              <li>✔ Industry-recognized learning</li>
              <li>✔ Skill-based course completion</li>
              <li>✔ Verified by UpgradeU administrators</li>
              <li>✔ Shareable on LinkedIn & Resume</li>
            </ul>

            <div className="verify-box">
              <p><strong>Certificate ID:</strong> UpgradeU-JAVA-2025-001</p>
              <p><strong>Status:</strong> Verified</p>
            </div>

            <div className="cert-actions">
              <button className="btn btn-danger w-100 mb-2">
                Download Certificate
              </button>
              <button className="btn btn-danger outline-secondary w-100">
                Share Certificate
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Certificates