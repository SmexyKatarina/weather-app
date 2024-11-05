import React from "react";

import '../css/footer.css';

const Footer = () => {

    return (
        <div id="footer">
            <a href="https://www.github.com/smexykatarina/" rel="noreferrer" target="_blank" className="footer-link">Weather app made by Titus</a>
            <a href="https://smexykatarina.github.io/" rel="noreferrer" target="_blank" className="footer-link">Website</a>
            <a href="https://www.github.com/smexykatarina/weather-app" rel="noreferrer" className="footer-link">See the code here...</a>
        </div>
    );
}

export default Footer;