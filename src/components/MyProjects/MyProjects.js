import React from 'react';
import myProjects from '../../FakeData/ProjectData';
import ProjectCard from './ProjectCard';
const MyProjects = () => {
    return (
        <div>
        <h1>My all projects</h1>
        <div className="blog-section">
           {
               myProjects.map(project=><ProjectCard project={project}></ProjectCard>)
           }
        </div>
        </div>
    );
};

export default MyProjects;