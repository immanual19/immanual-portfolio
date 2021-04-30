import React from 'react';
import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Header = () => {
    return (

     
        <nav className="navbar navbar-expand-lg navbar-light my-3 mx-3">

        <Link to='/' style={{textDecoration:'none'}}><a className="navbar-brand main-logo" href="#">
        Immanual</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <Link to='/' style={{textDecoration:'none'}}><li className="nav-item">
          <a className="nav-link active header-text" aria-current="page" href="#">Home</a>
        </li></Link>
        <Link to='/about' style={{textDecoration:'none'}}><li className="nav-item">
          <a className="nav-link header-text" href="#">About</a>
        </li></Link>
        <Link to='/projects' style={{textDecoration:'none'}}><li className="nav-item">
          <a className="nav-link header-text" href="#">Projects</a>
        </li></Link>
        <Link to='/blogs' style={{textDecoration:'none'}}><li className="nav-item">
          <a className="nav-link header-text" href="#">Blog</a>
        </li></Link>
        <Link to='/contact' style={{textDecoration:'none'}}><li className="nav-item">
          <a className="nav-link header-text" href="#">Contact</a>
        </li></Link>
        <li className="nav-item">
        <a className="nav-link download-resume" href="https://drive.google.com/uc?id=1aNyoCmmQTW0Hx3MSvCSpxYex7Ug0Hnot&export=download">Resume</a>
        </li>
      </ul>
    </div>
</nav>

    );
};

export default Header;