import React, { useState } from "react";
import "../styles/contactus.css";

const ContactUs = () => {

  return (
    <section id="contactus" className="contactus-section">
      <div className="container">
        <h2 className="form-title">CONTACT US</h2>
          <div className="contact-details">
            <p>
              For further queries, please reach us at <br/>
              <a className="email-cont" href="mailto:glowupinfo360@gmail.com">glowupinfo360@gmail.com</a>
              <br />
              Hope this project helped you in some manner. Thank you!
              <br />- Team GlowUp -
            </p>
          </div>
        </div>
      
    </section>
  );
};

export default ContactUs;
