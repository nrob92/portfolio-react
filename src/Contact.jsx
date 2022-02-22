import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/css/home.css";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <div>
        <nav className="navbar">
          <ul className="nav-links">
            <Link to={"/"}>home</Link>
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
          <Link to={"/"}>Home</Link>
          <a href="#resume">Resume</a>
        </ul>
      </div>
      <div className="contact-container">
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
      </div>
    </div>
  );
};

export default Contact;
