import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import './NAV.css';
import InstagramIcon from '../assets/icons/instagram.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import TiktokIcon from '../assets/icons/tiktok.svg';

const NAV = ({ toggleSection, activeSection }) => {
  const [show, setShow] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavClick = (section) => {
    toggleSection(section);
    handleClose();
  };

  const getIconStyle = (iconName) => {
    const baseStyle = { 
      width: '22px', 
      height: '22px', 
      transition: 'all 0.3s ease',
      filter: iconName === 'instagram' ? 'invert(100%)' : 'none'
    };
    
    if (hoveredIcon && hoveredIcon !== iconName) {
      return { ...baseStyle, opacity: 0.5, transform: 'scale(0.95)' };
    }
    return { ...baseStyle, opacity: 1, transform: 'scale(1)' };
  };

  return (
    <Navbar expand="lg" sticky="top" className="modern-navbar">
      <Container fluid className="px-3 px-lg-4">
        <Navbar.Brand 
          onClick={() => handleNavClick(null)} 
          className="navbar-brand-custom"
          role="button"
        >
          KONRAD KUNKEL
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          onClick={handleShow}
          className="modern-toggle"
        />
        
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          className="modern-offcanvas"
        >
          <Offcanvas.Header closeButton className="offcanvas-header-custom">
            <Offcanvas.Title id="offcanvasNavbarLabel">
              MENU
            </Offcanvas.Title>
          </Offcanvas.Header>
          
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 align-items-lg-center gap-2">
              <Nav.Link 
                onClick={() => handleNavClick(null)}
                className={`nav-link-custom ${activeSection === null ? 'active' : ''}`}
              >
                HOME
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavClick('projects')}
                className={`nav-link-custom ${activeSection === 'projects' ? 'active' : ''}`}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavClick('about')}
                className={`nav-link-custom ${activeSection === 'about' ? 'active' : ''}`}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavClick('contact')}
                className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`}
              >
                CONTACT
              </Nav.Link>
              
              <div className="nav-divider d-none d-lg-block"></div>
              
              <div className="social-icons-wrapper d-flex gap-2 mt-3 mt-lg-0">
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  onMouseEnter={() => setHoveredIcon('instagram')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label="Instagram"
                >
                  <img src={InstagramIcon} alt="Instagram" style={getIconStyle('instagram')} />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  onMouseEnter={() => setHoveredIcon('youtube')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label="YouTube"
                >
                  <img src={YoutubeIcon} alt="Youtube" style={getIconStyle('youtube')} />
                </a>
                <a 
                  href="https://www.tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  onMouseEnter={() => setHoveredIcon('tiktok')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label="TikTok"
                >
                  <img src={TiktokIcon} alt="TikTok" style={getIconStyle('tiktok')} />
                </a>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NAV;