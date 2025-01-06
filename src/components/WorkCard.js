import "./WorkCardStyles.css";
import React, { Component , useState} from 'react';
import { FaGithub, FaFileAlt, FaExternalLinkAlt} from 'react-icons/fa';
import { Skeleton } from 'antd';

const WorkCard = ({ imageSrc, projectTitle, projectSummary, projectUrl, codeUrl, detailsUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log('s');
  };

  return (
    <div className="projectCard">
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


// class WorkCard extends Component {
//   render(){
//     return (
//       <div className="projectCard">
//         <img src={this.props.imageSrc} alt="project"/>
//         <b><div className="projectTitle">{this.props.projectTitle}</div></b>
//         <div className="proDetails">
//           <div className="projectSummary">
//             {this.props.projectSummary}
//           </div>
//           <div className="proBtns">
//             <a href={this.props.projectUrl} className="btn" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="icon"/> Project</a>
//             <a href={this.props.codeUrl}    className="btn" target="_blank" rel="noreferrer">&nbsp;<FaGithub className="icon"/> Code &nbsp;</a>
//             <a href={this.props.detailsUrl} className="btn" target="_blank" rel="noreferrer">      <FaFileAlt className="icon"/> Details</a>
//           </div>
//         </div>
//       </div>
//     ); 
//   }
// }

export default WorkCard;
