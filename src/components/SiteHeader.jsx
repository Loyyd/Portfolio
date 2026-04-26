import { useState } from 'react';
import { socialLinks } from '../data/socialLinks';

function SiteHeader({ currentPath, pages, onNavigate }) {
  const navPaths = Object.keys(pages).filter((path) => path !== '/about');
  const [activeSocial, setActiveSocial] = useState(null);
  const [activeNav, setActiveNav] = useState(null);

  return (
    <header className="site-header">
      <div
        className={`nav-social-links${activeSocial ? ' is-social-hovering' : ''}`}
        aria-label="Social media links"
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

      <nav
        className={`site-nav${activeNav ? ' is-nav-hovering' : ''}`}
        aria-label="Primary"
        onMouseLeave={() => setActiveNav(null)}
      >
        {navPaths.map((path) => (
          <button
            key={path}
            className={`nav-link${currentPath === path ? ' is-active' : ''}${activeNav === path ? ' is-hovered' : ''}`}
            type="button"
            onMouseEnter={() => setActiveNav(path)}
            onFocus={() => setActiveNav(path)}
            onBlur={() => setActiveNav(null)}
            onClick={() => onNavigate(path)}
          >
            {pages[path].label}
          </button>
        ))}
      </nav>

      <button className="brand-mark" type="button" onClick={() => onNavigate('/about')}>
        KONRAD KUNKEL
      </button>
    </header>
  );
}

export default SiteHeader;
