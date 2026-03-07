import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import wabLogo from '../assets/images/logo/WAB-Grey-Logo-Small.png'

const navLinks = [
  { path: '/', label: 'Home', num: '01' },
  { path: '/services', label: 'Products', num: '02' },
  { path: '/locations', label: 'Locations', num: '03' },
  { path: '/team', label: 'Team', num: '04' },
  { path: '/land-owners', label: 'Land Owners', num: '05' },
  { path: '/about', label: 'Our Story', num: '06' },
  { path: '/about-billboards', label: 'About Billboards', num: '07' },
  { path: '/contact', label: 'Contact', num: '08' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Top Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-charcoal/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 md:px-12">
          <Link to="/" className="relative z-[60]">
            <img src={wabLogo} alt="WA Billboards" className="h-9 w-auto" />
          </Link>

          {/* Desktop Quick Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="tel:0892485070" className="text-xs tracking-[0.2em] uppercase text-ash hover:text-lime transition-colors">
              08 9248 5070
            </a>
            <Link
              to="/contact"
              className="text-xs tracking-[0.2em] uppercase text-charcoal bg-lime px-5 py-2.5 font-bold hover:bg-lime-dark transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Menu Toggle - Always Visible */}
          <button
            className="relative z-[60] flex items-center gap-3 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-ash group-hover:text-lime transition-colors hidden sm:block">
              {menuOpen ? 'Close' : 'Menu'}
            </span>
            <div className="w-8 h-8 flex flex-col items-end justify-center gap-1.5">
              <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-[5px]' : 'w-8'}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45 -translate-y-[5px]' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-charcoal flex"
            initial={{ clipPath: 'circle(0% at calc(100% - 48px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 48px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 48px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col lg:flex-row w-full h-full">
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 overflow-y-auto">
                <nav className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={link.path}
                        className={`group flex items-center gap-4 py-3 md:py-4 transition-colors duration-200 ${
                          location.pathname === link.path ? 'text-lime' : 'text-white hover:text-lime'
                        }`}
                      >
                        <span className="text-xs font-mono text-ash group-hover:text-lime transition-colors w-6">{link.num}</span>
                        <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">{link.label}</span>
                        {location.pathname === link.path && (
                          <span className="w-2 h-2 bg-lime rounded-full ml-2" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Right Panel - Contact Info */}
              <motion.div
                className="hidden lg:flex flex-col justify-end p-16 w-96 border-l border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-8">
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-ash block mb-3">Address</span>
                    <p className="text-white text-sm leading-relaxed">40B Boulder Road<br />MALAGA WA 6090</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-ash block mb-3">Contact</span>
                    <p className="text-white text-sm">08 9248 5070</p>
                    <p className="text-white text-sm">sales@wabillboards.com.au</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-ash block mb-3">Hours</span>
                    <p className="text-white text-sm">Mon — Fri: 8:30am – 5:00pm</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
