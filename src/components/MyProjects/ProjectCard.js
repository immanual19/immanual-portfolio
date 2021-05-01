import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.css';
const ProjectCard = ({project}) => {

    const {projectName, live, client, server, image, description, technology}=project;
    return (
        
        <motion.div whileHover={{ scale: 1.09 }} style={{margin:'5%'}} class="card-group w-75">
        
  <div style={{backgroundColor:'#0a192f', boxShadow:'5px 5px 5px #1d304f', borderRadius:'10px'}} class="card">
  <a  style={{textDecoration: 'none', color: 'white'}} href={live} target="_blank">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{projectName}</h5>
      <ul>
        {
            description.map(point=><li>{point}</li>)
        }
        
      </ul>
      {
        technology.map(tech=><button className="technology-used">{tech}</button>)
    }
    </div>
    </a>
    <div class="card-footer footer-section">
      <a href={live} target="_blank">LiveSite: <FontAwesomeIcon icon={faLink} /></a><a href={client} target="_blank">Client: <FontAwesomeIcon icon={faGithub} /></a><a href={server} target="_blank">Server: <FontAwesomeIcon icon={faGithub} /></a>
    </div>
  </div>
  
  </motion.div>
  
        
    );
};

export default ProjectCard;