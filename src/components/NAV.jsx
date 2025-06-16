import React from "react";
import './NAV.css'; // Import the new CSS file
import InstagramIcon from '../assets/icons/instagram.svg'; // Import the Instagram icon
import YoutubeIcon from '../assets/icons/youtube.svg'; // Import the Youtube icon


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
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={InstagramIcon} alt="Instagram" style={{ width: '24px', height: '24px', filter: 'invert(100%)' }} />
                </a>
                {/* Placeholder for Youtube icon */}
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={YoutubeIcon} alt="Youtube" style={{ width: '24px', height: '24px', filter: 'invert(100%)' }} />
                </a>
            </div>
        </div>
    </div>
  );
};

export default NAV;