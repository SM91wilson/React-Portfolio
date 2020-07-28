import React from "react";
import './style.css'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
            <h1 className='navHead'>Simon Wilson</h1>
            <li className='navList'>Home</li>
            <li className='navList'>Projects</li>
            <li className='navList'>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Nav;