import React from "react";
import "../styles/Milestones.css";

const milestones = [
  {
    date: "March 2024",
    title: "Project Proposal",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marks: 6,
    progress: 6,
  },
  {
    date: "June 2024",
    title: "Progress Presentation I",
    description:
      "Progress Presentation I reviews the 50% completion status of the project, revealing any gaps or inconsistencies in the design.",
    marks: 6,
    progress: 6,
  },
  {
    date: "July 2024",
    title: "Research Paper",
    description:
      "Describes what you contribute to existing knowledge, giving recognition to all work that you referred in making new knowledge.",
    marks: 10,
    progress: 10,
  },
  {
    date: "September 2024",
    title: "Progress Presentation II",
    description:
      "Progress Presentation II reviews the 90% completion status, along with a Poster presentation that describes the project.",
    marks: 18,
    progress: 18,
  },
  {
    date: "October 2024",
    title: "Website Assessment",
    description:
      "The Website helps to promote our research project and reveals all details related to the project.",
    marks: 2,
    progress: 2,
  },
  {
    date: "November 2024",
    title: "Logbook",
    description:
      "Status of the project is validated through the Logbook. This also includes Status documents 1 & 2.",
    marks: 3,
    progress: 3,
  },
  {
    date: "November 2024",
    title: "Final Report",
    description:
      "Final Report evaluates the completed project done throughout the year. Marks mentioned below include marks for Individual & group reports and also Final report.",
    marks: 19,
    progress: 19,
  },
  {
    date: "October 2024",
    title: "Final Presentation & Viva",
    description:
      "Viva is held individually to assess each member's contribution to the project.",
    marks: 20,
    progress: 20,
  },
];

const Milestones = () => {
  return (
    
    <section id="milestones" className="milestones-section container">
       
      <h4 className="text-center mb-5">
       
        <span className="milestone-title d-block"><h2>MILESTONES</h2></span>
        <h6 className="timeline-tit">Timeline in Brief</h6>
      </h4><br/>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div className="timeline-item mb-5" key={index}>
            <div className="timeline-marker"></div>
            <div className="timeline-content card p-4 shadow-sm">
              <span className="date">{milestone.date}</span>
              <h5>{milestone.title}</h5>
              <p>{milestone.description}</p>
              <p>
                <strong>Marks Allocated: </strong>
                {milestone.marks}
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${milestone.progress}%` }}
                >
                  {milestone.progress}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
