import React from "react";
import "../src/css/body.css";
import fastitm from "../src/videos/fastitm.mp4";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        <h3>Project One</h3>
        <p>Hover to Play</p>
        <div className="video-container">
          <video
            id="video"
            onMouseEnter={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            {" "}
            <source src={fastitm} type="video/mp4" />
            Hover to play
          </video>
        </div>
        <p>
          Crypto Currency Exchange Platform. user Authentication, stores user
          data in Firebase.
        </p>
        <hr />
        <button>View Here</button>
      </div>
      <div className="projects">
        <h3>Project Two</h3>
        <p>Hover to Play</p>
        <div className="video-container">
          <video
            id="video"
            onMouseEnter={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            {" "}
            <source src={fastitm} type="video/mp4" />
            Hover to play
          </video>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <hr />
        <button>View Here</button>
      </div>
    </div>
  );
};

export default Projects;
