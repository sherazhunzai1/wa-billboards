import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
    <main className="bg-charcoal min-h-screen text-chalk">
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
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <motion.img
          src={aboutHeroImg}
          alt="WA Billboards office and billboard operations in Western Australia"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {/* Dark scrim — no gradient overlay */}
        <div className="absolute inset-0 bg-charcoal/70" />

        <div className="relative z-10 flex items-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="stamp mb-6 inline-block">Our Story</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-5">
              About<br />WA Billboards
            </h1>
            <div className="w-16 h-px bg-lime mb-5" />
            <p className="text-lg md:text-xl text-ash max-w-xl">
              Big Spaces for Big Ideas — Western Australia's largest privately owned, dedicated outdoor media company since 1991.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Story Section — Asymmetric ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full-width heading */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="stamp mb-6 inline-block">Since 1991</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95]">
              A Family Legacy<br />
              <span className="text-lime">in Outdoor Media</span>
            </h2>
          </motion.div>

          {/* Text + pull-quote */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-ash leading-relaxed mb-5">
                WA Billboards was founded in 1991 by Stephen and Kerry Robinson, and has grown to be the
                largest domestic operator of outdoor media in Western Australia. Stephen started in the
                industry in 1984 with an outdoor display company before being recruited by Australian
                Posters in 1989, where he worked as a Specialist Development Officer.
              </p>
              <p className="text-ash leading-relaxed mb-5">
                Kerry held a senior position at the Commonwealth Bank. In 2010 their son Christopher
                joined the WA Billboards team and runs the operational aspects of the business including
                site maintenance and material changes. Over several years the business expanded welcoming
                a Sales & Marketing Manager, and Stephen and Kerry's second son Mitchell to the team.
              </p>
              <p className="text-ash leading-relaxed">
                WA Billboards is the last privately owned, dedicated outdoor media company in Western
                Australia. It successfully trades in a highly regulated, competitive market by offering
                clients a broad range of outdoor media options across metropolitan and regional WA.
              </p>
            </motion.div>

            {/* Pull-quote */}
            <motion.div
              className="lg:col-span-5 flex items-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <blockquote className="border-l-2 border-lime pl-6 py-4">
                <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-snug text-chalk">
                  Big Spaces for Big Ideas — the last privately owned outdoor media company in Western Australia.
                </p>
                <span className="w-6 h-px bg-lime inline-block mt-4" />
              </blockquote>
            </motion.div>
          </div>

          {/* Image grid — 1px gaps, no rounded corners */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={galleryImages[0]}
                alt="Billboard operations in Western Australia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={galleryImages[2]}
                alt="Rooftop billboard advertising in Perth metropolitan area"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden col-span-2 md:col-span-1">
              <img
                src={galleryImages[4]}
                alt="WA Billboards regional operations and billboard maintenance"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 border-t border-white/5 mt-0">
            {[
              { stat: '30+', label: 'Years' },
              { stat: '200+', label: 'Sites' },
              { stat: '100%', label: 'Family Owned' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`py-8 text-center ${i < 2 ? 'border-r border-white/5' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="block text-3xl md:text-4xl font-black text-lime">{item.stat}</span>
                <span className="block text-xs uppercase tracking-widest text-ash mt-1 font-mono">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline — Horizontal scrolling strip ── */}
      <section className="py-20 md:py-28 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="stamp mb-6 inline-block">Our Journey</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Key Milestones
            </h2>
          </motion.div>
        </div>

        {/* Scrollable strip */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="border-l border-lime/40 pl-6 pr-12 py-6 min-w-[220px] md:min-w-[260px]"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <span className="block text-4xl md:text-5xl font-black text-lime font-mono leading-none mb-3">
                  {item.year}
                </span>
                <h3 className="text-chalk font-bold text-base uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-ash text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values — Three tall vertical columns ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="stamp mb-6 inline-block">What Sets Us Apart</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Our Strengths
            </h2>
            <p className="text-ash text-lg max-w-2xl">
              Independence, quality, and quick response — the pillars that make WA Billboards the market leader.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 divide-x divide-white/5">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="py-10 md:py-16 px-6 md:px-8 first:pl-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <span className="block text-5xl md:text-6xl font-black text-lime/20 font-mono leading-none mb-6">
                  {value.num}
                </span>
                <div className="w-6 h-px bg-lime mb-6" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-chalk mb-4">
                  {value.title}
                </h3>
                <p className="text-ash leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Preview — Horizontal cards ── */}
      <section className="py-20 md:py-28 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="stamp mb-6 inline-block">Our People</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Meet the Team
            </h2>
            <p className="text-ash text-lg max-w-2xl">
              The dedicated family and team behind Western Australia's largest privately owned outdoor media company.
            </p>
          </motion.div>

          <div className="divide-y divide-white/5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10 py-8 md:py-10 items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Image — square, no border-radius */}
                <div className="w-32 h-32 md:w-[200px] md:h-[200px] overflow-hidden bg-charcoal border border-white/5">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl md:text-4xl font-black text-lime/30 bg-charcoal-light font-mono">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-chalk mb-1">
                    {member.name}
                  </h3>
                  <p className="text-ash text-sm uppercase tracking-widest font-mono">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/team"
              className="inline-block bg-lime text-charcoal font-bold uppercase tracking-[0.1em] px-8 py-4 text-sm hover:bg-lime-dark transition-colors"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — Full-width lime ── */}
      <section className="bg-lime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-charcoal leading-[0.95] mb-6">
              Big Spaces<br />for Big Ideas.
            </h2>
            <p className="text-charcoal/70 text-lg md:text-xl max-w-xl mb-10">
              Partner with Western Australia's most experienced outdoor media team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-block bg-charcoal text-lime font-bold uppercase tracking-[0.1em] px-8 py-4 text-sm hover:bg-charcoal-light transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/locations"
                className="inline-block border border-charcoal/30 text-charcoal font-bold uppercase tracking-[0.1em] px-8 py-4 text-sm hover:bg-charcoal/10 transition-colors"
              >
                View Locations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
