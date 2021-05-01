import React from 'react';
import immanual from '../../MyImage/immanual.png';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div>
            <div className="row my-5 mx-5">
            <div className="col-md-6">
                <h1 className="greeting">Hello!</h1><br/>
                <p className="my-description">Welcome to my Portfolio. I am Ahmed Immanual Sarker from Gobindaganj, Gaibandha.<br/><br/>Web Development has been a great subject of curiosity the moment I was introduced to internet. And, because of that curiosity, I ultimately decided to do my B.Sc in Computer Science and Engineering. By the time I was in 4th year, I have solved 300+ programming problems in various online judge. I have completed five project using MERN technology. My Goal is to continuously learn new technology related to web development and keep myself updated.<br/><br/>Here is the list of technologies I am working with currently:<br/><br/> </p>

                <div className="known-technology">
                
                
                
                <button>HTML5</button><button>CSS3</button><button>Bootstrap 5</button><button>Material UI</button><button>Framer Motion</button><button>Chart.js</button><button>JavaScript</button><button>ES6</button><button>React.js</button><button>MongoDB- CRUD Operation</button><button>Express.js</button><button>Node.js</button><button>Firebase</button><button>Netlify</button><button>Heroku</button><button>Git</button><button>React-Native</button><button>Redux</button><button>VSCode</button>
                </div>
            </div>
            <div className="col-md-4 col-md-offset-2">
                <img style={{borderRadius:'50%'}} src={immanual} alt="" className="img-fluid my-image"/>
            </div>
            </div>
        </div>
    );
};

export default AboutMe;