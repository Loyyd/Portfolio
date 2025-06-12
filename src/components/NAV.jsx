import React from "react";


const NAV = ({ toggleSection }) => {
  return (
    
    <div className="nav-wireframe">
        <div className="nav-logo">KONRAD KUNKEL</div>
        <div className="nav-links">
            <div className="nav-link" onClick={() => toggleSection('work')}>WORK</div>
            <div className="nav-link" onClick={() => toggleSection('about')}>ABOUT</div>
            {/* <div className="nav-link">SERVICES</div> */}
            <div className="nav-link" onClick={() => toggleSection('contact')}>CONTACT</div>
        </div>
    </div>
  );
};

export default NAV;