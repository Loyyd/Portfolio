import React, { useState } from "react"; // Import useState
import './NAV.css'; // Import the new CSS file
import InstagramIcon from '../assets/icons/instagram.svg'; // Import the Instagram icon
import YoutubeIcon from '../assets/icons/youtube.svg'; // Import the Youtube icon


const NAV = ({ toggleSection }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // null, 'instagram', or 'youtube'

  const getIconStyle = (iconName) => {
    const baseStyle = { width: '24px', height: '24px', transition: 'opacity 0.3s ease' };
    let specificStyle = {};

    if (iconName === 'instagram') {
      specificStyle = { filter: 'invert(100%)' };
    }
    // YouTube icon is already white, no specific filter needed for its base color

    if (hoveredIcon && hoveredIcon !== iconName) {
      return { ...baseStyle, ...specificStyle, opacity: 0.5 };
    }
    return { ...baseStyle, ...specificStyle, opacity: 1 };
  };

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
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  onMouseEnter={() => setHoveredIcon('instagram')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                    <img src={InstagramIcon} alt="Instagram" style={getIconStyle('instagram')} />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  onMouseEnter={() => setHoveredIcon('youtube')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                    <img src={YoutubeIcon} alt="Youtube" style={getIconStyle('youtube')} />
                </a>
            </div>
        </div>
    </div>
  );
};

export default NAV;