import React from 'react';
import "../../styles/ResearchGap.css"; // Ensure the CSS file is in place

const ResearchGap = () => {
  return (
    <section id="research-gap" className="research-gap-section">
      <h2>RESEARCH GAP</h2><br/>
      <div className="gap-container">
        <div className="gap-card">
          <div className="gap-icon">🔍</div>
          <h3>Identification & Classification</h3>
          <p>
            Current sentiment analysis models primarily focus on textual data, often neglecting the significance of emojis in digital communication. While some efforts incorporate emojis, existing models struggle with contextual usage, leading to inaccurate sentiment interpretation, especially in customer feedback within the beauty industry.
          </p>
        </div>

        <div className="gap-card">
          <div className="gap-icon">📉</div>
          <h3>Severity Assessment</h3>
          <p>
            Although progress has been made in automated skin condition detection, the integration of spatial attention mechanisms in dermatology is underexplored. Many models cannot accurately detect and assess the severity of localized facial damages, such as acne and pimples, critical for effective treatment recommendations.
          </p>
        </div>

        <div className="gap-card">
          <div className="gap-icon">🧴</div>
          <h3>Personalized Treatment Recommendations</h3>
          <p>
            Existing systems for skin condition detection lack personalized treatment plans based on facial damage extent. Without calculating the percentage of affected areas, these systems cannot provide tailored recommendations aligned with individual patient needs.
          </p>
        </div>

        <div className="gap-card">
          <div className="gap-icon">💡</div>
          <h3>Comparative Model Analysis</h3>
          <p>
            Most studies rely on single classification models without conducting comprehensive comparisons between classifiers. This research aims to evaluate hybrid models like XGBoost and SVM, exploring their strengths and weaknesses in classifying facial damages and improving dermatology treatment strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchGap;
