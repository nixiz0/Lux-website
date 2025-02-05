import './footer.css';

import youtube_logo from '../../0-ressources/footer/youtube.png';
import instagram_logo from '../../0-ressources/footer/instagram.png';
import email_logo from '../../0-ressources/footer/email.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-social">
          <a href="https://www.youtube.com/@Initium0_0/videos" target="_blank" rel="noopener noreferrer">
            <img src={youtube_logo} alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/real_initium" target="_blank" rel="noopener noreferrer">
            <img src={instagram_logo} alt="Instagram" />
          </a>
          <a href="mailto:initiumcontactus@gmail.com">
            <img src={email_logo} alt="Email" />
          </a>
        </div>
        <ul className="footer-links">
          <li>&copy;2025 Hey-Initium. Tous droits réservés.</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;