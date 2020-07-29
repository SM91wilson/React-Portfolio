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
            <a href='https://github.com/rf-spuds/project1'>Github Link</a>
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
            <a href='https://github.com/SM91wilson/project2'>Github Link</a>
            <br></br>
            <a href='https://future-group-project2.herokuapp.com/'>Live Link</a>
          </div>
          <div className="col-4">
            <img
              className="projImg2"
              src={require("./images/IMG_1298.JPG")}
              alt="murder squad splash"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              className="projImg"
              src='https://image.flaticon.com/icons/png/512/21/21645.png'
              alt="Paw print"
            />
          </div>
          <div className="col-6 projText">
            <br></br>
            <h4>PawWalk</h4>
            <p>
              PawWalk lets a user create a social profile for their dogs and allows the planning of routes for walking giving the estimated time to travel and total distance of the planned walk.
            </p>
            <a href='https://github.com/ahauser16/Project3'>Github Link</a>
            <br></br>
            <a href='https://git.heroku.com/project3-wherewoof.git'>Live Link</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
