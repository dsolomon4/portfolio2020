import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


import './Contact.css'


library.add(fab)


const Contact = () => (

    <div className="contactContainer" id="contact">
        <div className="contactSub">

        <h3 className="sectionHeader"> Contact </h3>
        <div> <FontAwesomeIcon icon={faMapMarkerAlt} />  Central Florida, US </div>

        <a href="mailto:d.d.solomon4@gmail.com" target="_top"><FontAwesomeIcon icon={faEnvelope} /> Email me</a>

        <a target="_blank" href="https://www.linkedin.com/in/desireesolomon104/"><FontAwesomeIcon icon={[ "fab","linkedin"]} /> Linkedin</a>
 
        <a target="_blank" href="https://github.com/dsolomon4"> <FontAwesomeIcon icon={[ "fab","github"]} /> Github</a>

        </div>

    </div>
    );

export default Contact;