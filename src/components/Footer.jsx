import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

import wabLogo from '../assets/images/logo/WAB-Grey-Logo-Small.png'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo(0, 0)

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
            </div>

            <div className="footer__section">
              <h4 className="footer__heading">Quick Links</h4>
              <Link to="/" className="footer__link" onClick={scrollTop}>Home</Link>
              <Link to="/about" className="footer__link" onClick={scrollTop}>About Us</Link>
              <Link to="/services" className="footer__link" onClick={scrollTop}>Products</Link>
              <Link to="/locations" className="footer__link" onClick={scrollTop}>Locations</Link>
              <Link to="/land-owners" className="footer__link" onClick={scrollTop}>Land Owners</Link>
              <Link to="/contact" className="footer__link" onClick={scrollTop}>Contact</Link>
            </div>

            <div className="footer__section">
              <h4 className="footer__heading">Services</h4>
              <Link to="/services#billboards" className="footer__link" onClick={scrollTop}>Billboards</Link>
              <Link to="/services#airports" className="footer__link" onClick={scrollTop}>Airport Advertising</Link>
              <Link to="/services#digital" className="footer__link" onClick={scrollTop}>Digital Displays</Link>
              <Link to="/locations" className="footer__link" onClick={scrollTop}>Regional Coverage</Link>
              <Link to="/contact" className="footer__link" onClick={scrollTop}>Custom Solutions</Link>
            </div>

            <div className="footer__section">
              <h4 className="footer__heading">Contact</h4>
              <div className="footer__contact-item">
                <HiLocationMarker className="footer__contact-icon" />
                <span>40B Boulder Road, MALAGA 6090</span>
              </div>
              <div className="footer__contact-item">
                <HiPhone className="footer__contact-icon" />
                <span>08 9248 5070</span>
              </div>
              <div className="footer__contact-item">
                <HiMail className="footer__contact-icon" />
                <span>sales@wabillboards.com.au</span>
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
