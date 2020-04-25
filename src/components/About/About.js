import React from 'react';

import './About.css'

const About = () => (
    <div className="aboutMe" id="about">
        <div className="aboutContainer">

        <div className="sectionHeader"> ABOUT ME</div>
        <hr className="aboutHr"/>
        <div className="bio">
        <p>Hi! I’m Desiree, an aspiring Junior Web Developer with over 15 years of Hospitality and Customer Service experience. I have a Bachelor’s Degree from Monroe College in Hospitality Management, and a Certification from the University of Central Florida in Full Stack Web Development. </p>
        
        <p>I look at coding as a puzzle. I love the process of creating the logic behind apps and also figuring out a solution to all the problems that arise. I have learned a great deal about researching solutions, and the importance of networking when looking for help.  Currently, I'm looking to work for a company that encourages teamwork and growth. </p>

        <br/>
          <div >
            <p><em>My Skills include.. </em></p>

            <p>React, Node, Express, HTML, MySql, Javascript, CSS</p>
          </div>
          </div>
        </div>

    </div>
);

export default About;