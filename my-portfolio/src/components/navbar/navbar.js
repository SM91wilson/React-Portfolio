import React from "react";
import './style.css'

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
          <h1 className='navHead'>Simon Wilson</h1>
        <ul>
            <li className='navList'>
                <button claaName='btn btn-primary'>Home</button>
            </li>
            <li className='navList'>
                <button claaName='btn btn-primary'>Project</button>
            </li>
            <li className='navList'>
                <button claaName='btn btn-primary'>Contact</button>
            </li>
        </ul>
      </div>
    );
  }
}

export default Nav;