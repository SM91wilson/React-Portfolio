import React from "react";
import "./style.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="container">
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
            <h4>BetEase</h4>
            <p>
              BetEase is an app designed for keeping track off current status of
              matches and their odds for both teams.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-6 projText">
            <br></br>
            <h4>BetEase</h4>
            <p>
              BetEase is an app designed for keeping track off current status of
              matches and their odds for both teams.
            </p>
          </div>
          <div className="col-4">
            <img
              className="projImg"
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
            <h4>BetEase</h4>
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
