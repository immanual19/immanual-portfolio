import React from 'react';
import FreshGrocery from '../../../ProjectImage/FreshGrocery.png';
import KidsHeaven from '../../../ProjectImage/KidsHeaven.png';
import PremierLeague from '../../../ProjectImage/PremierLeague.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";
import './ProjectSection.css';
import { Box, Button } from '@material-ui/core';

const ProjectSection = () => {
    return (
        <div className="mx-5 my-5">
        <h1 className="section-header">My featured project</h1>
        <div className="project-section align-items-center my-5">
       <a href="https://kidsheaven-3128e.web.app/" target="_blank"> <motion.div
        whileHover={{scale:0.7}}
        className="project-section-left">
        <img src={KidsHeaven} className="project-image" alt=""/>
        </motion.div></a>
        <motion.div
        whileHover={{scale:1.1}}
        className="project-section-right">
        
                <h2>Kids Heaven</h2>
                <p>
                Kids Heaven is a day care center website. You can explore almost every facilities a day-care center has to offer. Its a friendly website
                for both admin and users.
                </p>
                <h4>Technology used</h4>
                <div className="known-technology">
                <button>React.js</button><button>Material UI</button><button>Bootstrap</button><button>Node.js</button><button>MongoDB</button><button>Express.js</button>
                </div>
                <div class="card-footer footer-section">
                <a href="https://kidsheaven-3128e.web.app/" target="_blank">LiveSite: <FontAwesomeIcon icon={faLink} /></a><a href="https://github.com/immanual19/KidsHeavenClient" target="_blank">Client: <FontAwesomeIcon icon={faGithub} /></a><a href="https://github.com/immanual19/KidsHeavenServer" target="_blank">Server: <FontAwesomeIcon icon={faGithub} /></a>
                </div>
            
        </motion.div>
        <motion.div
        whileHover={{scale:1.1}}
        className="project-section-left-two">
        
                <h2>Fresh Grocery</h2>
                <p>
                Fresh Grocery can be referred as the most simplest form of an eCommerce site. Here an user can buy a project, download invoice and
                see his order history. And, the admin can add or delete any product.
                </p>
                <h4>Technology used</h4>
                <div className="known-technology">
                <button>React.js</button><button>Material UI</button><button>Bootstrap</button><button>Node.js</button><button>MongoDB</button><button>Express.js</button>
                </div>
                <div class="card-footer footer-section">
                <a href="https://full-stack-client-immanual19.web.app/" target="_blank">LiveSite: <FontAwesomeIcon icon={faLink} /></a><a href="https://github.com/immanual19/FreshGroceryClient" target="_blank">Client: <FontAwesomeIcon icon={faGithub} /></a><a href="https://github.com/immanual19/FreshGroceryServer" target="_blank">Server: <FontAwesomeIcon icon={faGithub} /></a>
                </div>
            
        </motion.div>
        <a href="https://full-stack-client-immanual19.web.app/" target="_blank">
        <motion.div
        whileHover={{scale:0.7}}
        className="project-section-right-two">
        <img src={FreshGrocery} className="project-image" alt=""/>
        </motion.div></a>
       <a href="https://sleepy-meitner-7a5563.netlify.app/" target="_blank"> <motion.div
        whileHover={{scale:0.7}}
        className="project-section-left">
        <img src={PremierLeague} className="project-image" alt=""/>
        </motion.div></a>
        <motion.div
        whileHover={{scale:1.1}}
        className="project-section-right">
        
                <h2>Premier League</h2>
                <p>
                Premier Leagus is a simple website that allows you to read description about any Premier League Club. I have developed this website with 
                the help of the sportsdb api.
                </p>
                <h4>Technology used</h4>
                <div className="known-technology">
                <button>React.js</button><button>Material UI</button><button>React-Bootstrap</button>
                </div>
                <div class="card-footer footer-section">
                <a href="https://sleepy-meitner-7a5563.netlify.app/" target="_blank">LiveSite: <FontAwesomeIcon icon={faLink} /></a><a href="https://github.com/immanual19/Premier-League" target="_blank">Client: <FontAwesomeIcon icon={faGithub} /></a><a href="" target="_blank">Server: <FontAwesomeIcon icon={faGithub} /></a>
                </div>
            
        </motion.div>
        
        </div>
        <Box mt={5} textAlign='center'>
        <Link style={{textDecoration:'none'}} to="/projects"><Button variant="contained" color="secondary">See All Projects</Button></Link></Box>
        </div>
        
        
    );
};

export default ProjectSection;