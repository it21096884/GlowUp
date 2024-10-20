import React from 'react';
import '../styles/Presentations.css';

const presentations = [
  {
    title: "Project Proposal",
    date: "2024/03/14",
    group: "Group",
    link: "https://drive.google.com/file/d/1sraZ11YyDZqdczGo-NICaYLn540tn8lM/view?usp=sharing"
  },
  {
    title:"Progress Presentation I",
    date: "2024/07/08",
    group: "Group",
    link: "https://drive.google.com/file/d/1ZysycDoGlh6pHLJpI9-fy8Ull2cLZ0sh/view?usp=sharing"
  },
  {
    title: "Progress Presentation II",
    date: "2024/10/18",
    group: "Group",
    link: "https://drive.google.com/file/d/1qfNRX-AZ9WouXXcYo6PhRa5ksfHQRMjp/view?usp=sharing"
  },
  {
    title: "Final Presentation",
    date: "Yet to be submitted",
    group: "Group",
    link: "https://drive.google.com/drive/folders/12v0OWDDBddWvbwnaQuWLPSSuWuOgWBkb?usp=sharing"
  }
];

const Presentations = () => {
  return (
    <section id="presentation" className="presentations-section container">
      <h2>PRESENTATIONS</h2><br/>
      
      <div className="row">
        {presentations.map((pres, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 presentation-card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-file-powerpoint presentation-icon"></i> {pres.title}
                </h5>
                <p className="card-text">
                  <span className="text-muted">Submitted on</span> {pres.date}
                </p>
              </div>
              <div className="card-footer">
                <span className="group-name">{pres.group}</span>
                <a 
                  href={pres.link !== "#" ? pres.link : undefined} 
                  className={`text-primary ${pres.link === "#" ? "disabled" : ""}`} 
                  target={pres.link !== "#" ? "_blank" : undefined} 
                  rel={pres.link !== "#" ? "noopener noreferrer" : undefined}
                  aria-disabled={pres.link === "#"}
                >
                  {pres.link === "#" ? "Not Available" : "Download"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Presentations;
