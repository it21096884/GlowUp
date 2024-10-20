import React from "react";
import styles from "../../styles/ResearchObjectives.module.css"; // Importing CSS Module

// Reusable Card Component
const ObjectiveCard = ({ title, description, alignRight }) => (
  <div className={`${styles.cardContainer} ${alignRight ? styles.right : styles.left}`}>
    <div className={styles.cardContent}>
      <div className={styles.starIcon}>
        <span>★</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
    <div className={styles.lineConnector}></div>
  </div>
);

const ResearchObjectives = () => {
  // Objectives Data
  const objectives = [
    {
      index: 0,
      title: "Smart Rating System",
      description:
        "Design and implement a system for assessing customer feedback using hybrid sentiment analysis, integrating text and emoji inputs for nuanced insights into salon services."
    },
    {
      index: 1,
      title: "Custom Convolutional Neural Network (CNN)",
      description:
        "Develop a custom CNN model that integrates demographic information and salon images, improving upon pretrained models for salon-specific applications."
    },
    {
      index: 2,
      title: "Automated Hair Type Detection",
      description:
        "Create an automated system to detect and classify hair types (curly, straight, braided) using Mask R-CNN and Vision Transformers (ViT), enhancing customer service in salons."
    },
    {
      index: 3,
      title: "Face Damage Detection System",
      description:
        "Develop a system for identifying face damages like acne and dark spots from images, recommending personalized treatments using CNNs, XGBoost, and SVM."
    }
  ];

  return (
    <section className={styles.section} id="research-objectives">
      <h2 className={styles.title}>RESEARCH OBJECTIVES</h2><br/>
      <div className={styles.objectivesContainer}>
        {objectives.map((objective, index) => (
          <ObjectiveCard
            key={index}
            title={objective.title}
            description={objective.description}
            alignRight={index < 2} // First two cards on the right, rest on the left
          />
        ))}
      </div>
    </section>
  );
};

export default ResearchObjectives;
