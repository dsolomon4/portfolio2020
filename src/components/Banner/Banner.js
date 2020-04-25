import React from 'react';

import './Banner.css'

import BackgroundImg from '../../images/opt.png'

const Banner = () => {

    const imageStyle = {
        backgroundImage: `url(${BackgroundImg})`,
      };
    
    return (
    <div className="bannerContainer" id="home" style={ imageStyle}>
        <div className="bannerSub">

        <div className="bannerName">
        <h2 className="name"> Desiree Solomon </h2>
        <h5> WEB DEVELOPER</h5>
        </div>

        </div>
    </div>
)
};

export default Banner;