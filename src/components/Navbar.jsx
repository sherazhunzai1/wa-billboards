import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import wabLogo from '../assets/images/logo/WAB-Grey-Logo-Small.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Products' },
  { path: '/locations', label: 'Locations' },
  { path: '/team', label: 'Team' },
  { path: '/land-owners', label: 'Land Owners' },
  {
    label: 'About',
    dropdown: [
      { path: '/about', label: 'Our Story' },
      { path: '/about-billboards', label: 'About Billboards' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={wabLogo} alt="WA Billboards" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isAboutActive ? 'text-orange bg-orange/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 glass-dark rounded-2xl overflow-hidden shadow-2xl shadow-black/30 py-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-5 py-3 text-sm transition-all duration-200 ${
                              location.pathname === item.path ? 'text-orange bg-orange/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path ? 'text-orange bg-orange/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange to-coral text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange/30 hover:scale-105 active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-white transition-all duration-300 hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isAboutActive ? 'text-orange bg-orange/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {link.label}
                      <HiChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-4 py-3 rounded-xl text-sm ${
                                location.pathname === item.path ? 'text-orange' : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      location.pathname === link.path ? 'text-orange bg-orange/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block text-center px-6 py-3 bg-gradient-to-r from-orange to-coral text-white text-sm font-semibold rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
