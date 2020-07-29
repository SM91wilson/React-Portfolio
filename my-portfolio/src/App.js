import React from "react";
import "./App.css";
import Nav from "../src/components/navbar/navbar";
import Picture from "../src/components/pictureCard/picture";
import Blurb from "../src/components/profileBlurb/blurb";
import Skills from "../src/components/skills/skills";
import Projects from "../src/components/projects/projects";
import Contact from "../src/components/contact/contact";


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
        <div className='row mt-20 projDiv'>
          <Projects />
        </div>
        <div className='row mt-20 contactDiv'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
