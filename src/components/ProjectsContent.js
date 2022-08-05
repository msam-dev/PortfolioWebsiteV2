import "./ProjectsContentStyles.css";
import React from 'react';
import { WorkCard } from "./WorkCard";

const ProjectsContent = () => {
  return (
    <div className="ProjectsContentContainer">
        <div>
            <div className="Projects">Projects<span className="dotBlue">.</span></div>
            <div className="projectCards">
              <WorkCard/>
              <WorkCard/>
              <WorkCard/>
              <WorkCard/>
              <WorkCard/>
              <WorkCard/>
              <WorkCard/>
              <WorkCard/>
            </div>
            
        </div>
    </div>
  );
};
 
export default ProjectsContent