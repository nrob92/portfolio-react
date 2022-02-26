import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "../src/css/home.css";
import { Link } from "react-router-dom";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
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
      <div className="icons-absolute">
        <div className="animate__animated animate__backInLeft">
          <a target="_blank" href="https://github.com/nrob92">
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="animate__animated animate__backInLeft">
          <a
            target="_blank"
            href="https://www.instagram.com/nicholasrobinson_/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="animate__animated animate__backInLeft">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nicholas-robinson-86608a231/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div
        className="main-body"
        style={{ transform: `translatex(-${offsetY * 2}px)` }}
      >
        {" "}
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
                I'm a Full Stack Software Engineer specializing in building and
                designing exceptional digital experiences.
              </div>
            </p>
            <Link to={"/contact"}>
              <button className="animate__animated animate__bounceInDown">
                Contact Me
              </button>
            </Link>
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
