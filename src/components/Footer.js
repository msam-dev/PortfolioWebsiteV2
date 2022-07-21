import "./FooterStyles.css";
import React, { useState } from 'react';

const Footer = () => {
  return (
    <div className="header">
        <div className="madeWith">This website was made with React. <a href="https://github.com/Sammy-Dev/PortfolioWebsiteV2" className="view" target="_blank">View my code</a></div>
        <div className="Copyright">Copyright © 2021 Samuel Micallef. All rights reserved </div>
    </div>
  );
};

export default Footer