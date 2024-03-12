import "./AboutContentStyles.css";
import ImageWithHoverText from './ImageWithHoverText';
import { HikingStyle } from './HikingImageStyles';
import HikingNZ from "../images/HikingNZ.jpg"
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="AboutPageContainer">
      <div>
        <div className="AboutTitle">
          About Me<span className="dotBlue">.</span>
        </div>
        <ImageWithHoverText
          style={HikingStyle}
          src={HikingNZ}
          alt="Photo of Samuel standing on a mountain"
          hoverText="This is a photo of me during a solo hiking expedition through the mountains of New Zealand"
        />
        <div className="AboutContentContainer">
          <p className="AboutText">
            I am a Software Engineer currently living in Sydney and working full-time at 
            Collins Aerospace Australia. In 2022 I graduated from the University of Wollongong 
            with a bachelor's degree in Computer Science, Majoring in Software Engineering. 
          </p>
          <p className="AboutText">
            To get a sense of who I am as a developer you should know two key things. 
            Firstly, I love the act of creation. My entire life I have had an innate attraction to making and building stuff. 
            Secondly, I have a deep fascination with all things related to Science, Technology, and Engineering 
            (which also has been with me since childhood).
            These characteristics are compatible with a vast array of technical areas, however I specifically gravitated 
            towards software development because I see programming as a form of creation that is more flexible and less encumbered 
            than the many disciplines that concern themselves with trying to engineer physical systems. 
            My strong passion is complemented by my exceptional problem-solving skills 
            and effective communication, which allow me to excel in team environments.
          </p>
          <p className="AboutText">
            In my free time I enjoy reading and doing intense physical stuff such as: hiking, bushwalking, cycling, 
            swimming, bouldering, and more. I am also quite the skilled home chef (at least I like to think so) and I do a lot of meal prepping. 
          </p>
          <p className="AboutText">
            For more details regarding my technical skills and experience, please see my personal <Link to="/Projects"><span className="inLineProjectLink">projects</span> </Link>
            or <Link to="/Contact"><span className="inLineContactLink">contact me</span></Link> for a copy of my resume. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent