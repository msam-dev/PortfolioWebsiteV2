import "./HomePageContentStyles.css";
import computerGif from "../images/computer.gif"

const HomePageContent = () => {
  return (
    <div className="pageContainer">
      <div className="outerContentDiv">
          <div className="textBlock">
              <div className="hello">Hello, my name is</div>
              <div className="samuel">Samuel Micallef.</div>
              <div className="welcome">Welcome to my portfolio<span className="dotBlue">.</span></div>
              <div className="summary">I’m a Sydney based Software Engineer who loves building software and solving problems. 
              I am currently working at <a className="collinsLink" href="https://www.collinsaerospace.com/">Collins Aerospace</a>.</div>
          </div>

          <div className="computerDiv">
            <img className="computerGif"  alt="gif of a computer coding" src={computerGif}/>
          </div>
      </div>
    </div>
  );
};

export default HomePageContent
