import React from "react";
import "../src/css/body.css";
import fastitm from "../src/videos/fastitm.mp4";
import fastContact from "../src/videos/fastContact.mov";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        <h3>Project One</h3>
        <p className="project-title"> Crypto Currency Exchange Platform.</p>
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
        <p className="project-tech">
          <br />
          User Authentication. <br /> Stores user data in Firebase.
          <br />
          Rest API.
          <br />
          Chart JS.
          <br />
          Responsive UI/UX.
        </p>
        <hr />

        <a target="blank" href="inthemoney.netlify.app">
          <button>View Here</button>
        </a>
      </div>
      <div className="projects">
        <h3>Project Two</h3>
        <p className="project-title"> Project two</p>
        <p>Hover to Play</p>
        <div className="video-container">
          <video
            id="video"
            onMouseEnter={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            {" "}
            <source src={fastContact} type="video/mp4" />
            Hover to play
          </video>
        </div>

        <p>
          Simple Contact API form.
          <br />
          GET POST PUT DELETE.
          <br />
          Responsive UI/UX.
        </p>

        <hr />
        <button>View Here</button>
      </div>
    </div>
  );
};

export default Projects;
