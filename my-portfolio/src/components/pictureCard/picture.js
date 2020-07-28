import React from 'react';
import './style.css';

class Picture extends React.Component{
    render(){
        return(
            <div className='col-6 d-inline'>
                <img className='profilePicture' src={require('./IMG-20200214-WA0007.jpg')} alt=""/>
            </div>
        )
    }
}

export default Picture;