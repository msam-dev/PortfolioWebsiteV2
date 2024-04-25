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
            with a Bachelor's in Computer Science, Majoring in Software Engineering. 
          </p>
          <ImageWithHoverText
            style={HikingStyle}
            src  ={MilfordSound}
            alt  ="Photo of Samuel overlooking water and cliffs"
            text ="Milford Sound, New Zealand"
          />
          <p className="AboutText">
            To get a sense of who I am as a developer you should know a couple things about me. Many aspects of personality have 
            shifted and evolved with time but my passion for making and building stuff has remained a constant focal point over the years. 
            I see this love for creating things as a fundamental characteristic of who I am and a deep source of meaning in life.
            Alongside this, I have interest in all things science, technology, and engineering which is driven by my innate fascination
            with the inner mechanics of complex systems.
          </p>
          <p className="AboutText">   
            These characteristics are compatible with a variety of career paths however, I specifically gravitated 
            towards software development because I see it as a medium of creation that is more flexible than the (unfortunately) 
            encumbered and restrictive reality of engineering physical systems.
            Along with my passionate love of programming I take pride in my effective communication skills and my ability to analyse and solve 
            problems which have been invaluable when working in a team environment.
          </p>
          <p className="AboutText">    
            Aside from software stuff, in my free time I enjoy cooking, reading, and doing a variety of physical activities 
            such as bush walking, cycling, swimming, bouldering, lifting, etc.
          </p>
          <ImageWithHoverText
            style={HikingStyle}
            src  ={HikingNZ}
            alt  ="Photo of Samuel standing on a mountain"
            text ="Photo of me solo hiking through the mountains of New Zealand"
          />
          <p className="AboutText">
            For specifics regarding my technical skills and experience, please see my <Link to="/Projects"><span className="inLineProjectLink">projects</span> </Link>
            or <Link to="/Contact"><span className="inLineContactLink">contact me</span></Link> for a copy of my resume. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent