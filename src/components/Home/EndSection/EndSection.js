import React from 'react';
import { motion } from "framer-motion";
import './EndSection.css';
const EndSection = () => {
    return (
        <motion.div
        whileHover={{ scale: 1.09 }}
        className="end-section">
            <h4 className="ending-header">INTERESTED IN COLABORATING?</h4>
            <p>Hit the 'Contact Me' button below</p>
            <p><small>I am always interested in hearing from you. You can knock me to say 'Hello' even if you do not have any plan to colaborate with me. I am open to any kid of suggestions, constructive criticism or casual discussion about web development. So, why delay? Hit the 'Contact Me' button and I will get back to you as soon as possible.</small></p>
            <br/><br/>
            <button className="downloadHireButton"> <a href="https://drive.google.com/uc?id=1aNyoCmmQTW0Hx3MSvCSpxYex7Ug0Hnot&export=download">Download Resume</a></button>
            <a href="http://localhost:3000/contact"><button className="downloadHireButton"> Contact Me</button></a>
        </motion.div>
    );
};

export default EndSection;