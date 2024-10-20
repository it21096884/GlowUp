import React from 'react';
import "../../styles/ResearchProblem.css";
import img from "../../assests/sol1.png"; 
import img2 from "../../assests/img2.png";

const ResearchProblemWithSolution = () => {
  return (
    <section id="research-problem" className="research-problem-section">
      <h2>RESEARCH PROBLEM & SOLUTION</h2><br/><br/>
      
      <div className="problem-solution-container">
        <div className="problem-description">
          <h3>Research Problem</h3><br/>
          <h4>How to Enhance Salon Operations Through Machine Learning and Real-Time Customer Insights ?</h4>
          <p className='problem-cont'>
          The salon industry encounters several critical challenges that impact service quality and customer satisfaction. Machine learning can effectively address these issues through various innovative approaches. For instance, optimizing salon processes using multi-model predictive analytics can enhance operational efficiency, reducing wait times and improving resource allocation. Additionally, developing a personalized treatment recommendation system enables salons to tailor services to individual client preferences, fostering customer loyalty. Understanding customer feedback through text and emoji analysis provides valuable insights into client satisfaction and staff performance, allowing for targeted improvements. Finally, integrating facial analysis with machine learning offers personalized makeup recommendations, ensuring clients receive the best products suited to their unique features. Early identification of these areas for improvement is essential for salons aiming to enhance service excellence and overall customer experience.
          </p>
        </div>

        

        <div className="solution-description">
          <h3 className='pros-tittle'>Proposed Solution</h3>
          <div className="solution-image">
            <img 
              src={img} 
              alt="Mobile App Preview"
              className="app-image"
            />
            <p style={{textAlign:"center"}}>Proposed Solution - Mobile App</p>
          </div>
          <p>
            Glow Up uses mobile application to address the pressing challenges faced by salons in delivering personalized and efficient services, we propose a comprehensive suite of machine learning solutions. Our Multi-Model Predictive Analytics system enhances operational efficiency by analyzing various data sources to optimize scheduling, resource allocation, and service delivery, ultimately reducing wait times and improving customer satisfaction. The Personalized Treatment Recommendation System utilizes client profiles and preferences to tailor services, ensuring that each customer receives treatments specifically suited to their needs, thereby fostering loyalty. To better understand customer sentiment, our approach includes analyzing reviews through Star Ratings that consider both textual feedback and emoji usage, providing deeper insights into client satisfaction and staff performance. Additionally, the integration of Facial Analysis allows for accurate, personalized makeup recommendations based on individual facial features, enhancing the customer experience. By implementing these advanced machine learning technologies, salons can not only improve their service offerings but also proactively address client needs, ensuring a more fulfilling experience for all.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default ResearchProblemWithSolution;
