import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import wabLogo from '../assets/images/logo/WAB-Grey-Logo-Small.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H0V60Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="footer__content">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">
                <img src={wabLogo} alt="WA Billboards" className="footer__logo-img" />
              </div>
              <p className="footer__description">
                Western Australia's largest privately owned outdoor media company.
                Delivering impactful advertising solutions since 1991.
              </p>
              <div className="footer__socials">
                <a href="#" className="footer__social" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className="footer__social" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>

            <div className="footer__section">
              <h4 className="footer__heading">Quick Links</h4>
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/about" className="footer__link">About Us</Link>
              <Link to="/services" className="footer__link">Services</Link>
              <Link to="/locations" className="footer__link">Locations</Link>
              <Link to="/team" className="footer__link">Our Team</Link>
              <Link to="/land-owners" className="footer__link">Land Owners</Link>
              <Link to="/biosentry-ids" className="footer__link">Biosentry IDS</Link>
              <Link to="/contact" className="footer__link">Contact</Link>
            </div>

            <div className="footer__section">
              <h4 className="footer__heading">Services</h4>
              <Link to="/services" className="footer__link">Billboards</Link>
              <Link to="/services" className="footer__link">Airport Advertising</Link>
              <Link to="/services" className="footer__link">Digital Displays</Link>
              <Link to="/locations" className="footer__link">Regional Coverage</Link>
              <Link to="/contact" className="footer__link">Custom Solutions</Link>
            </div>

            <div className="footer__section">
              <h4 className="footer__heading">Contact</h4>
              <div className="footer__contact-item">
                <HiLocationMarker className="footer__contact-icon" />
                <span>Boulder Road, Malaga WA</span>
              </div>
              <div className="footer__contact-item">
                <HiPhone className="footer__contact-icon" />
                <span>(08) 9248 6600</span>
              </div>
              <div className="footer__contact-item">
                <HiMail className="footer__contact-icon" />
                <span>info@wabillboards.com.au</span>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} WA Billboards. All rights reserved.</p>
            <p>Proudly family-owned since 1991</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
