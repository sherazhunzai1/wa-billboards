import { motion } from 'framer-motion'
import { HiArrowRight, HiHome } from 'react-icons/hi'
import { MotionLink, Floater, bouncy, staggerParent, popChild } from '../components/Playful'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center text-ink relative overflow-hidden">
      <SEO
        title="Page Not Found"
        path="/404"
        description="The page you're looking for doesn't exist. Browse WA Billboards for outdoor advertising, billboard locations, airport ads and digital displays across Western Australia."
        noindex={true}
      />

      {/* Floating decorations */}
      <Floater className="top-24 left-10 md:left-24" duration={7}>
        <div className="w-16 h-16 rounded-full bg-peach" />
      </Floater>
      <Floater className="bottom-32 right-10 md:right-24" delay={1} duration={8}>
        <div className="w-10 h-10 rounded-2xl bg-sun/60 rotate-12" />
      </Floater>
      <Floater className="top-1/3 right-16 hidden md:block" delay={0.5} duration={9}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 4v28M4 18h28" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
        </svg>
      </Floater>

      <section className="w-full py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center"
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={popChild}>
              <motion.span
                className="block text-[8rem] md:text-[12rem] font-semibold leading-none select-none text-primary"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                404
              </motion.span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-3xl md:text-5xl font-semibold text-ink mb-4">
              Oops — wrong turn!
            </motion.h1>
            <motion.p variants={popChild} className="text-xs font-extrabold uppercase tracking-wider text-primary-deep mb-4">
              Big Spaces for Big Ideas
            </motion.p>
            <motion.p variants={popChild} className="text-lg text-ink-soft font-semibold max-w-md mx-auto mb-10">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </motion.p>
            <motion.div variants={popChild} className="flex flex-col sm:flex-row gap-4 justify-center">
              <MotionLink
                to="/"
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.92 }}
                transition={bouncy}
                className="btn-pop bg-primary-dark text-white px-8 py-4 shadow-pop hover:bg-primary"
              >
                <HiHome /> Back to Home
              </MotionLink>
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.06, rotate: 1 }}
                whileTap={{ scale: 0.92 }}
                transition={bouncy}
                className="btn-pop bg-white text-ink border-2 border-ink/10 px-8 py-4 shadow-soft hover:border-sand"
              >
                Contact Us <HiArrowRight />
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
