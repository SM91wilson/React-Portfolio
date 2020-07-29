import React from 'react';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <div className='col-4'>
                    <img src={require('./images/favicon.png')} alt='BetEase logo'/>
                </div>
                <div className='col-6'>
                    <h4>BetEase</h4>
                    <p>*betEase description</p>
                </div>
            </div>
        )
    }
}

export default Projects;