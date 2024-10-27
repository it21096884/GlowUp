import React from 'react';
import '../../styles//Methodology.css';
import architectureImage from '../../logos/high_level_diagram.jpeg'; 

const Methodology = () => {
  return (
    <section id="methodology" className="methodology-section">
      <h2>METHODOLOGY</h2><br/>
      <div className="methodology-content">
        <div className="methodology-image">
          <img src={architectureImage} alt="Architecture Diagram" />
          <p className="figure-caption">Figure 2. High Level Architecture of the system.</p>
        </div>
        <div className="methodology-text">
          
          <p className='list-comp'>
          <p className='main-pp'>The proposed Glow Up system consists of 4 main components. They are:</p>
          <div className='cont-div'><p className='cont'>1. Smart Rating System for Customer Feedback<br/></p>
            <p className='cont'>2. Customer Preference Prediction System<br/></p>
            <p className='cont'>3. Hair Type Detection System<br/></p>
            <p className='cont'>4. Face Damage Detection Systemk<br/></p>
            </div>
            
          </p>
          <p className='para-comp'>Fig 4 illustrates the overall system diagram of the proposed solution, designed to enhance customer experience in the beauty industry through advanced sentiment analysis and customer preference prediction. As depicted in the diagram, registered users can provide feedback or upload images related to their salon experiences. This data is sent to the backend server, where a FastAPI framework is deployed. The system utilizes a sequential neural network for sentiment classification based on text feedback and emojis, while a custom Convolutional Neural Network (CNN) analyzes the demographic and visual elements of salons to predict customer preferences. For hair type classification, uploaded images are processed using a pre-trained Mask R-CNN model for segmentation, followed by a Vision Transformer (ViT) model for accurate hair type classification. Once the system identifies customer preferences and sentiments, it generates personalized recommendations, which are then relayed to users in real-time through the "GlowUp" mobile application. Additionally, a system diagram provides a comprehensive view of the workflow, illustrating how data flows from collection and processing to model integration and user interaction, ultimately aiming to improve service delivery and enhance customer satisfaction in salons.</p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
