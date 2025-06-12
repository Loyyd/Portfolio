import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg';

const About = () => (
  <div className="about-page">
    <div className="about-profile">
      {/* Profile image imported at top */}
      <img src={profileImage} alt="Profile" className="about-image" />
      <h2 className="about-role">3D Modeler</h2>
      <p className="about-location">Based in [Your City], [Country]</p>
    </div>
    <div className="about-content">
      <h3>About Me</h3>
      <p>
        I am currently a student passionate about 3D modeling and visualization. I have worked on various projects including photorealistic product renders and architectural visualizations.
      </p>
      <ul>
        <li>Student at [Your University]</li>
        <li>Worked at [Company or Project]</li>
      </ul>
    </div>
    <div className="about-links">
      <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="about-link">
        Instagram
      </a>
      <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="about-link">
        YouTube
      </a>
    </div>
  </div>
);

export default About;
