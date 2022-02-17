import React, { useState, useEffect } from "react";
import "../src/css/body.css";

const Body = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [sideScroll, setSideScroll] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollEffect = () => {
    if (window.scrollY >= 400) {
      setSideScroll(true);
    } else {
      setSideScroll(false);
    }
  };

  window.addEventListener("scroll", scrollEffect);

  return (
    <div>
      <div className="section-body">
        <div
          className={
            sideScroll ? "about-me-container active" : "about-me-container"
          }
        >
          <div className="about-me">
            <h2>About Me</h2>
            <p>
              Hello My name is Nick Robinson. I am a Full Stack Software
              Developer with a passion for coding.
            </p>
          </div>
          <div className="img-container">
            <div className="aboutme-img"></div>
          </div>
        </div>
        <hr />
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="projects">
            <h3>Project one</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              laudantium ducimus nobis ipsa modi maxime itaque adipisci
              delectus, magni doloremque!
            </p>
            <hr />
            <button>View Here</button>
          </div>
          <div className="projects">
            <h3>Project one</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              laudantium ducimus nobis ipsa modi maxime itaque adipisci
              delectus, magni doloremque!
            </p>
            <hr />
            <button>View Here</button>
          </div>
          <div className="projects">
            <h3>Project one</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              laudantium ducimus nobis ipsa modi maxime itaque adipisci
              delectus, magni doloremque!
            </p>
            <hr />
            <button>View Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
