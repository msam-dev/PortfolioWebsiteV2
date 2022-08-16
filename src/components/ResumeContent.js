import "./ResumeContentStyles.css";
import React from 'react';

const ResumeContent = () => {
  return (
    <div className="ResumePageContainer">
      <div>
        <div className="resume"> Resume<span className="dotBlue">.</span></div>
        <div className="resumeLink">Click <a className="blueLink" href="https://drive.google.com/file/d/1gTr82Dx43zMgXLyK7U4HURVASFJ9xSU9/view" target="_blank" rel="noreferrer">here</a> for a PDF version of my resume.</div>
        <div className="resumeLink">Click <a className="blueLink" href="https://docs.google.com/document/d/1dtMv7p45Vc9aqXoYJeuAXlmQ0IdX4Vfn/edit" target="_blank" rel="noreferrer">here</a> for a docx version of my resume.</div>      </div>
    </div>
  );
};

export default ResumeContent