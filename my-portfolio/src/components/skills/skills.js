import React from 'react';
import './style.css';

class Skills extends React.Component{
    render(){
        return(
            <div className='col-8 skillDiv mx-auto'>
                <h4>Technical Skills</h4>
                <p>
                    My main area is backend development using Node JS, Express and My SQL.
                </p>
                <div className='row'>
                <ul className='col-4 justify-content-center mx-auto'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                </ul>
                <ul className='col-4 justify-content-center mx-auto'>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>NodeJS</li>
                </ul>
                </div>
                <div className='row'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' alt='nodejs logo'/>
                    <img className='img13' src='https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png' alt='html logo'/>
                    <img className='img2' src='https://www.logolynx.com/images/logolynx/7e/7eed17a45f24e41077eb7cad1d031492.png' alt='css logo'/>
                    <img className='img13' src='https://i0.wp.com/sidneyandfriends.com/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1' alt='js logo'/>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png' alt='mysql logo'/>
                </div>
            </div>
        )
    }
}
export default Skills;