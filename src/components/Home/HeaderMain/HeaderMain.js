import React from 'react';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <div className="my-5 mx-5">
            <div className="row">
                <div className="col-md-8 text-white my-5 mx-5">
                    <p className="intro-text">Hi, I am</p>
                    <h1 className="myName">A. Immanual Sarker.</h1>
                    <br/>
                    <h3>I am a MERN stack developer who builds website.</h3>
                    <br/>
                    <p className="intro-text">I am a full stack web developer from Gobindaganj, Gaibandha who develops and designs website with the latest technology.</p><br/><br/>
                <button className="downloadHireButton"> <a href="https://drive.google.com/uc?id=1aNyoCmmQTW0Hx3MSvCSpxYex7Ug0Hnot&export=download">Download Resume</a></button>
                <button className="downloadHireButton">Hire Me</button>
                </div>
                <div className="col-md-2">
                
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;