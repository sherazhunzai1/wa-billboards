import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { motion } from 'framer-motion'
import wabLogo from '../assets/images/logo/WAB-Grey-Logo-Small.png'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Products' },
  { to: '/locations', label: 'Locations' },
  { to: '/team', label: 'Our Team' },
  { to: '/land-owners', label: 'Land Owners' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { to: '/services', label: 'Billboards' },
  { to: '/services', label: 'Airport Advertising' },
  { to: '/services', label: 'Digital Displays' },
  { to: '/locations', label: 'Regional Coverage' },
  { to: '/contact', label: 'Custom Solutions' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-dark-light">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H0V60Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="bg-dark-light relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral/5 rounded-full blur-3xl"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={wabLogo} alt="WA Billboards" className="h-12 w-auto mb-6"/>
              <p className="text-slate-400 text-sm leading-relaxed">
                Western Australia's largest privately owned outdoor media company. Delivering impactful advertising solutions since 1991.
              </p>
              <div className="mt-6 flex gap-3">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-orange to-coral"/>
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-coral to-magenta"/>
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-magenta to-cyan"/>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((l) => (
                  <Link key={l.to+l.label} to={l.to} className="block text-slate-400 text-sm hover:text-orange transition-colors duration-300">{l.label}</Link>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Services</h4>
              <div className="space-y-3">
                {serviceLinks.map((l) => (
                  <Link key={l.label} to={l.to} className="block text-slate-400 text-sm hover:text-orange transition-colors duration-300">{l.label}</Link>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><HiLocationMarker className="w-5 h-5 text-orange mt-0.5 shrink-0"/><span className="text-slate-400 text-sm">40B Boulder Road, MALAGA 6090</span></div>
                <div className="flex items-center gap-3"><HiPhone className="w-5 h-5 text-orange shrink-0"/><span className="text-slate-400 text-sm">08 9248 5070</span></div>
                <div className="flex items-center gap-3"><HiMail className="w-5 h-5 text-orange shrink-0"/><span className="text-slate-400 text-sm">sales@wabillboards.com.au</span></div>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} WA Billboards. All rights reserved.</p>
            <p className="text-slate-500 text-sm">Proudly family-owned since 1991</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
