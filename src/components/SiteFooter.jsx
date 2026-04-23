import { socialLinks } from '../data/socialLinks';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="social-links">
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
        <p className="footer-text">© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
