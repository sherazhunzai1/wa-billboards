import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiHome } from 'react-icons/hi'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen flex items-center justify-center">
      <SEO
        title="Page Not Found"
        path="/404"
        description="The page you're looking for doesn't exist. Browse WA Billboards for outdoor advertising, billboard locations, airport ads and digital displays across Western Australia."
        noindex={true}
      />

      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[10rem] md:text-[14rem] font-black leading-none gradient-text select-none">404</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 -mt-4">Page Not Found</h1>
            <p className="text-lg text-white/60 max-w-md mx-auto mb-10">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                <HiHome /> Back to Home
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300">
                Contact Us <HiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
