import { motion } from 'framer-motion'
import { HiCheckCircle, HiOutlineHeart, HiOutlineAcademicCap, HiOutlinePaperAirplane, HiOutlineShieldCheck } from 'react-icons/hi'
import CtaSection from '../components/CtaSection'
import { SectionHeading, Floater, bouncy, staggerParent, popChild } from '../components/Playful'

import { galleryImages } from '../assets/billboardImages'
import teamStephen from '../assets/images/team/Stephen Robinson.jpeg'
import teamChristopher from '../assets/images/team/Christopher Robinson.jpeg'
import teamRebecca from '../assets/images/team/Rebecca Zaubzer.jpeg'
import teamWhole from '../assets/images/team/whole team.jpeg'
import SEO from '../components/SEO'

const teamMembers = [
  {
    name: 'Stephen Robinson',
    role: 'Founder & Managing Director',
    image: teamStephen,
    bio: 'Stephen founded WA Billboards in 1991 after entering the outdoor media industry in 1984. He holds a commercial pilot\'s license with an instrument rating for all weather operations. His vision and industry expertise have grown WA Billboards into WA\'s largest domestic outdoor media operator.',
    highlights: ['Founded WA Billboards in 1991', 'Commercial Pilot\'s License', '40+ years industry experience'],
  },
  {
    name: 'Christopher Robinson',
    role: 'Operations Manager',
    image: teamChristopher,
    bio: 'Christopher joined the WA Billboards team in 2010 and runs the operational aspects of the business including site maintenance and material changes. He holds a full private pilot\'s license and ASIC card for airport access.',
    highlights: ['Joined the team in 2010', 'Full Private Pilot\'s License', 'Site Maintenance & Operations'],
  },
  {
    name: 'Mitchell Robinson',
    role: 'Sales Manager',
    image: null,
    bio: 'Mitchell is the newest family member to join the WA Billboards team, contributing to the continued growth and expansion of the business. His fresh perspective brings new energy to the company\'s development initiatives.',
    highlights: ['Second generation team member', 'Business Growth & Expansion', 'Client Relations'],
  },
  {
    name: 'Rebecca Zaubzer',
    role: 'Finance Officer',
    image: teamRebecca,
    bio: 'Our dedicated Finance Officer manages the financial operations of WA Billboards, ensuring the business runs smoothly and efficiently.',
    highlights: ['State-level client management', 'Agency relationships', 'Campaign optimization'],
  },
]

const qualities = [
  { icon: <HiOutlineHeart />, title: 'Family-First Culture', desc: 'Our family values drive everything we do, creating a supportive and dedicated team environment.' },
  { icon: <HiOutlineAcademicCap />, title: 'Industry Expertise', desc: 'With combined decades of experience in outdoor media, our team brings unmatched knowledge to every project.' },
  { icon: <HiOutlinePaperAirplane />, title: 'Licensed Pilots', desc: 'Multiple team members hold pilot\'s licenses, enabling us to service remote locations with our own aircraft.' },
  { icon: <HiOutlineShieldCheck />, title: 'ASIC Certified', desc: 'All key staff hold ASIC cards, ensuring seamless airport access and maintaining aviation safety standards.' },
]

export default function Team() {
  return (
    <main className="bg-cream min-h-screen text-ink">
      <SEO
        title="Our Team — The Robinson Family Behind WA's Largest Billboard Company"
        path="/team"
        description="Meet the WA Billboards team — Stephen, Christopher & Mitchell Robinson, and Rebecca Zaubzer. Family-owned & operated since 1991, running Western Australia's largest private outdoor media company."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Our Team', path: '/team' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'WA Billboards',
          url: 'https://wabillboards.com.au',
          member: [
            { '@type': 'Person', name: 'Stephen Robinson', jobTitle: 'Founder & Managing Director', worksFor: { '@type': 'Organization', name: 'WA Billboards' } },
            { '@type': 'Person', name: 'Christopher Robinson', jobTitle: 'Operations Manager', worksFor: { '@type': 'Organization', name: 'WA Billboards' } },
            { '@type': 'Person', name: 'Mitchell Robinson', jobTitle: 'Business Development', worksFor: { '@type': 'Organization', name: 'WA Billboards' } },
            { '@type': 'Person', name: 'Rebecca Zaubzer', jobTitle: 'Sales & Marketing Manager', worksFor: { '@type': 'Organization', name: 'WA Billboards' } },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[5]} alt="WA Billboards team members at outdoor billboard site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={popChild} className="mb-6">
              <span className="inline-block rounded-full bg-sun px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-ink shadow-lg -rotate-2">
                Our People
              </span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] mb-4">Meet the<br />Team</motion.h1>
            <motion.p variants={popChild} className="text-lg text-white/90 font-semibold max-w-xl">
              Big Spaces for Big Ideas — a dedicated family team driving Western Australia's outdoor media industry since 1991.
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

      {/* Team Members */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="The Robinson Family"
            title={<>The people behind <span className="text-primary">your billboards</span></>}
            sub="Our tight-knit family team ensures personal attention and quick response to every client need."
          />

          <motion.div
            className="space-y-6"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ y: -6 }}
                transition={bouncy}
                className="bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Photo / Initials */}
                  <div className="w-full lg:w-72 h-64 lg:h-auto relative flex-shrink-0 bg-peach">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-semibold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-ink">{member.name}</h3>
                      <span className="inline-block mt-2 rounded-full bg-peach px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary-deep">{member.role}</span>
                    </div>
                    <p className="text-ink-soft font-semibold leading-relaxed">{member.bio}</p>
                    <ul className="space-y-2.5 pt-2">
                      {member.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-ink text-sm font-bold">
                          <HiCheckCircle className="w-5 h-5 text-mint flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Qualities */}
      <section className="py-20 md:py-28 bg-peach/50 relative overflow-hidden">
        <Floater className="top-16 right-10 hidden lg:block" duration={8}>
          <div className="w-16 h-16 rounded-2xl bg-sun/50 rotate-12" />
        </Floater>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <SectionHeading
            eyebrow="What Makes Us Different"
            title={<>A team built on <span className="text-primary">excellence</span></>}
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {qualities.map((q, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={bouncy}
                className="bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft p-8"
              >
                <span className="inline-flex w-14 h-14 rounded-2xl bg-peach text-primary items-center justify-center text-3xl mb-6">
                  {q.icon}
                </span>
                <h3 className="text-lg font-semibold text-ink mb-2">{q.title}</h3>
                <p className="text-ink-soft text-sm font-semibold leading-relaxed">{q.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="py-10">
        <motion.div
          className="flex gap-4 px-6 md:px-12 overflow-hidden"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {[teamWhole, teamStephen, teamChristopher, teamRebecca].map((img, i) => (
            <motion.div
              key={i}
              variants={popChild}
              whileHover={{ scale: 1.04, rotate: 0 }}
              transition={bouncy}
              className={`flex-shrink-0 w-1/2 md:w-1/4 h-64 overflow-hidden rounded-3xl border-4 border-white shadow-soft ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
            >
              <img
                src={img}
                alt={`WA Billboards team member ${['group photo', 'Stephen Robinson', 'Christopher Robinson', 'Rebecca Zaubzer'][i]}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <CtaSection
        align="center"
        subtitle="Want to work with our team? Get in touch to discuss your outdoor advertising needs."
        primary={{ to: '/contact', label: 'Contact Us' }}
      />
    </main>
  )
}
