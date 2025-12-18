import React from 'react';
import './Projects.css';

import catboticaBg from '../assets/images/projects/catbotica/catbotica-bg.webp';
import logo from '../assets/images/projects/catbotica/catbotica_logo_white.webp';
import websiteBtn from '../assets/images/projects/catbotica/Catbotica+Website.webp';
import discordBtn from '../assets/images/projects/catbotica/Catbotica+Discord.webp';

import code8part2Bg from '../assets/images/projects/code-8part-2/code-8-part2.jpg';

const Projects = () => (
  <main className="projects-page">
    <section
      className="project-section catbotica-section fixed-bg"
      style={{
        backgroundImage: `url(${catboticaBg})`,
      }}
    >
      <div className="catbotica-inner">
        <div className="catbotica-info">
          <img src={logo} alt="Catbotica logo" className="catbotica-logo" />
          <p className="catbotica-desc">
            Motiontonic is proud to be a part of CATBOTICA™, a thrilling tale that follows the creation of a hand drawn,
            generative art collection. With a deep and exciting narrative, full of suspense, ancient mysteries and
            heartwarming romance, join a plethora of characters spinning a yarn ball of galactic proportions!
          </p>

          <div className="catbotica-cta">
            <a
              className="cat-btn cat-btn-website"
              href="#"
              aria-label="Visit Catbotica website"
              target="_blank"
              rel="noreferrer"
            >
              <img src={websiteBtn} alt="Catbotica website button" />
            </a>

            <a
              className="cat-btn cat-btn-discord"
              href="#"
              aria-label="Join Catbotica Discord"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discordBtn} alt="Catbotica discord button" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      className="project-section code8part2-section fixed-bg"
      style={{
        backgroundImage: `url(${code8part2Bg})`,
      }}
    >
      <div className="project-inner">
        <div className="project-info">
          <h2 className="project-title">Code 8 Part 2</h2>
          <p className="project-desc">
            Description for Code 8 Part 2 project. Add your project details here.
          </p>
          {/* Add CTA buttons if needed */}
        </div>
      </div>
    </section>
  </main>
);

export default Projects;
