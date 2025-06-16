import React from "react";
import './NAV.css'; // Import the new CSS file


const NAV = ({ toggleSection }) => {
  return (
    <div className="nav-wireframe">
        <div className="nav-logo">KONRAD KUNKEL</div>
        <div className="nav-menu-items"> {/* Container for all items on the right */}
            <div className="page-links"> {/* Group for WORK, ABOUT, CONTACT */}
                <div className="nav-link" onClick={() => toggleSection('work')}>WORK</div>
                <div className="nav-link" onClick={() => toggleSection('about')}>ABOUT</div>
                {/* <div className="nav-link">SERVICES</div> */}
                <div className="nav-link" onClick={() => toggleSection('contact')}>CONTACT</div>
            </div>
            <div className="nav-separator">|</div>
            <div className="social-icons">
                {/* Placeholder for Instagram icon */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a>
                {/* Placeholder for Twitter icon */}
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">TW</a>
            </div>
        </div>
    </div>
  );
};

export default NAV;