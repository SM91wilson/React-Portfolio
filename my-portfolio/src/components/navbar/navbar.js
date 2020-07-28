import React from "react";
import './style.css'

class Nav extends React.Component {
  render() {
    return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <a className="navbar-brand" href="#">Simon Wilson</a>
      <a className='nav-item nav-link float-right' href='#'>Home</a>
      <a className='nav-item nav-link float-right' href='#'>Projects</a>
      <a className='nav-item nav-link float-right' href='#'>Contact</a>
    </nav>
    );
  }
}

export default Nav;