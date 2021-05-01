import React from 'react';
import { motion } from "framer-motion";
import Typist from 'react-typist';
import './HeaderMain.css';
const HeaderMain = () => {
    
    return (
        <motion.div
        initial={{y:50}}
        animate={{y:10}}
        transition={{ delay:1}}
        className="my-5 my-introduction">
            <div className="row">
                <div className="col-md-8">
                <Typist cursor={{
                    show: false,
                    blink: false,
                    element: '',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1000,
                  }}>
                <div className="intro-text">
                <h2>Hi, this is</h2>
                    <h1 className="myName">A. Immanual Sarker</h1>
                    <h3>A MERN stack developer who is actively looking for an Internship/Full-time job.</h3>
                    <h5>I'm currently a final year student (B.Sc in CSE) at Mawlana Bhashani Science and Technology University. Building website is my passion. And, I always try to learn new things. Feel free to checkout my portfolio. In below, you'll find my featured work. Thank you.</h5>
                </div>
                    
                </Typist>
                <br/><br/>
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