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
            If you get to know me I am sure you will come to find that my interests cover a very broad variety of topics. 
            However, out of everything my passion for making and building stuff has remained constant point of focus throughout my whole life. 
            I see this love for creating things as a fundamental characteristic of who I am and a deep source of meaning in life.
            Alongside this, I have an innate curiosity with the underlying mechanics of complex systems which drives my fascination with all things, science, technology, and engineering.
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