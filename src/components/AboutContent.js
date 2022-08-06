import "./AboutContentStyles.css";
import DevPortrait from "../images/DevPortrait.jpg"
import React from 'react';

const AboutContent = () => {
  return (
    <div className="AboutPageContainer">
      <div>
        <div className="About"> About Me<span className="dotBlue">.</span></div>
        <div className="AboutContentContainer">
            <div className="AboutTxt">
                My name is Samuel Micallef, and I am a recent Computer Science graduate (Software Engineering) from the University of Wollongong. My passion for software is driven by a fundamental interest in how technology impacts our daily lives and can affect the future.<br/><br/>
                I am currently looking for a job in the Information Technology sector. I am open to a wide range of job positions but am mostly looking for an opportunity related to Software Engineering, Web Development and/or Programming generally.<br/><br/>
                My skills both technical and interpersonal would make me an extremely valuable addition to any team or company. For additional information, please see my resume or projects.
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