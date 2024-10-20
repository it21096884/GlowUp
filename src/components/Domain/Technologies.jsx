import React from 'react';
import '../../styles/Technologies.css';

const technologiesRow1 = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tensorflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "VSCode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }
];

const technologiesRow2  = [
  { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Anaconda", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" }
];

const Technologies = () => {
  return (
    <section id="technologies" className="technologies-section">
      <h2 className="text-center">TECHNOLOGIES USED</h2>
      <div className="tech-grid">
        {[...technologiesRow1, ...technologiesRow2].map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
