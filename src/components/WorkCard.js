import "./WorkCardStyles.css";
import React, { useState} from 'react';
import { FaGithub, FaFileAlt, FaExternalLinkAlt} from 'react-icons/fa';
import { Skeleton } from 'antd';

const WorkCard = ({ index, imageSrc, projectTitle, projectSummary, projectUrl, codeUrl, detailsUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`projectCard index${index}`}>
      <div style={{ display: imageLoaded ? 'none' : 'block' }}>
        <Skeleton.Image active style={{height:'250px', width:'500px', maxWidth:'95vw', maxHeight:'30vh'}}/>
      </div>
      <img
        src={imageSrc}
        alt="project"
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? 'block' : 'none', width: '100%' }}
      />
      <b><div className="projectTitle">{projectTitle}</div></b>
      <div className="proDetails">
        <div className="projectSummary">
          {projectSummary}
        </div>
        <div className="proBtns">
          <a href={projectUrl} className="btn" target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="icon" /> Project
          </a>
          <a href={codeUrl} className="btn" target="_blank" rel="noreferrer">
            &nbsp;<FaGithub className="icon" /> Code &nbsp;
          </a>
          <a href={detailsUrl} className="btn" target="_blank" rel="noreferrer">
            <FaFileAlt className="icon" /> Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
