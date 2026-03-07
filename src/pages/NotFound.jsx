import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiHome } from 'react-icons/hi'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-magenta/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

      <SEO
        title="Page Not Found"
        path="/404"
        description="The page you're looking for doesn't exist. Browse WA Billboards for outdoor advertising, billboard locations, airport ads and digital displays across Western Australia."
        noindex={true}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="block text-[10rem] md:text-[14rem] font-black leading-none gradient-text select-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            404
          </motion.span>

          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto mb-10">
            Sorry, the page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange to-coral text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange/30 hover:scale-105 transition-all duration-300"
            >
              <HiHome /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Contact Us <HiArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
