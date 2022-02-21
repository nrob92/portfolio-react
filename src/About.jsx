import React from "react";
import "../src/css/body.css";

const About = () => {
  return (
    <div className="about-me-container">
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hello My name is Nick Robinson. I am a Full Stack Software Developer
          with a passion for coding.
        </p>
      </div>
      <div className="img-container">
        <div className="aboutme-img"></div>
      </div>
    </div>
  );
};

export default About;
