import React from 'react';
import '../../styles/LiteratureSurvey.css';
import globeImage from '../../assests/cus.jpg'; // Replace with actual image path
import chartImage from '../../assests/saloon.jpg'; // Replace with actual image path

const LiteratureSurvey = () => {
  return (
    <section id="literature-survey" className="literature-survey-section">
     
      <h2>LITERATURE SURVEY</h2><br/>

      
<br/>
      <div className="survey-content">
        <div className="chart-container"><br/><br/>
        <div className="highlight-box">
        <div className="highlight-content">
        <img src={globeImage} alt="custormer experience" className="highlight-image" />
          <p>In recent years, customer expectations for personalized services have increased, pushing salons to adopt innovative technologies to remain competitive and meet evolving consumer demands [2].</p><br/><br/><br/><br/><br/><br/>
          </div>
          </div><br/><br/><br/><br/>
          <img src={chartImage} alt="Nuts Production Chart" className="chart-image" />
          <p className="chart-caption">Figure 1. Beauty Saloon Market size in 2024</p>
        </div>
        <div className="text-content">
          {/* <p>
          The integration of machine learning models in sentiment analysis has significantly improved the ability to interpret customer feedback, especially in the context of the beauty industry. Hochreiter and Schmidhuber (1997) pioneered the use of Long Short-Term Memory (LSTM) models, which are now widely adopted for processing sequential data. In recent studies, LSTMs have been utilized for analyzing customer feedback, incorporating emojis as key sentiment indicators, which provide deeper insights into customer emotions. The importance of emojis in digital communication is underscored by their ability to add layers of meaning that pure text cannot, leading to a more accurate understanding of customer satisfaction in salon services.
          </p>
          <p>
          In the beauty and salon industry, customer satisfaction and loyalty are influenced by various factors such as cleanliness, ambiance, and professional image, as identified through methodologies like Grey Relational Analysis (GRA). Research has shown that while higher customer satisfaction doesn't always translate into loyalty, certain aspects of the customer experience, such as salon design and service quality, have a profound effect on repeat patronage. Additionally, studies on demographic influences reveal that preferences vary by age and gender, emphasizing the need for personalized approaches in salon services to meet diverse customer needs. Machine learning models, particularly CNNs, have been employed to analyze visual data, helping salons design environments that align with customer expectations, thereby improving satisfaction and loyalty.
          </p>
          <p>
          Recent advancements in machine learning for medical image classification have also made their way into the beauty industry, particularly for diagnosing skin conditions like acne and dark spots. Convolutional Neural Networks (CNNs) have been highly effective in detecting facial deformities by learning complex features from image data. However, these models often require large datasets and struggle with smaller facial abnormalities. To enhance performance, spatial attention mechanisms have been integrated into CNN models, allowing them to focus on affected areas more precisely. In addition, XGBoost, known for its robustness in handling imbalanced datasets, has proven effective in classifying skin conditions. By combining CNN features with XGBoost, a hybrid approach improves the accuracy of facial diagnosis and enables more personalized treatment and makeup recommendations for salon customers.
          </p> */}
          <p className='para-lit'>
          The literature survey highlights advancements in machine learning and its integration into sentiment analysis, customer satisfaction studies, and beauty salon systems. Research by Hochreiter and Schmidhuber (1997) introduced Long Short-Term Memory (LSTM) models for sequential data processing, which have been adapted for analyzing customer feedback, incorporating emojis to capture deeper emotional context. In the beauty industry, CNNs have been widely employed to classify customer preferences based on visual data, while Vision Transformers (ViT) have shown promise in hair type classification due to their ability to capture fine-grained details. Studies emphasize customer satisfaction's non-linear relationship with loyalty, particularly in beauty salons, where factors such as cleanliness, ambiance, and demographic preferences play a crucial role. Advancements in CNNs and XGBoost for medical image classification have also been significant, particularly in the diagnosis of skin conditions like acne, where CNNs extract hierarchical features from images, and XGBoost efficiently classifies abnormalities, offering scalable, automated solutions for facial diagnosis and treatment recommendations.
          </p>

          
          <p className='referencess'>
          <h6>References</h6>
            1. Hochreiter, S., & Schmidhuber, J. (1997). Long Short-Term Memory. Neural Computation, 9(8), 1735-1780.

            <br/>2.A. Author, "Predictive Analytics in Business Processes: A Comprehensive Review," Journal of Business Optimization, vol. 20, no. 3, pp. 1-15, 2020Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., & Salakhutdinov, R. (2014). Dropout: A Simple Way to Prevent Neural Networks from Overfitting. Journal of Machine Learning Research, 15, 1929-1958.<br/>
            3. Liu, T., Yang, J., & Lee, B. (2016). Hair Detection and Segmentation using Edge Detection and Region-based Techniques. Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, 156-165.<br/>
            </p>
         
        </div>
      </div>

      
    </section>
  );
};

export default LiteratureSurvey;
