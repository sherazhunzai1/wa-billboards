import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowUp, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { MotionLink, bouncy, staggerParent, popChild } from './Playful'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Products' },
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-peach/60 border-t-2 border-sand/60 overflow-hidden">
      {/* Ticker Strip */}
      <div className="overflow-hidden py-8 border-b-2 border-sand/50">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center text-5xl md:text-7xl font-semibold text-outline-pop mx-6 select-none">
              WA Billboards
              <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-primary/30 rounded-full mx-6 md:mx-10" />
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <motion.div
        className="px-6 md:px-12 py-16 md:py-20 max-w-7xl mx-auto"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left - Big CTA */}
          <motion.div variants={popChild} className="max-w-xl">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-deep shadow-sm mb-5">
              Big Spaces for Big Ideas
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-ink leading-[1.08] mb-6">
              Let's put your brand{' '}
              <span className="text-primary squiggle">where it matters.</span>
            </h2>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="tel:0892485070" className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-ink hover:text-primary-deep shadow-sm transition-colors">
                <HiPhone className="text-primary" /> 08 9248 5070
              </a>
              <a href="mailto:sales@wabillboards.com.au" className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-ink hover:text-primary-deep shadow-sm transition-colors">
                <HiMail className="text-primary" /> sales@wabillboards.com.au
              </a>
            </div>
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.93 }}
              transition={bouncy}
              className="btn-pop bg-primary-dark text-white px-7 py-3.5 shadow-pop hover:bg-primary"
            >
              Start a conversation →
            </MotionLink>
          </motion.div>

          {/* Right - Links */}
          <motion.div variants={popChild} className="flex flex-col gap-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-primary-deep/70">Navigation</span>
            <div className="flex flex-wrap gap-2 max-w-md">
              {footerLinks.map((link) => (
                <MotionLink
                  key={link.to}
                  to={link.to}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  transition={bouncy}
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-ink-soft hover:text-primary-deep shadow-sm transition-colors"
                >
                  {link.label}
                </MotionLink>
              ))}
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm text-ink-soft">
              <HiLocationMarker className="text-primary w-5 h-5 shrink-0" />
              <p className="font-bold">40B Boulder Road, MALAGA WA 6090</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 py-6 border-t-2 border-sand/50 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <p className="text-xs font-bold text-ink-soft">&copy; {new Date().getFullYear()} WA Billboards. All rights reserved.</p>
        <p className="text-xs font-bold text-ink-soft">Family-owned &amp; operated since 1991</p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-primary-deep"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={bouncy}
          aria-label="Back to top"
        >
          Back to top
          <span className="w-9 h-9 rounded-full bg-primary-dark text-white flex items-center justify-center shadow-pop group-hover:bg-primary transition-colors">
            <HiArrowUp className="w-4 h-4" />
          </span>
        </motion.button>
      </div>
    </footer>
  )
}
