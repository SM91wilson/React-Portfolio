import React from "react";
import "./App.css";
import Nav from "../src/components/navbar/navbar";
import Picture from "../src/components/pictureCard/picture";
import Blurb from "../src/components/profileBlurb/blurb";
import Skills from "../src/components/skills/skills";
import Projects from "../src/components/projects/projects";


function App() {
  return (
    <div>
      <Nav />
      <div className='container'>
        <div className='row'>
          <Picture />
          <Blurb />
        </div>
        <div className='row mx-20'>
          <Skills />
        </div>
        <div className='row'>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
