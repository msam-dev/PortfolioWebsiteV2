import "./WorkCardStyles.css";
import DevPortrait from "../images/projs.webp";
import React from 'react';
import { NavLink } from "react-router-dom";

import { FaGithub, FaFileAlt, FaExternalLinkAlt} from 'react-icons/fa';


export const WorkCard = () => {

  return (
    <div className="projectCard">
      <img src={DevPortrait} alt="project"/>
      <b><div className="projectTitle">Project Title</div></b>
      <div className="proDetails">
        <div className="projectSummary">
          hello world test text example 123 lorem ipsum ok pie cat dog hello world test text example 123 lorem ipsum ok pie cat dog 
        </div>
        <div className="proBtns">
          <NavLink to="url.com" className="btn"><FaExternalLinkAlt className="icon"/> Project</NavLink>
          <NavLink to="url.com" className="btn">&nbsp;<FaGithub className="icon"/> Code &nbsp; </NavLink>
          <NavLink to="url.com" className="btn"><FaFileAlt className="icon"/> Details</NavLink>
        </div>
      </div>
    </div>
  )
}
