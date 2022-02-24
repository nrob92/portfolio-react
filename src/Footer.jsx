import React from "react";
import { Link } from "react-router-dom";
import "../src/css/body.css";

const Footer = () => {
  return (
    <div>
      <div id="contact" className="footer-section">
        <h2>Get In Touch</h2>
        <p>
          Currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <Link to={"/contact"}>
          <button className="footer-btn">Say Hello</button>
        </Link>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nrob92?tab=repositories"
          className="footer-a"
        >
          Designed & Built by Nicholas Robinson
        </a>
      </div>
    </div>
  );
};

export default Footer;
