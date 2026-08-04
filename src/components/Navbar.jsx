import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiPhone } from 'react-icons/hi'
import { MotionLink, bouncy, springy, staggerParent, popChild } from './Playful'
import wabLogo from '../assets/images/logo/WAB-Grey-Logo-Small.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Products' },
  { path: '/locations', label: 'Locations' },
  { path: '/team', label: 'Team' },
  { path: '/land-owners', label: 'Land Owners' },
]

const aboutLinks = [
  { path: '/about', label: 'Our Story' },
  { path: '/about-billboards', label: 'About Billboards' },
]

const allMobileLinks = [
  ...navLinks,
  ...aboutLinks,
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const aboutRef = useRef(null)
  const aboutTimeout = useRef(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setAboutOpen(false)
  }, [location])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close about dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isAboutActive = aboutLinks.some(l => location.pathname === l.path)

  const handleAboutEnter = () => {
    clearTimeout(aboutTimeout.current)
    setAboutOpen(true)
  }

  const handleAboutLeave = () => {
    aboutTimeout.current = setTimeout(() => setAboutOpen(false), 150)
  }

  return (
    <>
      {/* ── Floating Pill Nav ── */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springy}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4"
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between gap-2 rounded-full border border-ink/5 bg-white/90 backdrop-blur-lg pl-4 pr-2 sm:pl-6 sm:pr-2.5 py-2 transition-shadow duration-300 ${
            scrolled ? 'shadow-soft-lg' : 'shadow-soft'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="relative z-[60] shrink-0 rounded-full">
            <motion.img
              src={wabLogo}
              alt="WA Billboards"
              className="h-8 w-auto"
              whileHover={{ rotate: -4, scale: 1.06 }}
              transition={bouncy}
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-extrabold rounded-full transition-colors duration-200 ${
                    active ? 'text-primary-deep' : 'text-ink-soft hover:text-primary-deep'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-peach rounded-full"
                      transition={bouncy}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              )
            })}

            {/* About Dropdown */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-extrabold rounded-full transition-colors duration-200 ${
                  isAboutActive ? 'text-primary-deep' : 'text-ink-soft hover:text-primary-deep'
                }`}
              >
                {isAboutActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-peach rounded-full"
                    transition={bouncy}
                  />
                )}
                <span className="relative flex items-center gap-1">
                  About
                  <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`} />
                </span>
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={springy}
                    className="absolute top-full left-0 mt-2 min-w-[210px] bg-white rounded-2xl border border-ink/5 shadow-soft-lg p-2 overflow-hidden"
                  >
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-colors duration-150 ${
                          location.pathname === link.path
                            ? 'text-primary-deep bg-peach'
                            : 'text-ink-soft hover:text-primary-deep hover:bg-peach/60'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right Side: CTA + Hamburger ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:0892485070"
              className="hidden md:flex items-center gap-1.5 text-sm font-extrabold text-ink-soft hover:text-primary-deep transition-colors px-2"
            >
              <HiPhone className="w-4 h-4" />
              08 9248 5070
            </a>

            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              transition={bouncy}
              className="hidden sm:inline-flex btn-pop bg-primary-dark text-white text-sm px-5 py-2.5 shadow-pop hover:bg-primary"
            >
              Contact Us
            </MotionLink>

            {/* Hamburger - Mobile Only */}
            <motion.button
              className="lg:hidden relative z-[60] w-10 h-10 rounded-full bg-peach flex flex-col items-center justify-center gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              whileTap={{ scale: 0.88 }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                transition={springy}
                className="block w-5 h-[2.5px] bg-primary-deep rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                transition={springy}
                className="block w-5 h-[2.5px] bg-primary-deep rounded-full"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream bg-dots lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="flex flex-col justify-center h-full px-6 pt-24 pb-10 overflow-y-auto"
              variants={staggerParent}
              initial="hidden"
              animate="show"
            >
              <nav className="space-y-3">
                {allMobileLinks.map((link, i) => {
                  const active = location.pathname === link.path
                  return (
                    <motion.div key={link.path} variants={popChild}>
                      <Link
                        to={link.path}
                        className={`group flex items-center gap-4 rounded-3xl px-5 py-4 shadow-soft transition-colors duration-200 ${
                          active ? 'bg-peach' : 'bg-white hover:bg-peach/60'
                        }`}
                      >
                        <span className={`text-xs font-black ${active ? 'text-primary' : 'text-sand'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-2xl sm:text-3xl font-semibold ${active ? 'text-primary-deep' : 'text-ink'}`}>
                          {link.label}
                        </span>
                        {active && (
                          <motion.span
                            layoutId="mobile-active-dot"
                            className="ml-auto w-2.5 h-2.5 bg-primary rounded-full"
                            transition={bouncy}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Mobile Contact Info */}
              <motion.div variants={popChild} className="mt-8 flex flex-col gap-3 px-2">
                <a
                  href="tel:0892485070"
                  className="flex items-center gap-2 text-sm font-extrabold text-ink-soft hover:text-primary-deep transition-colors"
                >
                  <HiPhone className="w-4 h-4 text-primary" /> 08 9248 5070
                </a>
                <a
                  href="mailto:sales@wabillboards.com.au"
                  className="text-sm font-extrabold text-ink-soft hover:text-primary-deep transition-colors"
                >
                  sales@wabillboards.com.au
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
