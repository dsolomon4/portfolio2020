import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

const Footer = () => (
    <footer className="mainFooter" >
    
    <p> Created By Desiree Solomon  || <a href="#home"className="" >  <FontAwesomeIcon icon={faChevronUp} /> Top <FontAwesomeIcon icon={faChevronUp} />  </a> </p>
            
    </footer>
);

export default Footer;
