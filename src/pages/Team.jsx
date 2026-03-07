import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

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
  { title: 'Family-First Culture', desc: 'Our family values drive everything we do, creating a supportive and dedicated team environment.' },
  { title: 'Industry Expertise', desc: 'With combined decades of experience in outdoor media, our team brings unmatched knowledge to every project.' },
  { title: 'Licensed Pilots', desc: 'Multiple team members hold pilot\'s licenses, enabling us to service remote locations with our own aircraft.' },
  { title: 'ASIC Certified', desc: 'All key staff hold ASIC cards, ensuring seamless airport access and maintaining aviation safety standards.' },
]

export default function Team() {
  return (
    <main className="bg-charcoal min-h-screen">
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
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[5]} alt="WA Billboards team members at outdoor billboard site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="stamp mb-6 inline-block">Our People</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">Meet the<br />Team</h1>
            <p className="text-lg text-ash max-w-xl">
              A dedicated family team driving Western Australia's outdoor media industry since 1991.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-lime" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">The Robinson Family</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4">
              The People Behind Your Billboards
            </h2>
            <p className="text-lg text-ash max-w-2xl">
              Our tight-knit family team ensures personal attention and quick response to every client need.
            </p>
          </div>

          <div className="space-y-px">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="bg-charcoal-light border border-white/5 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Photo / Initials */}
                  <div className="w-full lg:w-72 h-64 lg:h-auto relative flex-shrink-0">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-charcoal">
                        <span className="text-6xl font-black text-lime/30">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{member.name}</h3>
                      <span className="text-sm font-bold uppercase tracking-[0.1em] text-lime">{member.role}</span>
                    </div>
                    <p className="text-ash leading-relaxed">{member.bio}</p>
                    <ul className="space-y-2 pt-2">
                      {member.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-chalk text-sm">
                          <span className="text-lime">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Qualities */}
      <section className="py-20 md:py-28 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-lime" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">What Makes Us Different</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              A Team Built on Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
            {qualities.map((q, i) => (
              <motion.div
                key={i}
                className="bg-charcoal p-8 border-r border-white/5 last:border-r-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-xs font-mono text-lime mb-4">0{i + 1}</div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2">{q.title}</h3>
                <p className="text-ash text-sm leading-relaxed">{q.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section>
        <div className="flex gap-px overflow-hidden">
          {[teamWhole, teamStephen, teamChristopher, teamRebecca].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-1/2 md:w-1/4 h-64 overflow-hidden">
              <img
                src={img}
                alt={`WA Billboards team member ${['group photo', 'Stephen Robinson', 'Christopher Robinson', 'Rebecca Zaubzer'][i]}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime p-12 md:p-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-charcoal mb-4">Want to Work With Our Team?</h2>
          <p className="text-charcoal/70 text-lg mb-8 max-w-xl mx-auto">Get in touch to discuss your outdoor advertising needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-charcoal text-lime font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-charcoal-light">
            Contact Us <HiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}
