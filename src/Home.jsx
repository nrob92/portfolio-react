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
      </ul>

      <div
        className="main-body"
        style={{ transform: `translatex(-${offsetY * 3}px)` }}
      >
        <div className="main-bio">
          <div className="main-bio-text">
            <h2 className="animate__animated animate__bounceInDown">
              Hi, <br /> Im Nick Robinson
            </h2>
            <p className="animate__animated animate__bounceInDown">
              Full Stack Web-Developer.
            </p>
            <div className="animate__animated animate__bounceInDown">
              <button className="animate__animated">Contact Me</button>
            </div>
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
