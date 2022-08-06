import "./WorkCardStyles.css";
import React, { Component } from 'react';
import { FaGithub, FaFileAlt, FaExternalLinkAlt} from 'react-icons/fa';


class WorkCard extends Component {
  render(){
    return (
      <div className="projectCard">
        <img src={this.props.imageSrc} alt="project"/>
        <b><div className="projectTitle">{this.props.projectTitle}</div></b>
        <div className="proDetails">
          <div className="projectSummary">
            {this.props.projectSummary}
          </div>
          <div className="proBtns">
            <a href={this.props.projectUrl} className="btn" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="icon"/> Project</a>
            <a href={this.props.codeUrl}    className="btn" target="_blank" rel="noreferrer">&nbsp;<FaGithub className="icon"/> Code &nbsp;</a>
            <a href={this.props.detailsUrl} className="btn" target="_blank" rel="noreferrer">      <FaFileAlt className="icon"/> Details</a>
          </div>
        </div>
      </div>
    ); 
  }
}

export default WorkCard;
