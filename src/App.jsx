import React from "react";

// import Navbar from './components/Navbar';
import Home from "./components/Home";
import "./App.css";
import Milestones from "./components/Milestones";
import Document from "./components/Document";
import AboutUs from "./components/AboutUs";
import Presentations from "./components/Presentations";
import LiteratureSurvey from "./components/Domain/LiteratureSurvey";
import ResearchGap from "./components/Domain/ResearchGap";
import ResearchProblem from "./components/Domain/ResearchProblem";
import ResearchObjectives from "./components/Domain/ResearchObjectives";
import Methodology from "./components/Domain/Methodology";
import Technologies from "./components/Domain/Technologies";
import ContactUs from "./components/contactUs";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <br/>
      <LiteratureSurvey/>
      <br/>
      <ResearchGap />
      <br/>
      <ResearchProblem />
      <br/>
      <ResearchObjectives/>
      <br/>
      <Methodology />
      <br/>
      <Technologies />
      <br/>
      <Milestones />
      <br/>
      <Document />
      <br/>
      <Presentations />
      <br/>
      <AboutUs />
      <br/>
      <ContactUs />
    </div>
  );
}

export default App;
