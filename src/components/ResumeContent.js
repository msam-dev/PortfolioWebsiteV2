import "./ResumeContentStyles.css";
import React from 'react';

const ResumeContent = () => {
  return (
    <div className="ResumePageContainer">
      <div>
        <div className="resume"> Resume<span className="dotBlue">.</span></div>
        {/*
        <div className="resumeLink">Click <a className="blueLink" href="https://drive.google.com/file/d/000000000000/view" target="_blank" rel="noreferrer">here</a> for a PDF version of my resume.</div>
        <div className="resumeLink">Click <a className="blueLink" href="https://docs.google.com/document/d/00000000000000/edit" target="_blank" rel="noreferrer">here</a> for a docx version of my resume.</div> 
        */}
        <div >Please contact me if you wish to see my resume</div> 
      </div>
    </div>
  );
};

export default ResumeContent
