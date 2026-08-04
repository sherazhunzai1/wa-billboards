import { motion } from 'framer-motion'
import CtaSection from '../components/CtaSection'
import { MotionLink, SectionHeading, Floater, bouncy, springy, staggerParent, popChild } from '../components/Playful'
import { galleryImages } from '../assets/billboardImages'
import aboutHeroImg from '../assets/images/about us/IMG_6101-1-1536x624.jpg'
import teamStephen from '../assets/images/team/Stephen Robinson.jpeg'
import teamChristopher from '../assets/images/team/Christopher Robinson.jpeg'
import teamRebecca from '../assets/images/team/Rebecca Zaubzer.jpeg'
import SEO from '../components/SEO'

const timeline = [
  { year: '1984', title: 'Industry Beginnings', desc: 'Stephen Robinson enters the outdoor media industry with a display company.' },
  { year: '1989', title: 'Australian Posters', desc: 'Stephen recruited by Australian Posters as Specialist Development Officer.' },
  { year: '1991', title: 'WA Billboards Founded', desc: 'Stephen and Kerry Robinson establish WA Billboards.' },
  { year: '2010', title: 'Christopher Joins', desc: 'Son Christopher joins the team, managing operations, site maintenance and material changes.' },
  { year: '2015+', title: 'Team Expansion', desc: 'Sales & Marketing Manager and son Mitchell welcomed to the growing team.' },
  { year: 'Today', title: 'Market Leaders', desc: 'The largest domestic operator of outdoor media in Western Australia.' },
]

const values = [
  { num: '01', title: 'Family Values', desc: 'Proudly family-owned and operated since 1991, maintaining our independence and commitment to quality.' },
  { num: '02', title: 'Quick Response', desc: 'Our independence means we can react quickly to client and landowner requirements without corporate delays.' },
  { num: '03', title: 'Built to Last', desc: 'Our extreme condition billboards are built in-house to withstand cyclone-prone areas of WA.' },
]

const teamMembers = [
  { name: 'Stephen Robinson', role: 'Founder & Managing Director', image: teamStephen },
  { name: 'Christopher Robinson', role: 'Operations Manager', image: teamChristopher },
  { name: 'Mitchell Robinson', role: 'Sales Manager', image: null },
  { name: 'Rebecca Zaubzer', role: 'Finance Officer', image: teamRebecca },
]

export default function About() {
  return (
    <main className="bg-cream min-h-screen text-ink">
      <SEO
        title="About Us — Family-Owned Billboard Company Since 1991"
        path="/about"
        description="WA Billboards is Western Australia's largest privately owned outdoor media company, founded in 1991 by the Robinson family. 200+ billboard sites across Perth metro & regional WA with in-house manufacturing."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden flex items-end">
        <motion.img
          src={aboutHeroImg}
          alt="WA Billboards office and billboard operations in Western Australia"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-ink/50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={popChild} className="mb-6">
              <span className="inline-block rounded-full bg-sun px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-ink shadow-lg -rotate-2">
                Our Story
              </span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-5xl md:text-7xl font-semibold leading-[1.02] text-white mb-5">
              About<br />WA Billboards
            </motion.h1>
            <motion.p variants={popChild} className="text-lg md:text-xl text-white/90 font-semibold max-w-xl">
              Big Spaces for Big Ideas — Western Australia's largest privately owned, dedicated outdoor media company since 1991.
            </motion.p>
          </motion.div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full text-cream pointer-events-none"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,55 C240,95 480,20 720,45 C960,70 1200,25 1440,55 L1440,90 L0,90 Z" fill="currentColor" />
        </svg>
      </section>

      {/* ── Story Section ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <Floater className="top-24 right-8 hidden lg:block" duration={9}>
          <div className="w-20 h-20 rounded-full bg-peach/80" />
        </Floater>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <SectionHeading
            eyebrow="Since 1991"
            title={<>A family legacy <span className="text-primary">in outdoor media</span></>}
          />

          {/* Text + pull-quote */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
            >
              <p className="text-ink-soft font-semibold leading-relaxed mb-5">
                WA Billboards was founded in 1991 by Stephen and Kerry Robinson, and has grown to be the
                largest domestic operator of outdoor media in Western Australia. Stephen started in the
                industry in 1984 with an outdoor display company before being recruited by Australian
                Posters in 1989, where he worked as a Specialist Development Officer.
              </p>
              <p className="text-ink-soft font-semibold leading-relaxed mb-5">
                Kerry held a senior position at the Commonwealth Bank. In 2010 their son Christopher
                joined the WA Billboards team and runs the operational aspects of the business including
                site maintenance and material changes. Over several years the business expanded welcoming
                a Sales & Marketing Manager, and Stephen and Kerry's second son Mitchell to the team.
              </p>
              <p className="text-ink-soft font-semibold leading-relaxed">
                WA Billboards is the last privately owned, dedicated outdoor media company in Western
                Australia. It successfully trades in a highly regulated, competitive market by offering
                clients a broad range of outdoor media options across metropolitan and regional WA.
              </p>
            </motion.div>

            {/* Pull-quote */}
            <motion.div
              className="lg:col-span-5 flex items-center"
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={bouncy}
            >
              <blockquote className="relative bg-white rounded-[2rem] shadow-soft border-2 border-ink/5 p-8 md:p-10">
                <span className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-semibold shadow-pop">
                  &rdquo;
                </span>
                <p className="text-2xl md:text-[1.7rem] font-semibold leading-snug text-ink mt-2">
                  Big Spaces for Big Ideas — the last privately owned outdoor media company in Western Australia.
                </p>
              </blockquote>
            </motion.div>
          </div>

          {/* Image grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              { src: galleryImages[0], alt: 'Billboard operations in Western Australia', rotate: '-rotate-1' },
              { src: galleryImages[2], alt: 'Rooftop billboard advertising in Perth metropolitan area', rotate: 'rotate-1' },
              { src: galleryImages[4], alt: 'WA Billboards regional operations and billboard maintenance', rotate: '-rotate-1 col-span-2 md:col-span-1' },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ scale: 1.03, rotate: 0 }}
                transition={bouncy}
                className={`aspect-[4/3] overflow-hidden rounded-3xl border-4 border-white shadow-soft ${img.rotate}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats cards */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-6 mt-12"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              { stat: '30+', label: 'Years' },
              { stat: '200+', label: 'Sites' },
              { stat: '100%', label: 'Family Owned' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                transition={bouncy}
                className="bg-white rounded-3xl border-2 border-ink/5 shadow-soft py-8 text-center"
              >
                <span className="block text-3xl md:text-5xl font-semibold text-primary">{item.stat}</span>
                <span className="block text-xs font-extrabold uppercase tracking-wider text-ink-soft mt-2">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 md:py-28 bg-peach/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Our Journey"
            title={<>Key <span className="text-primary">Milestones</span></>}
          />
        </div>

        {/* Scrollable strip */}
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex gap-5 min-w-max px-6 md:px-12 max-w-7xl mx-auto pb-2"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={bouncy}
                className="bg-white rounded-3xl border-2 border-ink/5 shadow-soft p-7 min-w-[240px] md:min-w-[270px]"
              >
                <span className="inline-block rounded-full bg-peach px-4 py-1.5 text-xl font-semibold text-primary-deep mb-4">
                  {item.year}
                </span>
                <h3 className="text-ink font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-ink-soft text-sm font-semibold leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title={<>Our <span className="text-primary">Strengths</span></>}
            sub="Independence, quality, and quick response — the pillars that make WA Billboards the market leader."
          />

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ y: -8 }}
                transition={bouncy}
                className="bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft p-8 md:p-10"
              >
                <span className="inline-flex w-14 h-14 rounded-2xl bg-peach text-primary items-center justify-center text-2xl font-semibold mb-6">
                  {value.num}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
                  {value.title}
                </h3>
                <p className="text-ink-soft font-semibold leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team Preview ── */}
      <section className="py-20 md:py-28 bg-peach/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Our People"
            title={<>Meet the <span className="text-primary">Team</span></>}
            sub="The dedicated family and team behind Western Australia's largest privately owned outdoor media company."
          />

          <motion.div
            className="space-y-4"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ x: 8 }}
                transition={bouncy}
                className="flex items-center gap-5 md:gap-8 bg-white rounded-3xl border-2 border-ink/5 shadow-soft p-5 md:p-6"
              >
                {/* Photo — friendly circle */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-peach border-4 border-peach flex-shrink-0">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-ink">
                    {member.name}
                  </h3>
                  <p className="text-primary-deep text-sm font-extrabold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <MotionLink
              to="/team"
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.92 }}
              transition={bouncy}
              className="btn-pop bg-primary-dark text-white px-8 py-4 shadow-pop hover:bg-primary"
            >
              View Full Team <span className="text-lg">→</span>
            </MotionLink>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaSection
        subtitle="Partner with Western Australia's most experienced outdoor media team."
        primary={{ to: '/contact', label: 'Get in Touch' }}
        secondary={{ to: '/locations', label: 'View Locations' }}
      />
    </main>
  )
}
