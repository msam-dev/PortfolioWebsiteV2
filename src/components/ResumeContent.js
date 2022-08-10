import "./ResumeContentStyles.css";
import React from 'react';

const ResumeContent = () => {
  return (
    <div className="ResumePageContainer">
      <div>
        <div className="resume"> Resume<span className="dotBlue">.</span></div>
        <div className="resumeLink">Click <a className="blueLink" href="https://drive.google.com/" target="_blank" rel="noreferrer">here</a> for a PDF version of my resume.</div>
        <div className="resumeLink">Click <a className="blueLink" href="https://drive.google.com/" target="_blank" rel="noreferrer">here</a> for a docx version of my resume.</div>      </div>
    </div>
  );
};

export default ResumeContent