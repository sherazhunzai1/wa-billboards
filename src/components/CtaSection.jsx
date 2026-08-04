import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-gradient-to-br from-lime-muted via-lime-dark to-lime p-12 md:p-20"
        >
          <div className={`relative z-10 ${centered ? 'text-center' : ''}`}>
            <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-bold mb-6">
              WA Billboards — Since 1991
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.05]">
              {title}
            </h2>
            {subtitle && (
              <p className={`text-white/70 text-lg mb-10 ${centered ? 'max-w-xl mx-auto' : 'max-w-xl'}`}>
                {subtitle}
              </p>
            )}
            {(primary || secondary) && (
              <div className={`flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
                {primary && (
                  <Link
                    to={primary.to}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal font-bold text-sm uppercase tracking-[0.1em] hover:bg-white/90 transition-colors"
                  >
                    {primary.label} <span className="text-lg">→</span>
                  </Link>
                )}
                {secondary && (
                  <Link
                    to={secondary.to}
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold text-sm uppercase tracking-[0.1em] hover:bg-white/10 transition-colors"
                  >
                    {secondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
          <div
            aria-hidden
            className="absolute top-0 right-0 text-[12rem] font-black text-white/5 leading-none select-none hidden md:block uppercase tracking-tighter pointer-events-none"
          >
            {ghost}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
