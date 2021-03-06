import React from "react";
import "../src/css/body.css";

const About = () => {
  return (
    <div className="about-me-container">
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hello My name is Nick Robinson. I am a Full Stack Web Developer with a
          passion for coding.
          <br />
          <br /> A passionate Full Stack Web Developer having an experience of
          building Web and Mobile applications with JavaScript / React / NodeJS
          and other libraries and frameworks.
        </p>
        <br />
        <p>Here are some technologies I've been using lately:</p>
        <div className="technologies">
          <div className="technologies-1">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.Js</span>
            <span>MongoDB</span>
          </div>
          <div className="technologies-2">
            <span>Firebase</span>
            <span>Rest API</span>
            <span>GraphQL</span>
            <span>Express</span>
          </div>
        </div>
      </div>
      <div className="img-container">
        <div className="aboutme-img"></div>
      </div>
    </div>
  );
};

export default About;
