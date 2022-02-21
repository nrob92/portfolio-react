import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import About from "./About";
import "../src/css/body.css";
import Footer from "./Footer";

const Body = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [aboutMe, setAboutMe] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollEffect = () => {
    if (window.scrollY >= 200) {
      setAboutMe(true);
      if (window.scrollY >= 600) {
        setProjects(true);
      }
      if (window.scrollY >= 1500) {
        setContact(true);
      }
    } else {
      setAboutMe(false);
      setProjects(false);
      setContact(false);
    }
  };

  window.addEventListener("scroll", scrollEffect);

  return (
    <div id="about" className="section-body">
      <div className={aboutMe ? "animate__animated animate__fadeIn" : "hidden"}>
        <About />
      </div>
      <hr />

      <h2 className="projects-h2" id="projects">
        Projects
      </h2>
      <div
        className={
          projects
            ? "animate__animated animate__fadeIn projects-container"
            : "hidden"
        }
      >
        <Projects />
        <Projects />
        <Projects />
      </div>
      <div className={contact ? "animate__animated animate__fadeIn" : "hidden"}>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
