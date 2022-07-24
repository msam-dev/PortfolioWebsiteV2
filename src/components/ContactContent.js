import "./ContactContentStyles.css";
import React, { useState } from 'react';

const ContactContent = () => {
  return (
    <div className="header">
        <div className="headers">
            <div className="lets">Let's get in touch.</div>
            <div className="ifYou">If you have any questions feel free to contact me via: </div>
            <div className="">
                <span className="Email"><span className="EM"><b>Email:</b></span> micallef.contact@gmail.com</span>
                <a href="https://www.linkedin.com/in/samuelmicallef/" className="Linked"><span className="LN"><b>LinkedIn:</b></span> linkedin.com/in/samuelmicallef/</a>
            </div>
            <div className=""></div>
        </div>
    </div>
  );
};

export default ContactContent