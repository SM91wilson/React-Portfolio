import React from 'react';
import './style.css';

class Skills extends React.Component{
    render(){
        return(
            <div className='col-12 skillDiv mx-auto'>
                <h4>Technical Skills</h4>
                <p>
                    My main area is backend development using Node JS, Express and My SQL.
                </p>
                <div className='row'>
                <ul className='col-6'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                </ul>
                <ul className='col-6'>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>NodeJS</li>
                </ul>
                </div>
                <div className='row'>

                </div>
            </div>
        )
    }
}
export default Skills;