import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "../src/css/home.css";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);
  /* slides home page to left */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* looping through <a> to scroll from nav to section */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });

  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-links">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume" className="resume">
            Resume
          </a>
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
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
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
            <button className="animate__animated animate__bounceInDown">
              Contact Me
            </button>
          </div>
          <div className="icons">
            <div className="animate__animated animate__backInRight">
              <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
            </div>
            <div className="animate__animated animate__backInRight">
              <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
            </div>
            <div className="animate__animated animate__backInRight">
              <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
            </div>
            <div className="animate__animated animate__backInRight">
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;