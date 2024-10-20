import React, { useRef, useState,useEffect } from "react";
import "../styles/Home.css"; // Add CSS file for styling
import mlogo from "../assests/log.png";

const Home = () => {
  const divRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [dropdown, setDropdown] = useState({}); // To handle dropdown visibility
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false); 

  useEffect(() => {
    // Set the content to visible after a delay to create a fade-in effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
  
    // Get the bounding rectangle of the div container
    const rect = divRef.current.getBoundingClientRect();
  
    // Calculate the position of the cursor relative to the container
    const spotlightX = clientX - rect.left;
    const spotlightY = clientY - rect.top;
  
    setSpotlight({
      x: spotlightX,
      y: spotlightY,
    });
  };
  

  return (
    <div
      className={`home-container ${isLoaded ? "fade-in" : "fade-out"}`}
      ref={divRef}
      onMouseMove={handleMouseMove}>
         <div className="custom-cursor" style={{ top: `${spotlight.y}px`, left: `${spotlight.x}px` }}></div> 
      <br />
      <nav className="navbar">
      <div className="logo-container">
    <img src={mlogo} alt="Glow Up Logo" className="logo-image" />
    <div className="logo-text">Glow Up</div>
  </div>
        <ul className="nav-links">
          <li>
            <a href="/GlowUp/">Home</a>
          </li>

          {/* Domain Dropdown */}
          <li className="dropdown">
            <a className="dropdown-name" onClick={() => toggleDropdown("domain")}>
              Domain <span className="arrow">▼</span>
            </a>
            <ul
              className="dropdown-menu"
              style={{ display: dropdown.domain ? "block" : "none" }}>
              <li>
                <a href="#literature-survey">Literature survey</a>
              </li>
              <li>
                <a href="#research-gap">Research gap</a>
              </li>
              <li>
                <a href="#research-problem">Research Problem</a>
              </li>
              <li>
                <a href="#research-objectives">Research objectives</a>
              </li>
              <li>
                <a href="#methodology">Methodology</a>
              </li>
              <li>
                <a href="#technologies">Technologies</a>
              </li>
            </ul>
          </li>

          {/* Milestones Dropdown */}
          <li className="dropdown">
            <a href="#milestones" onClick={() => toggleDropdown("milestones")}>
              Milestones 
              {/* <span className="arrow">▼</span> */}
            </a>
            {/* <ul
              className="dropdown-menu"
              style={{ display: dropdown.milestones ? "block" : "none" }}>
              <li>
                <a href="#milestones">Project Proposal</a>
              </li>
              <li>
                <a href="#milestones">Progress Presentation-1</a>
              </li>
              <li>
                <a href="#milestones">Progress Presentation-2</a>
              </li>
              <li>
                <a href="#milestones">Final Presentation & Viva</a>
              </li>
            </ul> */}
          </li>

          {/* Documents Dropdown */}
          <li className="dropdown">
            <a className="dropdown-name" onClick={() => toggleDropdown("documents")}>
              Documents <span className="arrow">▼</span>
            </a>
            <ul
              className="dropdown-menu"
              style={{ display: dropdown.documents ? "block" : "none" }}>
              <li>
                <a href="#document">Project Charter</a>
              </li>
              <li>
                <a href="#document">Proposal Document</a>
              </li>
              <li>
                <a href="#document">Status documents</a>
              </li>
              <li>
                <a href="#document">Final Document</a>
              </li>
            </ul>
          </li>

          {/* Presentations Dropdown */}
          <li className="dropdown">
            <a className="dropdown-name" onClick={() => toggleDropdown("presentations")}>
              Presentations <span className="arrow">▼</span>
            </a>
            <ul
              className="dropdown-menu"
              style={{ display: dropdown.presentations ? "block" : "none" }}>
              <li>
                <a href="#presentation">Proposal presentation</a>
              </li>
              <li>
                <a href="#presentation">Progress presentation-1</a>
              </li>
              <li>
                <a href="#presentation">Progress Presentation-2</a>
              </li>
              <li>
                <a href="#presentation">Final presentation</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
        </ul>
      </nav>

      <header className="header-section">
        <div className="header-content">
          <h1 style={{ textAlign: "center", fontFamily: "inherit" }}>
            Glow Up <br /> Your Destination For <br />
            Face & Hair Care{" "}
          </h1>
          <br />
          <button
            className="learn-more-btn"
            onClick={() => (window.location.hash = "#literature-survey")}>
            Learn More
            <span className="arrow"> >> </span>
          </button>
        </div>
      </header>
    </div>
    
  );
};

export default Home;
