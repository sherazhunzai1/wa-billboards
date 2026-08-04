import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <footer className="bg-charcoal border-t border-white/5">
      {/* Ticker Strip */}
      <div className="overflow-hidden py-6 border-b border-white/5">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-outline-white mx-8 select-none">
              WA Billboards
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left - Big CTA */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-lime/70 mb-4 font-bold">Big Spaces for Big Ideas</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let's put your brand<br />
              <span className="text-lime">where it matters.</span>
            </h2>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="tel:0892485070" className="text-chalk hover:text-lime transition-colors">
                08 9248 5070
              </a>
              <a href="mailto:sales@wabillboards.com.au" className="text-chalk hover:text-lime transition-colors">
                sales@wabillboards.com.au
              </a>
            </div>
          </motion.div>

          {/* Right - Links */}
          <div className="flex flex-col gap-6">
            <span className="text-xs tracking-[0.2em] uppercase text-ash">Navigation</span>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-chalk hover:text-lime transition-colors link-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <span className="text-xs tracking-[0.2em] uppercase text-ash block mb-3">Office</span>
              <p className="text-sm text-chalk">40B Boulder Road, MALAGA WA 6090</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ash">&copy; {new Date().getFullYear()} WA Billboards. All rights reserved.</p>
        <p className="text-xs text-ash">Big Spaces for Big Ideas — Family-owned since 1991</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ash hover:text-lime transition-colors"
          aria-label="Back to top"
        >
          Back to top
          <span className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-lime group-hover:-translate-y-0.5 transition-all">
            ↑
          </span>
        </button>
      </div>
    </footer>
  )
}
