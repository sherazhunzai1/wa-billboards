import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiMail, HiPhone } from 'react-icons/hi'

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
    color: '#FF6B35',
  },
  {
    name: 'Christopher Robinson',
    role: 'Operations Manager',
    image: teamChristopher,
    bio: 'Christopher joined the WA Billboards team in 2010 and runs the operational aspects of the business including site maintenance and material changes. He holds a full private pilot\'s license and ASIC card for airport access.',
    highlights: ['Joined the team in 2010', 'Full Private Pilot\'s License', 'Site Maintenance & Operations'],
    color: '#E040FB',
  },
  {
    name: 'Mitchell Robinson',
    role: 'Sales Manager',
    image: null,
    bio: 'Mitchell is the newest family member to join the WA Billboards team, contributing to the continued growth and expansion of the business. His fresh perspective brings new energy to the company\'s development initiatives.',
    highlights: ['Second generation team member', 'Business Growth & Expansion', 'Client Relations'],
    color: '#FFC857',
  },
  {
    name: 'Rebecca Zaubzer',
    role: 'Finance Officer',
    image: teamRebecca,
    bio: 'Our dedicated Finance Officer manages the financial operations of WA Billboards, ensuring the business runs smoothly and efficiently.',
    highlights: ['State-level client management', 'Agency relationships', 'Campaign optimization'],
    color: '#00E5FF',
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
    <main className="bg-[#0a0a0f] min-h-screen">
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

      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[5]} alt="WA Billboards team members at outdoor billboard site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 mb-6">Our People</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Meet the Team</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              A dedicated family team driving Western Australia's outdoor media industry since 1991.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">The Robinson Family</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The People Behind <span className="gradient-text">Your Billboards</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Our tight-knit family team ensures personal attention and quick response to every client need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl overflow-hidden hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Photo / Initials */}
                  <div className="w-full sm:w-48 h-56 sm:h-auto relative flex-shrink-0">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: `${member.color}15` }}>
                        <span className="text-5xl font-bold" style={{ color: member.color }}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: member.color }} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <span className="text-sm font-medium" style={{ color: member.color }}>{member.role}</span>
                    <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {member.highlights.map((h, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: `${member.color}12`, color: member.color, border: `1px solid ${member.color}25` }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Qualities */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">What Makes Us Different</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A Team Built on <span className="gradient-text">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((q, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-4">0{i + 1}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{q.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{q.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="py-12">
        <div className="flex gap-4 overflow-hidden">
          {[teamWhole, teamStephen, teamChristopher, teamRebecca].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-1/2 md:w-1/4 h-64 overflow-hidden rounded-xl">
              <img
                src={img}
                alt={`WA Billboards team member ${['group photo', 'Stephen Robinson', 'Christopher Robinson', 'Rebecca Zaubzer'][i]}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20" />
            <div className="absolute inset-0 glass-dark" />
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Work With Our Team?</h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">Get in touch to discuss your outdoor advertising needs.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Contact Us <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
