import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {

    const handleGithubClick=()=>{
        console.log('')
    }
    return (
        <div className="mt-5 mx-5">
        <div className="footer-section">
            <a href="https://github.com/immanual19" target="_blank"><FontAwesomeIcon className="footer-icon" icon={faGithub} size="2x"/></a>
            <a href="https://www.linkedin.com/in/immanual1/"><FontAwesomeIcon className="footer-icon" icon={faLinkedin} size="2x"/></a>
            <a href="https://www.facebook.com/immanual1"><FontAwesomeIcon className="footer-icon" icon={faFacebook} size="2x"/></a>
            <br/><br/>
            <p>Designed at Developed by A. Immanual Sarker</p>
            <p><small>Copyright &#169; {(new Date()).getFullYear()} A. Immanual Sarker</small></p>
        </div>   
        </div>
    );
};

export default Footer;