import React, { useState } from "react"; // Import useState
import './NAV.css'; // Import the new CSS file
import InstagramIcon from '../assets/icons/instagram.svg'; // Import the Instagram icon
import YoutubeIcon from '../assets/icons/youtube.svg'; // Import the Youtube icon
import TiktokIcon from '../assets/icons/tiktok.svg'; // Import TikTok icon


const NAV = ({ toggleSection, activeSection }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // null, 'instagram', 'youtube', or 'tiktok'
  const [hoveredNavLink, setHoveredNavLink] = useState(null); // null, 'work', 'about', 'contact'

  const getIconStyle = (iconName) => {
    const baseStyle = { width: '24px', height: '24px', transition: 'opacity 0.3s ease' };
    let specificStyle = {};

    if (iconName === 'instagram') {
      specificStyle = { filter: 'invert(100%)' };
    }
    // YouTube and TikTok icons are already white, no specific filter needed for their base color

    if (hoveredIcon && hoveredIcon !== iconName) {
      return { ...baseStyle, ...specificStyle, opacity: 0.5 };
    }
    return { ...baseStyle, ...specificStyle, opacity: 1 };
  };

  const getNavLinkStyle = (linkName) => {
    const baseStyle = { transition: 'opacity 0.3s ease' }; // Added transition
    if (hoveredNavLink && hoveredNavLink !== linkName) {
      return { ...baseStyle, opacity: 0.5 };
    }
    return { ...baseStyle, opacity: 1 };
  };

  return (
    <div className="nav-wireframe">
        <div className="nav-logo">KONRAD KUNKEL</div>
        <div className="nav-menu-items"> {/* Container for all items on the right */}
            <div className="page-links"> {/* Group for WORK, ABOUT, CONTACT */}
                <div 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                  onClick={() => toggleSection('projects')}
                  onMouseEnter={() => setHoveredNavLink('projects')}
                  onMouseLeave={() => setHoveredNavLink(null)}
                  style={getNavLinkStyle('projects')}
                  aria-current={activeSection === 'projects' ? 'page' : undefined}
                >
                  PROJECTS
                </div>
                <div 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                  onClick={() => toggleSection('about')}
                  onMouseEnter={() => setHoveredNavLink('about')}
                  onMouseLeave={() => setHoveredNavLink(null)}
                  style={getNavLinkStyle('about')}
                  aria-current={activeSection === 'about' ? 'page' : undefined}
                >
                  ABOUT
                </div>
                {/* <div className="nav-link">SERVICES</div> */}
                <div 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                  onClick={() => toggleSection('contact')}
                  onMouseEnter={() => setHoveredNavLink('contact')}
                  onMouseLeave={() => setHoveredNavLink(null)}
                  style={getNavLinkStyle('contact')}
                  aria-current={activeSection === 'contact' ? 'page' : undefined}
                >
                  CONTACT
                </div>
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
                <a 
                  href="https://www.tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  onMouseEnter={() => setHoveredIcon('tiktok')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                    <img src={TiktokIcon} alt="TikTok" style={getIconStyle('tiktok')} />
                </a>
            </div>
        </div>
    </div>
  );
};

export default NAV;