import React from "react";
import "../styles/AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import img1_sup from "../assests/supervisors/img_sup1.jpeg";
import img1_sup2 from "../assests/supervisors/img_sup2.jpg";
import img1_sup3 from "../assests/supervisors/external.jpeg";
import image1 from "../assests/groupmembers/img1.jpeg";
import image2 from "../assests/groupmembers/img2.jpeg";
import image3 from "../assests/groupmembers/img3.jpeg";
import image4 from "../assests/groupmembers/img4.jpeg";

const AboutUs = () => {
  // Supervisor details
  const supervisors = [
    {
      name: "Mr. Samadhi Rathnayake",
      role: "Supervisor",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Information Technology - Computing (FOC)",
      photo: img1_sup,
      email: "samadhi.r@sliit.lk",
    },
    {
      name: "Mr. Thusithanjana Thilakarthna",
      role: "Co-Supervisor",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Computer Science and Software Engineering - Computing (FOC)",
      photo: img1_sup2,
      email: "thusithanjana.t@sliit.lk",
    },
    {
      name: "Ms. Ineshika Illangakoon",
      role: "External-Supervisor",
      institution: "Vocational Training Authority of Sri Lanka",
      department: "Vocational Training Authority of Sri Lanka",
      photo: img1_sup3,
      email: "ineshika2321@gmail.com",
    },
  ];

  // Group member details
  const groupMembers = [
    {
      name: "Kiriella K.G.A.K",
      role: "Group Leader",
      education: "Undergraduate",
      department: "Data Science",
      photo: image1,
      email: "anjalikiriella@gmail.com",
      linkedin: "https://linkedin.com/in/anjali-kiriella-433ab0250",
    },
    {
      name: "Hewage R.P",
      role: "Group Member",
      education: "Undergraduate",
      department: "Data Science",
      photo: image2,
      email: "randikahewage2@gmail.com",
      linkedin: "https://linkedin.com/in/randika-hewage-a9b81b271",
    },
    {
      name: "Abeyrathne A.P.T.G.H.N",
      role: "Group Member",
      education: "Undergraduate",
      department: "Software Engineering",
      photo: image3,
      email: "nindukiabeyrathne@gmail.com",
      linkedin: "https://linkedin.com/in/ninduki-abeyrathne-8b7761255",
    },
    {
      name: "Senevrathna N.O",
      role: "Group Member",
      education: "Undergraduate",
      department: "Software Engineering",
      photo: image4,
      email: "oshi224509@gmail.com",
      linkedin: "https://linkedin.com/in/oshadi-senevirathna-91b182244",
    },
  ];

  return (
    <section id="aboutus" className="aboutus-section container">
      <div className="about-us-container">
        <h2 className="page-title">ABOUT US</h2>

        {/* Supervisors Section */}
        <div className="supervisors-section">
          <h4>Supervisors</h4><br/>
          <div className="members-grid">
            {supervisors.map((supervisor, index) => (
              <div key={index} className="member-card">
                <img
                  src={supervisor.photo}
                  alt={supervisor.name}
                  className="member-photo"
                />
                <h2>{supervisor.name}</h2>
                <p className="role">{supervisor.role}</p>
                <p className="supervosor-bar">{supervisor.institution}</p>
                <h4>Department</h4>
                {supervisor.department && <p className="dep">{supervisor.department}</p>}
                <div className="contact-links">
                  {supervisor.email && (
                    <a
                      href={`mailto:${supervisor.email}`}
                      className="email-link">
                      E-Mail
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
<br/><br/>
        {/* Group Members Section */}
        <div className="group-members-section">
          <h4>Group Members</h4><br/>
          <div className="members-grid">
            {groupMembers.map((member, index) => (
              <div key={index} className="member-card">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="member-photo"
                />
                <h2>{member.name}</h2>
                <p className="role">{member.role}</p>
                {member.education && <p className="ed-mem">{member.education}</p>}
                <div className="contact-links">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="email-link">
                      E-Mail
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link">
                      <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
