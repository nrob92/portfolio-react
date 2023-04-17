import React from "react";
import "../src/css/body.css";
import fastitm from "../src/videos/fastitm.mp4";
import posterItm from "../src/img/posterItm.png";
import weatherApp from "../src/videos/weather-app.mov";
import posterWeather from "../src/img/posterWeather.png";
import seedOilApp from "./img/seedOilApp.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        <h3>Project One</h3>
        <p className="project-title">Seed Oil Application</p>
      
        <p>Find Restaurants near you that use healthy oils</p>

        <div className="video-container">
          <img className="seedoilapp" src={seedOilApp} alt="" srcset="" />
        </div>

        <p>
          <br />
          CRUD Application
          <br />
          MERN Stack
          <br />
          Geolocation
          <br />
          JWT
          <br />
          Responsive UI/UX
        </p>
        <hr />
        <a
        style={{marginRight:5}}
          target="_blank"
          rel="noreferrer"
          href="https://seed-oil-app.herokuapp.com/"
        >
          <button>View Website</button>
        </a>
        <a
         style={{marginLeft:5}}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nrob92/SeedOilApplication"
        >
          <button>View Code</button>
        </a>
      </div>
      <div className="projects">
        <h3>Project Two</h3>
        <p className="project-title"> Crypto Currency Exchange Platform</p>
        <p>Hover to Play</p>
        <div className="video-container">
          <video
            id="video"
            poster={posterItm}
            onMouseEnter={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
            controls="true"
          >
            {" "}
            <source src={fastitm} type="video/mp4" />
            Hover to play
          </video>
        </div>
        <p className="project-tech">
          <br />
          User Authentication <br /> Stores user data in Firebase
          <br />
          Rest API
          <br />
          Chart JS
          <br />
          Responsive UI/UX
        </p>
        <hr />

        <a
          target="_blank"
          rel="noreferrer"
          href="https://inthemoney.netlify.app"
        >
          <button>View Here</button>
        </a>
      </div>
      <div className="projects">
        <h3>Project Three</h3>
        <p className="project-title"> Weater App</p>
        <p>Hover to Play</p>
        <div className="video-container">
          <video
            id="video"
            poster={posterWeather}
            onMouseEnter={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
            controls="true"
          >
            {" "}
            <source src={weatherApp} type="video/mp4" />
            Hover to play
          </video>
        </div>

        <p>
          <br />
          <br />
          Weather API App
          <br />
          Rest API
          <br />
          Uses Your Location
          <br />
          Responsive UI/UX
        </p>

        <hr />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://weather-api-app-92.netlify.app/"
        >
          <button>View Here</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
