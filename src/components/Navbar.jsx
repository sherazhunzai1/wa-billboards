import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
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
  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

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
      {/* ── Horizontal Nav Bar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-md border-b border-white/5'
            : 'bg-charcoal/80 backdrop-blur-sm'
        }`}
      >
        {/* Scroll progress */}
        <motion.div
          style={{ scaleX: progressScaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime origin-left"
          aria-hidden
        />

        <div className="flex items-center justify-between h-[72px] px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="relative z-[60] shrink-0">
            <img src={wabLogo} alt="WA Billboards" className="h-8 w-auto" />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1 ml-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-[13px] tracking-[0.12em] uppercase font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-lime'
                    : 'text-chalk/80 hover:text-lime'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-lime"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* About Dropdown */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 text-[13px] tracking-[0.12em] uppercase font-medium transition-colors duration-200 ${
                  isAboutActive ? 'text-lime' : 'text-chalk/80 hover:text-lime'
                }`}
              >
                About
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                </svg>
                {isAboutActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-lime"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-1 min-w-[200px] bg-charcoal border border-white/10 shadow-2xl overflow-hidden"
                  >
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-5 py-3 text-[13px] tracking-[0.08em] uppercase transition-colors duration-150 ${
                          location.pathname === link.path
                            ? 'text-lime bg-white/5'
                            : 'text-chalk/70 hover:text-lime hover:bg-white/5'
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
          <div className="flex items-center gap-4">
            <a
              href="tel:0892485070"
              className="hidden md:block text-xs tracking-[0.15em] uppercase text-ash hover:text-lime transition-colors"
            >
              08 9248 5070
            </a>

            <Link
              to="/contact"
              className="hidden sm:block text-xs tracking-[0.15em] uppercase text-white bg-lime px-5 py-2.5 font-bold hover:bg-lime-dark transition-colors"
            >
              Contact Us
            </Link>

            {/* Hamburger - Mobile Only */}
            <button
              className="lg:hidden relative z-[60] flex items-center gap-3 group p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-7 h-7 flex flex-col items-end justify-center gap-1.5">
                <span
                  className={`block h-[2px] bg-white transition-all duration-300 ${
                    menuOpen ? 'w-7 rotate-45 translate-y-[5px]' : 'w-7'
                  }`}
                />
                <span
                  className={`block h-[2px] bg-white transition-all duration-300 ${
                    menuOpen ? 'w-7 -rotate-45 -translate-y-[5px]' : 'w-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-center h-full px-8 md:px-16 pt-24 pb-12 overflow-y-auto">
              <nav className="space-y-1">
                {allMobileLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.04,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`group flex items-center gap-4 py-3 transition-colors duration-200 ${
                        location.pathname === link.path
                          ? 'text-lime'
                          : 'text-white hover:text-lime'
                      }`}
                    >
                      <span className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase">
                        {link.label}
                      </span>
                      {location.pathname === link.path && (
                        <span className="w-2 h-2 bg-lime rounded-full" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <motion.div
                className="mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-ash">
                  <a
                    href="tel:0892485070"
                    className="hover:text-lime transition-colors"
                  >
                    08 9248 5070
                  </a>
                  <span className="hidden sm:block text-white/20">|</span>
                  <a
                    href="mailto:sales@wabillboards.com.au"
                    className="hover:text-lime transition-colors"
                  >
                    sales@wabillboards.com.au
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
