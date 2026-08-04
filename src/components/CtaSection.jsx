import { motion } from 'framer-motion'
import { MotionLink, Floater, bouncy, springy } from './Playful'

export default function CtaSection({
  title = (
    <>
      Big Spaces<br />for Big Ideas.
    </>
  ),
  subtitle,
  primary,
  secondary,
  align = 'left',
  ghost = 'Big Ideas',
}) {
  const centered = align === 'center'

  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={springy}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-dark to-primary-deep p-10 md:p-16 lg:p-20 shadow-soft-lg"
        >
          {/* Floating decorations */}
          <Floater className="top-10 right-10 hidden md:block" duration={6}>
            <div className="w-16 h-16 rounded-full bg-white/15" />
          </Floater>
          <Floater className="bottom-12 right-1/4 hidden md:block" delay={1.2} duration={8}>
            <div className="w-8 h-8 rounded-xl bg-sun/60 rotate-12" />
          </Floater>
          <Floater className="top-1/3 right-1/3 hidden lg:block" delay={0.6} duration={7}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M17 4v26M4 17h26" stroke="rgba(255,255,255,0.35)" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </Floater>

          <div className={`relative z-10 ${centered ? 'text-center' : ''}`}>
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={bouncy}
              className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white mb-6"
            >
              WA Billboards — Since 1991
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-[1.05]">
              {title}
            </h2>
            {subtitle && (
              <p className={`text-white/85 text-lg font-semibold mb-10 ${centered ? 'max-w-xl mx-auto' : 'max-w-xl'}`}>
                {subtitle}
              </p>
            )}
            {(primary || secondary) && (
              <div className={`flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
                {primary && (
                  <MotionLink
                    to={primary.to}
                    whileHover={{ scale: 1.06, rotate: -1 }}
                    whileTap={{ scale: 0.92 }}
                    transition={bouncy}
                    className="btn-pop bg-white text-primary-deep px-8 py-4 text-sm shadow-lg hover:shadow-xl"
                  >
                    {primary.label} <span className="text-base">→</span>
                  </MotionLink>
                )}
                {secondary && (
                  <MotionLink
                    to={secondary.to}
                    whileHover={{ scale: 1.06, rotate: 1 }}
                    whileTap={{ scale: 0.92 }}
                    transition={bouncy}
                    className="btn-pop border-2 border-white/50 text-white px-8 py-4 text-sm hover:bg-white/10"
                  >
                    {secondary.label}
                  </MotionLink>
                )}
              </div>
            )}
          </div>
          <div
            aria-hidden
            className="absolute -bottom-8 right-0 text-[11rem] font-semibold text-white/10 leading-none select-none hidden md:block tracking-tight pointer-events-none"
          >
            {ghost}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
