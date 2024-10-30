import React from 'react';
import '../styles/Documents.css';

const documents = [
  {
    title: "Topic Assessment",
    date: "2024/02/10",
    group: "Group",
    icon: "fas fa-file-pdf pdf-icon",
    link: "https://drive.google.com/file/d/1mUWxCkb683yxjPv6bA0fGqSpZzFp0DeQ/view?usp=sharing"
  },
  {
    title: "Project Charter",
    date: "2024/02/18",
    group: "Group",
    icon: "fas fa-file-pdf pdf-icon",
    link: "https://drive.google.com/file/d/1b_nXwR-WvuJ54Ppzh4LsKe5GS-9ZMfkU/view?usp=sharing"
  },
  {
    title: "Project Proposal",
    date: "2024/03/28",
    group: "Group",
    icon: "fas fa-folder-open folder-icon",
    link: "https://drive.google.com/drive/folders/1usV92ie58SzJAV1GkqSz8YMr0rFVXOlO?usp=sharing"
  },
  {
    title: "Status Documents I",
    date: "2024/05/06",
    group: "Individual",
    icon: "fas fa-folder-open folder-icon",
    link: "https://drive.google.com/drive/folders/1r2dTDVZFNzY9G4WWLCklUu6Y0MONPMgD?usp=sharing"
  },
  {
    title: "Status Documents II",
    date: "2024/09/11",
    group: "Individual",
    icon: "fas fa-folder-open folder-icon",
    link: "https://drive.google.com/drive/folders/1mZgfXtg0C1jvPy_jzIC-t9c6LeKafecY?usp=sharing"
  },
  {
    title: "Final Report",
    date: "Yet to be submitted, link will be updated soon.",
    group: "Group & Individual",
    icon: "fas fa-hourglass-half pending-icon",
    link: "#"
  },
  {
    title: "Poster",
    date: "Yet to be submitted, link will be updated soon.",
    group: "Group",
    icon: "fas fa-hourglass-half pending-icon",
    link: "#"
  }
];

const Documents = () => {
  return (
    <section id="document" className="documents-section container">
      <h2>DOCUMENTS</h2><br />

      <div className="row">
        {documents.map((doc, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 document-card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className={doc.icon}></i> {doc.title}
                </h5>
                <p className="card-text">
                  <span className="text-muted">Submitted on</span> {doc.date}
                </p>
              </div>
              <div className="card-footer">
                <span className="group-name">{doc.group}</span><br />
                <a
                  href={doc.link !== "#" ? doc.link : undefined}
                  className={`text-primary ${doc.link === "#" ? "disabled" : ""}`}
                  target={doc.link !== "#" ? "_blank" : undefined}
                  rel={doc.link !== "#" ? "noopener noreferrer" : undefined}
                  aria-disabled={doc.link === "#"}
                >
                  {doc.link === "#" ? "Not Available" : "Download"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documents;
