import "./ContactContentStyles.css";
import React, { useState } from 'react';
import { GoMail } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";

const ContactContent = () => {
  return (
    <div className="ContactPageContainer">
        <div className="ContactTxt">
            <div className="lets">Let's get in touch<span className="ContactBlue">.</span></div>
            <div className="ContactLinks">
                <div className="Cemail">Email me: <span className="cBlue">micallef.contact@gmail.com </span>&nbsp;</div>
                <a href="https://www.linkedin.com/in/samuelmicallef/" className="Linked">Add me: <span className="cBlue">linkedin.com/in/samuelmicallef</span></a>
            </div>
        </div>
    </div>
  );
};


export default ContactContent