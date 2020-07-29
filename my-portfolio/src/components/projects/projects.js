import React from "react";
import "./style.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-4">
            <img
              className="projImg"
              src={require("./images/favicon.png")}
              alt="BetEase logo"
            />
          </div>
          <br></br>
          <div className="col-6 projText">
            <br></br>
            <h4>BetEase</h4>
            <p>
              BetEase is an app designed for keeping track off current status of
              matches and their odds for both teams.
            </p>
          </div>
        </div>
        <br></br>
        <div className="row">
            <div className="col-6 projText2">
            <br></br>
            <h4>Murder Squad</h4>
            <p>
                Murder Squad is designed to replicate the feel of a murder mystery dinner party. Choose a character and follow their clues to determine the killer!
            </p>
          </div>
          <div className="col-4">
            <img
              className="projImg2"
              src={require("./images/favicon.png")}
              alt="BetEase logo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              className="projImg"
              src={require("./images/favicon.png")}
              alt="BetEase logo"
            />
          </div>
          <div className="col-6 projText">
            <br></br>
            <h4>PawWalk</h4>
            <p>
              BetEase is an app designed for keeping track off current status of
              matches and their odds for both teams.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
