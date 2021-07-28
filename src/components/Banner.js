import React from 'react';
import logo from '../assets/2c2image2.png'
import '../styles/Banner.css'
function Banner(){
    const text = "Jungle-House";
    return(
        <div className="jh-banner">
            <img src={logo} alt="Jungle-Logo" className="jh-logo"></img>
            <h3 className="jh-title">{text}</h3>
        </div>
    );
} 
export default Banner