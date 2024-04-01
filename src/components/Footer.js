import "./FooterStyles.css";
import React from 'react';

var currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="FooterContainer">
        <div className="madeWith">This website was made with React. <a href="https://github.com/Sammy-Dev/PortfolioWebsiteV2" className="view" target="_blank" rel="noreferrer">View my code</a></div>
        <div className="Copyright">Copyright © {currentYear} Samuel Micallef</div>
    </div>
  );
};

export default Footer