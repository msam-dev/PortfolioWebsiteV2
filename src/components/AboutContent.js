import "./AboutContentStyles.css";
import DevPortrait from "../images/DevPortrait.jpg"
import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="AboutPageContainer">
      <div>
        <div className="About"> About Me<span className="dotBlue">.</span></div>
        <div className="AboutContentContainer">
            <div className="AboutTxt">
                I am a Software Engineer currently living in Sydney and working full-time at Collins Aerospace Australia. I recently graduated with a bachelor's degree 
                in Computer Science(Software Engineering) from the University of Wollongong. <br/><br/>

                I have a deep passion for programming and love of software creation which stems from a keen interest in how technology impacts our daily lives and 
                the way it is shaping the future. My strong motivation is complemented by my exceptional problem-solving skills and effective communication, 
                which enable me to excel in team environments.<br/><br/>
                
                For more details regarding my technical skills and experience, please see my personal <Link to="/Projects"><span className="inLineProjectLink">projects</span></Link>
                &nbsp;or <Link to="/Contact"><span className="inLineContactLink">contact me</span></Link> for a copy of my resume.
            </div>
            <div className="PortaitDiv">
                <img className="DevPortrait"  alt="portrait of samuel in a binary code style" src={DevPortrait}/>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutContent