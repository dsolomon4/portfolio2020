import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Resume from '../../images/Resume.pdf'


import './Contact.css'


library.add(fab)


const Contact = () => (

    <div className="contactContainer" id="contact">
        <div className="contactSub">

        <div className="sectionHeader"> Contact </div>
        <hr className="contactHr"/>
        <div> <FontAwesomeIcon icon={faMapMarkerAlt} />  Central Florida, US </div>

        <a href="mailto:d.d.solomon4@gmail.com" target="_top"><FontAwesomeIcon icon={faEnvelope} /> d.d.solomon4@gmail.com</a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/desireesolomon104/"><FontAwesomeIcon icon={[ "fab","linkedin"]} /> Linkedin</a>
 
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dsolomon4"> <FontAwesomeIcon icon={[ "fab","github"]} /> Github</a>

        <div> <a target="_blank" rel="noopener noreferrer" href={Resume}> <FontAwesomeIcon icon={faFileAlt} /> Click Here to Download My Resume </a></div>

        </div>

    </div>
    );

export default Contact;