import React, { useState, useEffect } from "react";

import "../src/css/home.css";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import react from "./img/react.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
          <li className="resume">Resume</li>
        </ul>
      </nav>

      <button
        onClick={() => setIsMobile(!isMobile)}
        className="mobile-menu-icon"
      >
        <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      <ul
        onClick={() => setIsMobile(!isMobile)}
        className={isMobile ? "nav-links-mobile" : "nav-links-deactive"}
      >
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>

      <div
        className="main-body"
        style={{ transform: `translatex(-${offsetY * 2}px)` }}
      >
        <div className="main-bio">
          <div className="main-bio-text">
            <h3 className="animate__animated animate__bounceInDown">
              Hi, my name is
              <br />
            </h3>
            <h2 className="animate__animated animate__bounceInDown">
              Nick Robinson.
            </h2>
            <p className="animate__animated animate__bounceInDown">
              <div>
                <big>Full Stack Web-Developer.</big>
              </div>
              <br />
              <div className="home-bio">
                I'm a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered
                products at
              </div>
            </p>
            <button className="animate__bounceInDown">Contact Me</button>
          </div>
          <div className="icons">
            <img
              className="animate__animated animate__backInRight"
              src={html}
              alt=""
            />
            <img
              className="animate__animated animate__backInRight"
              src={css}
              alt=""
            />
            <img
              className="animate__animated animate__backInRight"
              src={js}
              alt=""
            />
            <img
              className="animate__animated animate__backInRight"
              src={react}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
