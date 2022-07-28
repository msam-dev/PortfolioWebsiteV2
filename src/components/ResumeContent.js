import "./ResumeContentStyles.css";
import React, { useState } from 'react';
import {GrDocumentText} from "react-icons/gr";
const ResumeContent = () => {
  return (
    <div className="ResumePageContainer">
      <div className="ResumeTxt">
        <div className="resume"> Resume<span className="dotBlue">.</span></div>
        <div className="resumeLink">Click <a className="blueLink" href="https://drive.google.com/file/d/1UMr-UcHEMMegXlMB5jRjRTASU1WidlVx/view?usp=sharing" target="_blank">here</a> for a PDF version of my resume.</div>
        <div className="resumeLink">Click <a className="blueLink" href="https://drive.google.com/file/d/16iIb40M8CskTGLTy-WCD9yw6d3FvDsWL/view?usp=sharing" target="_blank">here</a> for a docx version of my resume.</div>
      </div>
    </div>
  );
};

export default ResumeContent