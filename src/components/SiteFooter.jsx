import instagramIcon from '../assets/icons/instagram.svg';
import youtubeIcon from '../assets/icons/youtube.png';
import linkedinIcon from '../assets/icons/linkedin.svg';
import tiktokIcon from '../assets/icons/tiktok.svg';

function SiteFooter() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: instagramIcon,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: youtubeIcon,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: linkedinIcon,
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com',
      icon: tiktokIcon,
    },
  ];

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
