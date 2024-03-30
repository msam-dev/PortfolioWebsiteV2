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
            To get a sense of who I am as a developer you should know two key things about me:
            Firstly, I love the act of creation. My specific interests have shifted and evolved with time, but throughout the years 
            my passion for making and building stuff has remained a constant focal point.   <br/>
            Secondly, I have an innate fascination with all things related to science, technology, and engineering 
            even those unrelated to my realm of expertise.
          </p>
          <p className="AboutText">   
            These characteristics are compatible with a many technical areas however, I specifically gravitated 
            towards software development because I see it as a form of creation that is more flexible and less encumbered 
            than disciplines that are strictly focused on engineering physical systems.
            My passionate love of programming is complemented by my exceptional problem-solving skills 
            and effective communication, which allow me to excel in team environments.
          </p>
          <p className="AboutText">    
            Aside from software stuff in my free time I enjoy cooking, reading, and doing a variety of physical activities 
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