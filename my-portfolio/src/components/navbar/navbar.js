import React from "react";
import './style.css'

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
          <h1 className='navHead'>Simon Wilson</h1>
        <div className='col-12 btn-group' role='group'>
            <button className='col-4 btn btn-outline-primary btn-block float-right'>Home</button>
            <button className='col-4 btn btn-outline-primary btn-block float-right'>Project</button>
            <button className='col-4 btn btn-outline-primary btn-block float-right'>Contact</button>
        </div>
      </div>
    );
  }
}

export default Nav;