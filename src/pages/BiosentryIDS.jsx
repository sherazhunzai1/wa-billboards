import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiPhone, HiMail } from 'react-icons/hi'
import { FaShieldAlt, FaCheckCircle, FaSprayCan, FaUsers, FaClock, FaBullhorn } from 'react-icons/fa'
import { galleryImages } from '../assets/billboardImages'
import biosentryImg from '../assets/images/Biosentry/4-scaled.jpg'
import SEO from '../components/SEO'
import './BiosentryIDS.css'

const features = [
  'Whole body disinfection/protection.',
  'Reduces microbial contagion/virus spread.',
  'Can be placed at entrances of busy locations and buildings.',
  'Reduces or eliminates the need for hand sanitisers.',
  'Odourless and hypoallergenic.',
  'Safe for pregnant women and children.',
  'Contactless and convenient.',
  'No alcohol, harmful chemicals, MIT, or preservatives.',
  'Certified and approved.',
  'Effective against both common cold/flu, plus modern viruses such as Coronavirus and Sars.',
]

const highlights = [
  {
    icon: <FaShieldAlt size={28} />,
    title: '99.9% Effective',
    desc: 'Protection against 99.9% of bacteria and viruses for complete peace of mind.',
  },
  {
    icon: <FaSprayCan size={28} />,
    title: 'Contactless Operation',
    desc: 'Fully contactless and convenient with a treatment time of just 3-7 seconds.',
  },
  {
    icon: <FaBullhorn size={28} />,
    title: 'Advertising Opportunity',
    desc: 'Each unit features screens for advertising, funded by the displayed content.',
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Zero Cost to Facility',
    desc: 'Provided at zero cost subject to assessment, in exchange for exclusive advertising rights.',
  },
  {
    icon: <FaClock size={28} />,
    title: 'Fast Treatment Cycle',
    desc: 'Treatment time can be varied from 3-7 seconds, encouraging staff usage.',
  },
  {
    icon: <FaCheckCircle size={28} />,
    title: 'Safe & Certified',
    desc: 'No harmful chemicals, odourless, hypoallergenic. Safe for pregnant women and children.',
  },
]

export default function BiosentryIDS() {
  return (
    <main className="biosentry">
      <SEO
        title="Biosentry IDS - Intelligent Disinfectant Station"
        path="/biosentry-ids"
        description="Biosentry IDS by WA Billboards — 99.9% effective disinfectant stations with advertising screens. A unique billboards Australia innovation from wabillboards, zero cost to west Australia facilities."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Biosentry IDS', path: '/biosentry-ids' },
        ]}
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[0]} alt="Biosentry IDS intelligent disinfectant station at mining facility" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Health & Safety Innovation</span>
            <h1 className="page-header__title">Biosentry IDS</h1>
            <p className="page-header__subtitle">
              Intelligent disinfectant stations combining effective protection with powerful advertising in mining camps and facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="biosentry-video">
        <div className="container">
          <motion.div
            className="biosentry-video__wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="biosentry-video__header">
              <span className="section-tag">See It In Action</span>
              <h2 className="section-title">
                How <span className="gradient-text">Biosentry</span> Works
              </h2>
            </div>
            <div className="biosentry-video__player">
              <iframe
                title="Biosentry IDS Demo"
                src="https://player.vimeo.com/video/476761049?h=ca5e174e71"
                width="100%"
                height="100%"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="biosentry-content">
        <div className="container">
          <div className="biosentry-content__layout">
            <motion.div
              className="biosentry-content__text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">About Biosentry</span>
              <h2 className="section-title">
                Multi-Purpose Intelligent <span className="gradient-text">Sanitising Station</span>
              </h2>
              <p className="biosentry-content__paragraph">
                WA Billboards has teamed with Biosentry to create a multi-purpose intelligent
                sanitising station which provides both effective protection against 99.9% of
                bacteria and viruses, whilst also providing a means of advertising in mining camps.
              </p>
              <p className="biosentry-content__paragraph">
                It is a valuable tool in managing bio-contagion threats and in purifying your
                work environment.
              </p>
            </motion.div>

            <motion.div
              className="biosentry-content__image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={biosentryImg} alt="Biosentry Disinfectant Station" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="biosentry-features">
        <div className="container">
          <div className="biosentry-features__header">
            <span className="section-tag">How Does It Work?</span>
            <h2 className="section-title">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="section-subtitle">
              Biosentry IDS delivers comprehensive protection with cutting-edge technology.
            </p>
          </div>

          <div className="biosentry-features__grid">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="biosentry-features__item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="biosentry-features__check">
                  <FaCheckCircle />
                </span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="biosentry-highlights">
        <div className="container">
          <div className="biosentry-highlights__header">
            <span className="section-tag">Why Biosentry?</span>
            <h2 className="section-title">
              Benefits for Your <span className="gradient-text">Facility</span>
            </h2>
          </div>

          <div className="biosentry-highlights__grid">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="biosentry-highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="biosentry-highlight-card__icon">{h.icon}</div>
                <h3 className="biosentry-highlight-card__title">{h.title}</h3>
                <p className="biosentry-highlight-card__desc">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Cost Section */}
      <section className="biosentry-zero-cost">
        <div className="container">
          <motion.div
            className="biosentry-zero-cost__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="biosentry-zero-cost__icon">
              <FaBullhorn size={40} />
            </div>
            <h2 className="biosentry-zero-cost__title">
              Zero Cost to Your Facility
            </h2>
            <p className="biosentry-zero-cost__text">
              Biosentry can be provided at zero cost to the facility subject to an assessment by
              WA Billboards and in return we require the exclusive advertising rights on the screens.
              The cost of the unit is funded by the advertising displayed on the unit screen and each
              machine can be personalised or badged with a company logo. Treatment time can be varied
              from 3-7 seconds; which allows a faster treatment cycle and encourages staff usage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="biosentry-cta">
        <div className="container">
          <div className="biosentry-cta__card">
            <div className="biosentry-cta__bg" />
            <div className="biosentry-cta__content">
              <h2>Get Involved with Biosentry IDS</h2>
              <p>
                For more information on how you can get a Biosentry station for your facility, contact Steve directly.
              </p>
              <div className="biosentry-cta__contact">
                <a href="tel:0411518049" className="biosentry-cta__contact-item">
                  <HiPhone /> 0411 518 049
                </a>
                <a href="mailto:steve@wabillboards.com.au" className="biosentry-cta__contact-item">
                  <HiMail /> steve@wabillboards.com.au
                </a>
              </div>
              <div className="biosentry-cta__actions">
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Contact Us <HiArrowRight />
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  View Our Services <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
