import React from 'react';
import logo from '../assets/2c2image2.png'
import '../styles/Banner.css'
import Recommendation from './Recommendation'
function Banner(){
    const text = "Jungle-House";
    return(
        <React.Fragment>
            <div className="lmj-banner">
                <div className="lmj-banner-row">
                    <img src={logo} alt="Jungle-Logo" className="jh-logo"></img>
                    <h2 className="jh-title">{text}</h2>
                </div>
                {<Recommendation/>}
            </div>
        </React.Fragment>
    );
} 
export default Banner