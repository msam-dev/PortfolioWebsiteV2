import "./ProjectsContentStyles.css";
import React from 'react';

import WorkCard from "./WorkCard";
import ProjectData from "./ProjectData";

const ProjectsContent = () => {
  return (
    <div className="ProjectsContentContainer">
        <div>
            <div className="Projects">Projects<span className="dotBlue">.</span></div>
            <div className="projectCards">
              
              {ProjectData.map((val, ind) => {
                return(
                  <WorkCard 
                    key={ind}
                    imageSrc={val.imageSrc}
                    projectTitle={val.projectTitle}
                    projectSummary={val.projectSummary}
                    projectUrl={val.projectUrl}
                    codeUrl={val.codeUrl}
                    detailsUrl={val.detailsUrl}
                  />
                )
              })}
            </div>
        </div>
    </div>
  );
};
 
export default ProjectsContent