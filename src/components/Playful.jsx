import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/* ── Spring presets (ui-ux-pro-max tactile guidance: stiffness ~300, damping ~20) ── */
export const springy = { type: 'spring', stiffness: 300, damping: 22 }
export const bouncy = { type: 'spring', stiffness: 420, damping: 15 }

/* ── Reusable variants ── */
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export const popChild = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: springy },
}

export const riseChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: springy },
}

export const MotionLink = motion.create(Link)

/* ── Playful press/hover for buttons ── */
export const pressProps = {
  whileHover: { scale: 1.05, rotate: -1 },
  whileTap: { scale: 0.93 },
  transition: bouncy,
}

/* ── Floating decorative shape ── */
export function Floater({ className = '', delay = 0, duration = 7, children }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

/* ── Decorative blob ── */
export function Blob({ className = '', style }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={style}
    />
  )
}

/* ── Sticker badge with bouncy entrance ── */
export function Sticker({ children, className = '', rotate = -3 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, rotate: rotate * 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true }}
      transition={bouncy}
      className={`inline-block rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider shadow-md ${className}`}
    >
      {children}
    </motion.span>
  )
}

/* ── Section heading with playful reveal ── */
export function SectionHeading({ eyebrow, title, sub, align = 'left', eyebrowClass = 'bg-peach text-primary-deep' }) {
  const centered = align === 'center'
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <motion.div variants={popChild} className="mb-5">
          <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider shadow-sm ${eyebrowClass}`}>
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={popChild}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.05]"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          variants={popChild}
          className={`mt-5 text-ink-soft text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  )
}
