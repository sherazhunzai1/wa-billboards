import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi'
import wabLogo from '../assets/images/logo/WAB-Grey-Logo-Small.png'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  {
    label: 'About',
    dropdown: [
      { path: '/about', label: 'Our Story' },
      { path: '/about-billboards', label: 'About Billboards' },
    ],
  },
  { path: '/services', label: 'Services' },
  { path: '/locations', label: 'Locations' },
  { path: '/team', label: 'Team' },
  { path: '/land-owners', label: 'Land Owners' },
  { path: '/biosentry-ids', label: 'Biosentry IDS' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/news', label: 'News' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isAboutActive = location.pathname === '/about' || location.pathname === '/about-billboards'

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          <img src={wabLogo} alt="WA Billboards" className="navbar__logo-img" />
        </Link>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className={`navbar__dropdown ${dropdownOpen ? 'navbar__dropdown--open' : ''}`}
                ref={dropdownRef}
              >
                <button
                  className={`navbar__link navbar__dropdown-trigger ${isAboutActive ? 'navbar__link--active' : ''}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  {link.label} <HiChevronDown className="navbar__dropdown-arrow" />
                </button>
                <div className="navbar__dropdown-menu">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`navbar__dropdown-item ${location.pathname === item.path ? 'navbar__dropdown-item--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact" className="btn btn-primary navbar__cta">
            Get a Quote
          </Link>
        </div>

        <button
          className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
    </nav>
  )
}
