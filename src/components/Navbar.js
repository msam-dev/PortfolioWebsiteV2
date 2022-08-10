import "./NavbarStyles.css";
import sam from "../images/samGifHD.gif";
import Mlogo from "../images/Mlogo.png"

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMenu = () => setClick(false);

  return (
    <div className={click ? "header":"header active"}>
        <Link to="/" className="Mlogo">
            <img className="Mlogo"  alt="M logo" src={Mlogo}/>
        </Link>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li className="homeLink">
                <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
                <Link to="/Contact" onClick={closeMenu} >Contact</Link>
            </li>
            <li>
                <Link to="/Projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li>
                <Link to="/About" onClick={closeMenu}>About</Link>
            </li>
            <li>
                <Link to="/Resume" onClick={closeMenu}>Resume</Link>
            </li>
            <div className="menuFooter">
                <div className="alot">This is how I spend alot of my time :) </div>
                <img className="samGif"  alt="gif of man coding" src={sam}/>
            </div>
        </ul>
        
        <div className="hamburger" onClick={handleClick}>
           {click ? (<FaTimes size={30}/>):(<FaBars size={30}/>)}            
        </div>

    </div>
  );
};

export default Navbar