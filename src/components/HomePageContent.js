import "./HomePageContentStyles.css";
import computerGif from "../images/computer.gif"
import React, { useState } from 'react';

const HomePageContent = () => {
  return (
    <div className="pageContainer">
      <div className="outerContentDiv">
          <div className="textBlock">
              <div className="hello">Hello, my name is</div>
              <div className="samuel">Samuel Micallef.</div>
              <div className="welcome">Welcome to my portfolio<span className="dotBlue">.</span></div>
              <div className="summary">I’m a programming enthusiast who loves building software and solving problems. 
              I’m currently looking for entry level positions, if you are interested don’t hesitate to get in touch.</div>
          </div>

          <div className="computerDiv">
            <img className="computerGif"  alt="gif of a computer coding" src={computerGif}/>
          </div>
      </div>
    </div>
  );
};

export default HomePageContent