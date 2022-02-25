import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import portfolio from "../src/img/portfolio.pdf";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [phone, setPhone] = useState(false);
  return (
    <div className="contact-container-whole">
      <div>
        <nav className="navbar">
          <ul className="nav-links">
            <Link to={"/"}>Home</Link>
            <a href={portfolio} className="resume">
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
          <Link to={"/"}>Home</Link>
          <a href={portfolio}>Resume</a>
        </ul>
      </div>

      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="contact-form">
          <form action="https://formsubmit.co/nrob42@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />{" "}
            <textarea
              className="text-area"
              type="text"
              name="message"
              placeholder="Write your message here"
              required
            />
            <button type="submit" value="Submit">
              Send
            </button>
          </form>
        </div>
        <div className="contact-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nrob92?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nicholas-robinson-86608a231/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/nicholasrobinson_/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <div onClick={() => setPhone(!phone)}>
            {phone ? (
              <p>(561)-414-1265</p>
            ) : (
              <FontAwesomeIcon className="phone-icon" icon={faPhoneSquare} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
