import { socialLinks } from '../data/socialLinks';

function SiteHeader({ currentPath, pages, onNavigate }) {
  const navPaths = Object.keys(pages).filter((path) => path !== '/about');

  return (
    <header className="site-header">
      <div className="nav-social-links" aria-label="Social media links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={link.name}
            title={link.name}
          >
            <img className="social-icon-image" src={link.icon} alt={link.name} />
          </a>
        ))}
      </div>

      <nav className="site-nav" aria-label="Primary">
        {navPaths.map((path) => (
          <button
            key={path}
            className={`nav-link${currentPath === path ? ' is-active' : ''}`}
            type="button"
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
