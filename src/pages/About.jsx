import { motion } from 'framer-motion'
import { HiStar, HiShieldCheck, HiLightningBolt, HiHeart } from 'react-icons/hi'
import { FaPlane, FaTools, FaHandshake } from 'react-icons/fa'
import { galleryImages } from '../assets/billboardImages'
import aboutHeroImg from '../assets/images/about us/IMG_6101-1-1536x624.jpg'
import SEO from '../components/SEO'
import './About.css'

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
  { icon: <FaPlane size={28} />, title: 'Total Independence', desc: 'Own aircraft fleet with CASA approved maintenance ensures we\'re never dependent on outside suppliers.' },
  { icon: <FaTools size={28} />, title: 'In-House Manufacturing', desc: 'Harvard Road, Jandakot Airport houses our sign manufacturing facilities and aircraft hangar.' },
  { icon: <FaHandshake size={28} />, title: 'National Reach', desc: 'Australia-wide sales representation through oOh! Media and JCDecaux partnerships.' },
]

export default function About() {
  return (
    <main className="about">
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
      <section className="page-header">
        <div className="page-header__bg">
          <img src={aboutHeroImg} alt="WA Billboards office and billboard operations in Western Australia" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Our Story</span>
            <h1 className="page-header__title">About WA Billboards</h1>
            <p className="page-header__subtitle">
              Western Australia's largest privately owned, dedicated outdoor media company since 1991.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__layout">
            <motion.div
              className="about-story__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Since 1991</span>
              <h2 className="section-title">
                A Family <span className="gradient-text">Legacy</span> in Outdoor Media
              </h2>
              <p className="about-story__text">
                WA Billboards was founded in 1991 by Stephen and Kerry Robinson, and has grown to be the
                largest domestic operator of outdoor media in Western Australia. Stephen started in the
                industry in 1984 with an outdoor display company before being recruited by Australian
                Posters in 1989, where he worked as a Specialist Development Officer.
              </p>
              <p className="about-story__text">
                Kerry held a senior position at the Commonwealth Bank. In 2010 their son Christopher
                joined the WA Billboards team and runs the operational aspects of the business including
                site maintenance and material changes. Over several years the business expanded welcoming
                a Sales & Marketing Manager, and Stephen and Kerry's second son Mitchell to the team.
              </p>
              <p className="about-story__text">
                WA Billboards is the last privately owned, dedicated outdoor media company in Western
                Australia. It successfully trades in a highly regulated, competitive market by offering
                clients a broad range of outdoor media options across metropolitan and regional WA.
              </p>
            </motion.div>

            <motion.div
              className="about-story__images"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="about-story__image-stack">
                <img src={galleryImages[2]} alt="Rooftop billboard advertising in Perth metropolitan area" className="about-story__img about-story__img--1" />
                <img src={galleryImages[4]} alt="WA Billboards regional operations and billboard maintenance" className="about-story__img about-story__img--2" />
                <div className="about-story__img-badge">
                  <span className="about-story__badge-number">30+</span>
                  <span className="about-story__badge-text">Years of Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="container">
          <div className="about-timeline__header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">
              Key <span className="gradient-text">Milestones</span>
            </h2>
          </div>

          <div className="about-timeline__track">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="timeline-item__year">{item.year}</div>
                <div className="timeline-item__dot" />
                <div className="timeline-item__content">
                  <h3 className="timeline-item__title">{item.title}</h3>
                  <p className="timeline-item__desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="about-values__header">
            <span className="section-tag">What Sets Us Apart</span>
            <h2 className="section-title">
              Our <span className="gradient-text">Strengths</span>
            </h2>
            <p className="section-subtitle">
              Independence, quality, and quick response — the pillars that make WA Billboards the market leader.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviation Section */}
      <section className="about-aviation">
        <div className="container">
          <div className="about-aviation__layout">
            <motion.div
              className="about-aviation__images"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={galleryImages[6]} alt="WA Billboards aircraft fleet at Jandakot Airport hangar" className="about-aviation__img" />
            </motion.div>
            <motion.div
              className="about-aviation__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Aviation</span>
              <h2 className="section-title">
                Total <span className="gradient-text">Independence</span>
              </h2>
              <p className="about-aviation__text">
                Our Harvard Road, Jandakot Airport location houses our sign manufacturing facilities,
                as well as a hangar for our aircraft. With full CASA approved maintenance, WA Billboards
                has total independence from outside suppliers which ensures our aircraft are always
                available if required.
              </p>
              <p className="about-aviation__text">
                Stephen holds a commercial pilot's license with an instrument rating for all weather
                operations, whilst Christopher holds a full private pilot's license. All key staff hold
                ASIC cards relieving our airports from the onus of supervising us on site, therefore
                ensuring their commitment to aviation safety are maintained.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
