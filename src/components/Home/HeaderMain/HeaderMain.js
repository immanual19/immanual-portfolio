import React from 'react';
import { motion } from "framer-motion";
import './HeaderMain.css';
const HeaderMain = () => {
    
    return (
        <motion.div
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{type:'spring', delay:0.5}}
        className="my-5 my-introduction">
            <div className="row">
                <div className="col-md-8">
                    <p className="intro-text">Hi, I am</p>
                    <motion.h1
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                    className="myName">A. Immanual Sarker</motion.h1>
                    <br/>
                    <h3>I am a MERN stack developer who builds website.</h3>
                    <br/>
                    <p className="intro-text">I am a full stack web developer from Gobindaganj, Gaibandha who develops and designs website with the latest technology.</p><br/><br/>
                <motion.button whileHover={{scale:1.1}} className="downloadHireButton"> <a href="https://drive.google.com/uc?id=1aNyoCmmQTW0Hx3MSvCSpxYex7Ug0Hnot&export=download">Download Resume</a></motion.button>
                <motion.button whileHover={{scale:1.1}} className="downloadHireButton">Hire Me</motion.button>
                </div>
                <div className="col-md-4">
                
                </div>
            </div>
        </motion.div>
    );
};

export default HeaderMain;