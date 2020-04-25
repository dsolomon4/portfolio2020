import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './Portfolio.css'
import Bamazon from '../../images/bamazon.png'
import Trivia from '../../images/trivia.png'
import Crystal from '../../images/crystal.png'
import Chat from '../../images/chat.png'
import Friend from '../../images/friend.png'
import Patient from '../../images/patient.png'

library.add(fab)

const Portfolio = () => (

  <div className="portfolioContainer" id="portfolio">

    <div className="sectionHeader"> PORTFOLIO </div>
    <hr className="portHr"/>
    <h4> Here are some of my latest work. Click on the images to view app</h4>

        <div className="portfolioSub">
        <div>

          <div className="row">
        {/* Basic Chat */}
        <div className="portfolioPics" id="basicChat">
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://frosty-jang-049a55.netlify.com/" > <img src={Chat} alt="Basic Chat App" /> </a>
          <br/>
          <a target="_blank"  rel="noopener noreferrer" href="https://github.com/dsolomon4/basicChat"> <FontAwesomeIcon icon={[ "fab","github"]} /> Code </a>
        </div>
        {/* Crystal Game */}
        <div className="portfolioPics" id="crystal-game">

          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://dsolomon4.github.io/unit-4-game/" > <img src={Crystal} alt="Crystal Game" /> </a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dsolomon4/unit-4-game"> <FontAwesomeIcon icon={[ "fab","github"]} /> Code </a>
        </div>
        {/* Friend Finder */}
        <div className="portfolioPics" id="friend-finder">
         
          <br/>
          <a  target="_blank" rel="noopener noreferrer" href="https://friend-finder-by-ds.herokuapp.com/"> <img src={Friend} alt="Friend Finder App" /> </a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dsolomon4/friend_finder"> <FontAwesomeIcon icon={[ "fab","github"]} /> Code </a>
        </div>

        </div>

        <div className="row">
        {/* Trivia Game */}
        <div className="portfolioPics" id="triva-game">
          
          <br/>
          <a target="_blank"  rel="noopener noreferrer" href="https://dsolomon4.github.io/TriviaGame/"> <img src={Trivia} alt="Trivia Game" />  </a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dsolomon4/TriviaGame"> <FontAwesomeIcon icon={[ "fab","github"]} /> Code </a>

        </div>
        {/* Bamazon Inventory */}
        <div className="portfolioPics" id="bamazon">
          <br/>
          <img src={Bamazon} alt="Bamazon Inventory" />
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dsolomon4/bamazon"> <FontAwesomeIcon icon={[ "fab","github"]} /> Code </a>
        </div>
        {/* Transparent Care */}
        <div className="portfolioPics" id="transparentCare">
          
          <br/>
          <a  target="_blank" rel="noopener noreferrer" href="https://patient-management-ds-jf.herokuapp.com/" > <img src={Patient} alt="Tranparent Care" /> </a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dsolomon4/patient_management"> <FontAwesomeIcon icon={[ "fab","github"]} /> Code </a>

        </div>

        </div>

      </div>
        </div>

    </div>
    );

export default Portfolio;