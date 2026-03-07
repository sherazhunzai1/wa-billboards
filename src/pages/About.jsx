import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiStar, HiShieldCheck, HiLightningBolt, HiHeart, HiArrowRight } from 'react-icons/hi'
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
  { icon: <HiHeart size={28} />, title: 'Family Values', desc: 'Proudly family-owned and operated since 1991, maintaining our independence and commitment to quality.' },
  { icon: <HiLightningBolt size={28} />, title: 'Quick Response', desc: 'Our independence means we can react quickly to client and landowner requirements without corporate delays.' },
  { icon: <HiShieldCheck size={28} />, title: 'Built to Last', desc: 'Our extreme condition billboards are built in-house to withstand cyclone-prone areas of WA.' },
]

const teamMembers = [
  { name: 'Stephen Robinson', role: 'Founder & Managing Director', image: teamStephen, color: '#FF6B35' },
  { name: 'Christopher Robinson', role: 'Operations Manager', image: teamChristopher, color: '#E040FB' },
  { name: 'Mitchell Robinson', role: 'Sales Manager', image: null, color: '#FFC857' },
  { name: 'Rebecca Zaubzer', role: 'Finance Officer', image: teamRebecca, color: '#00E5FF' },
]

export default function About() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen text-white">
      <SEO
        title="About Us — Family-Owned Billboard Company Since 1991"
        path="/about"
        description="WA Billboards is Western Australia's largest privately owned outdoor media company, founded in 1991 by the Robinson family. 200+ billboard sites across Perth metro & regional WA with in-house manufacturing."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      {/* Page Header */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={aboutHeroImg}
          alt="WA Billboards office and billboard operations in Western Australia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/40" />
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 text-orange-400 mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              About WA Billboards
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Western Australia's largest privately owned, dedicated outdoor media company since 1991.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 text-orange-400 mb-6">
                Since 1991
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                A Family <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">Legacy</span> in Outdoor Media
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                WA Billboards was founded in 1991 by Stephen and Kerry Robinson, and has grown to be the
                largest domestic operator of outdoor media in Western Australia. Stephen started in the
                industry in 1984 with an outdoor display company before being recruited by Australian
                Posters in 1989, where he worked as a Specialist Development Officer.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Kerry held a senior position at the Commonwealth Bank. In 2010 their son Christopher
                joined the WA Billboards team and runs the operational aspects of the business including
                site maintenance and material changes. Over several years the business expanded welcoming
                a Sales & Marketing Manager, and Stephen and Kerry's second son Mitchell to the team.
              </p>
              <p className="text-gray-400 leading-relaxed">
                WA Billboards is the last privately owned, dedicated outdoor media company in Western
                Australia. It successfully trades in a highly regulated, competitive market by offering
                clients a broad range of outdoor media options across metropolitan and regional WA.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={galleryImages[2]}
                  alt="Rooftop billboard advertising in Perth metropolitan area"
                  className="rounded-2xl w-full h-64 object-cover shadow-2xl"
                />
                <img
                  src={galleryImages[4]}
                  alt="WA Billboards regional operations and billboard maintenance"
                  className="rounded-2xl w-3/4 h-52 object-cover shadow-2xl mt-[-3rem] ml-auto mr-0 relative z-10 border-4 border-[#0a0a0f]"
                />
                <div className="absolute -bottom-4 -left-4 z-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl px-6 py-4 text-center shadow-xl">
                  <span className="block text-3xl font-bold text-white">30+</span>
                  <span className="block text-sm font-medium text-white/90">Years of Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 text-orange-400 mb-6">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Key <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">Milestones</span>
            </h2>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/50 via-purple-500/50 to-orange-500/50" />
            <div className="grid grid-cols-6 gap-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative text-center pt-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-purple-500 shadow-lg shadow-orange-500/30 z-10" />
                  <div className="text-orange-400 font-bold text-lg mb-2">{item.year}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative pl-8">
            <div className="absolute top-0 bottom-0 left-[15px] w-0.5 bg-gradient-to-b from-orange-500/50 via-purple-500/50 to-orange-500/50" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative mb-10 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-purple-500 shadow-lg shadow-orange-500/30 z-10" />
                <div className="text-orange-400 font-bold text-lg">{item.year}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 text-orange-400 mb-6">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">Strengths</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Independence, quality, and quick response — the pillars that make WA Billboards the market leader.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:from-orange-500/30 group-hover:to-purple-500/30 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 md:py-28 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 text-orange-400 mb-6">
              Our People
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The dedicated family and team behind Western Australia's largest privately owned outdoor media company.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-[3px] mb-5"
                  style={{ borderColor: member.color }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white"
                      style={{ background: member.color }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: member.color }}>{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Full Team <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
