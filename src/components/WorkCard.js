import "./WorkCardStyles.css";
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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
            <NavLink to={this.props.projectUrl} className="btn"><FaExternalLinkAlt className="icon"/> Project</NavLink>
            <NavLink to={this.props.codeUrl}  className="btn">&nbsp;<FaGithub className="icon"/> Code &nbsp; </NavLink>
            <NavLink to={this.props.detailsUrl}  className="btn"><FaFileAlt className="icon"/> Details</NavLink>
          </div>
        </div>
      </div>
    ); 
  }
}

export default WorkCard;
