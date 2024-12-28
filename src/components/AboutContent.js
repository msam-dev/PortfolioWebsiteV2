import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import ImageWithHoverText from './ImageWithHoverText';
import { HikingStyle } from './HikingImageStyles';
import HikingNZ from "../images/HikingNZ.webp"
import MilfordSound from "../images/MilfordSound.webp"

const AboutContent = () => {
  return (
    <div className="AboutPageContainer">
      <div>
        <div className="AboutTitle">
          About Me<span className="dotBlue">.</span>
        </div>
        <div className="AboutContentContainer">
          <p className="AboutText">
            I am a Software Engineer currently living in Sydney and working full-time for 
            Collins Aerospace. In 2022 I graduated from the University of Wollongong 
            with a Bachelor's in Computer Science - Software Engineering. 
          </p>
          <ImageWithHoverText
            style={HikingStyle}
            src  ={MilfordSound}
            alt  ="Photo of Samuel overlooking water and cliffs"
            text ="Milford Sound, New Zealand"
          />
          <p className="AboutText">
            Becoming a software engineer has largely been a product of my passion for building stuff and making things, which has remained a constant 
            focal point throughout my life. This love for creation is fundamental to who I am and a deep source 
            of meaning in life. Alongside this, I'm an insatiably curious person who is especially fascinated with the underlying mechanics 
            of complex systems. These two characteristics are the driving force behind my obsession with all things, science, technology, and engineering.
          </p>
          <p className="AboutText">    
            Aside from software stuff, in my free time I enjoy reading, cooking, and doing a variety of physical activities 
            such as bouldering, walking, cycling, swimming, hiking, etc.
          </p>
          <ImageWithHoverText
            style={HikingStyle}
            src  ={HikingNZ}
            alt  ="Photo of Samuel standing on a mountain"
            text ="Solo hiking in New Zealand"
          />
          <p className="AboutText">
            For specifics regarding my skills and experience, please see my 
            <Link to="/Resume"> <span className="inLineProjectLink">resume</span> </Link> 
            or my
            <Link to="/Projects"> <span className="inLineProjectLink">projects</span>.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent