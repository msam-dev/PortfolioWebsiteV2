import "./ContactContentStyles.css";
import React from 'react';

const ContactContent = () => {
  return (
    <div className="ContactPageContainer">
      <div>
        <div className="lets">Let's get in touch<span className="ContactBlue">.</span></div>
        <div className="ContactLinks">
          <div className="ContactEmail">Email me: <span className="ContactBlueUnderline">Micallef.Contact@gmail.com </span>&nbsp;</div>
          <div className="ContactLinkedin"><a href="https://www.linkedin.com/in/samuelmicallef/" className="Linked" target="_blank" rel="noreferrer">Add me: <span className="ContactBlueUnderline">Linkedin.com/in/samuelmicallef</span></a></div>
          <div className="ContactTwitter"><a href="https://twitter.com/samuel_micallef" className="Linked" target="_blank" rel="noreferrer">Follow me: <span className="ContactBlueUnderline">Twitter.com/samuel_micallef</span></a></div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactContent