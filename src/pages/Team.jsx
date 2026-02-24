import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'
import { galleryImages } from '../assets/billboardImages'
import teamStephen from '../assets/images/team/Stephen Robinson.jpeg'
import teamChristopher from '../assets/images/team/Christopher Robinson.jpeg'
import teamRebecca from '../assets/images/team/Rebecca Zaubzer.jpeg'
import teamWhole from '../assets/images/team/whole team.jpeg'
import SEO from '../components/SEO'
import './Team.css'

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
    role: 'Business Development',
    image: null,
    bio: 'Mitchell is the newest family member to join the WA Billboards team, contributing to the continued growth and expansion of the business. His fresh perspective brings new energy to the company\'s development initiatives.',
    highlights: ['Second generation team member', 'Business Growth & Expansion', 'Client Relations'],
    color: '#FFC857',
  },
  {
    name: 'Rebecca Zaubzer',
    role: 'Sales & Marketing Manager',
    image: teamRebecca,
    bio: 'Our dedicated Sales & Marketing Manager works closely with advertising agencies and direct clients at state level, managing campaigns and ensuring clients get the best return on their outdoor advertising investment.',
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
    <main className="team">
      <SEO
        title="Our Team"
        path="/team"
        description="Meet the WA Billboards family team — the people behind the largest billboards Australia has in private ownership. Stephen, Christopher & Mitchell Robinson run west Australia billboards since 1991."
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
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[5]} alt="WA Billboards team members at outdoor billboard site" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Our People</span>
            <h1 className="page-header__title">Meet the Team</h1>
            <p className="page-header__subtitle">
              A dedicated family team driving Western Australia's outdoor media industry since 1991.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-grid-section">
        <div className="container">
          <div className="team-grid-section__header">
            <span className="section-tag">The Robinson Family</span>
            <h2 className="section-title">
              The People Behind <span className="gradient-text">Your Billboards</span>
            </h2>
            <p className="section-subtitle">
              Our tight-knit family team ensures personal attention and quick response to every client need.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="team-card__image-wrap">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-card__image" />
                  ) : (
                    <div className="team-card__placeholder" style={{ background: `${member.color}15`, color: member.color }}>
                      <span className="team-card__placeholder-initials">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div className="team-card__image-border" style={{ borderColor: member.color }} />
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role" style={{ color: member.color }}>{member.role}</span>
                  <p className="team-card__bio">{member.bio}</p>
                  <div className="team-card__highlights">
                    {member.highlights.map((h, j) => (
                      <span key={j} className="team-card__highlight">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Qualities */}
      <section className="team-qualities">
        <div className="container">
          <div className="team-qualities__header">
            <span className="section-tag">What Makes Us Different</span>
            <h2 className="section-title">
              A Team Built on <span className="gradient-text">Excellence</span>
            </h2>
          </div>

          <div className="team-qualities__grid">
            {qualities.map((q, i) => (
              <motion.div
                key={i}
                className="quality-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="quality-card__number">0{i + 1}</div>
                <h3 className="quality-card__title">{q.title}</h3>
                <p className="quality-card__desc">{q.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="team-images">
        <div className="team-images__strip">
          {[teamWhole, teamStephen, teamChristopher, teamRebecca].map((img, i) => (
            <div key={i} className="team-images__item">
              <img src={img} alt={`WA Billboards team member ${['group photo', 'Stephen Robinson', 'Christopher Robinson', 'Rebecca Zaubzer'][i]}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="team-cta">
        <div className="container">
          <div className="team-cta__card">
            <div className="team-cta__bg" />
            <div className="team-cta__content">
              <h2>Want to Work With Our Team?</h2>
              <p>Get in touch to discuss your outdoor advertising needs.</p>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
