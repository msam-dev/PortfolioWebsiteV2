import "./ContactContentStyles.css";
import React from 'react';

const ContactContent = () => {
  return (
    <div className="ContactPageContainer">
      <div>
        <div className="lets">Let's get in touch<span className="ContactBlue">.</span></div>
        <div className="ContactLinks">
          <div className="ContactEmail">Email me: <span className="ContactBlueUnderline">micallef.contact@gmail.com </span>&nbsp;</div>
          <a href="https://www.linkedin.com/in/samuelmicallef/" className="Linked" target="_blank" rel="noreferrer">Add me: <span className="ContactBlueUnderline">linkedin.com/in/samuelmicallef</span></a>
        </div>
      </div>
    </div>
  );
};

export default ContactContent