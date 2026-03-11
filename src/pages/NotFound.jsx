import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiHome } from 'react-icons/hi'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <main className="bg-charcoal min-h-screen flex items-center justify-center">
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
            <span
              className="block text-[10rem] md:text-[14rem] font-black leading-none select-none uppercase tracking-tighter"
              style={{
                WebkitTextStroke: '2px #2563EB',
                WebkitTextFillColor: 'transparent',
              }}
            >
              404
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-chalk mb-4 -mt-4">Page Not Found</h1>
            <p className="text-xs tracking-[0.2em] uppercase text-lime/60 mb-4 font-bold">Big Spaces for Big Ideas</p>
            <p className="text-lg text-ash max-w-md mx-auto mb-10">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-lime text-white font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-lime/90">
                <HiHome /> Back to Home
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 border border-black/20 text-chalk font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-black/5">
                Contact Us <HiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
