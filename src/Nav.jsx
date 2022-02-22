import React, { useState } from "react";

import "../src/css/home.css";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">contact</a>
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
    </div>
  );
};

export default Nav;
