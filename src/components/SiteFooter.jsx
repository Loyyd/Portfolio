import { useState } from 'react';
import { socialLinks } from '../data/socialLinks';

function SiteFooter() {
  const [activeSocial, setActiveSocial] = useState(null);

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div
          className={`social-links${activeSocial ? ' is-social-hovering' : ''}`}
          onMouseLeave={() => setActiveSocial(null)}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon${activeSocial === link.name ? ' is-active' : ''}`}
              aria-label={link.name}
              title={link.name}
              onMouseEnter={() => setActiveSocial(link.name)}
              onFocus={() => setActiveSocial(link.name)}
              onBlur={() => setActiveSocial(null)}
            >
              <img className="social-icon-image" src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
        <p className="footer-text">© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
