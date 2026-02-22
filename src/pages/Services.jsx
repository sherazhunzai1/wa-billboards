import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { FaRoad, FaPlane, FaDesktop } from 'react-icons/fa'
import { billboardImages, airportImages, digitalImages, galleryImages } from '../assets/billboardImages'
import BillboardCard from '../components/BillboardCard'
import SEO from '../components/SEO'
import './Services.css'

const billboardFeatures = [
  'Extensive inventory across all of Western Australia',
  'Metro and regional coverage from Kimberley to South West',
  'Cyclone-rated billboards built in-house',
  'Perfect target audience reach for every campaign',
  'Competitive rates with flexible booking options',
]

const airportFeatures = [
  'Kalgoorlie-Boulder Airport',
  'Newman Airport',
  'Karratha Airport',
  'Port Hedland Airport',
  'Onslow Airport',
  'Geraldton Airport',
]

const digitalFeatures = [
  '12-faced digital screen at Karratha Airport',
  '3-panelled screens in Newman and Kalgoorlie',
  'Multiple clients per site capability',
  'Dynamic content scheduling',
  'New digital sites being continuously acquired',
]

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [hash])

  return (
    <main className="services">
      <SEO
        title="Advertising Services"
        path="/services"
        description="Explore WA Billboards advertising solutions: 200+ billboard sites, 6 regional airport terminals & digital displays across Western Australia."
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[1]} alt="Billboard and outdoor advertising services across Western Australia" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Our Services</span>
            <h1 className="page-header__title">Advertising Solutions</h1>
            <p className="page-header__subtitle">
              Comprehensive outdoor media options to reach your target audience across Western Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billboards Service */}
      <section className="service-section" id="billboards">
        <div className="container">
          <div className="service-section__layout">
            <motion.div
              className="service-section__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__icon-wrap" style={{ background: 'rgba(255,107,53,0.1)', color: 'var(--orange)' }}>
                <FaRoad size={32} />
              </div>
              <h2 className="section-title">
                <span className="gradient-text">Billboards</span>
              </h2>
              <p className="service-section__text">
                WA Billboards has an extensive inventory all over Western Australia — from the
                Kimberley, through the Goldfields and down to the South West. Having this broad
                coverage of both regional and metro billboards ensures that there is a perfect spot
                for your company to reach your desired target audience.
              </p>
              <p className="service-section__text">
                This includes extreme condition billboards that are built in-house to withstand
                cyclone prone areas, ensuring your advertising remains visible in even the harshest
                conditions.
              </p>
              <ul className="service-section__features">
                {billboardFeatures.map((feature, i) => (
                  <li key={i} className="service-section__feature">
                    <HiCheckCircle className="service-section__check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="service-section__gallery"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__image-grid">
                {billboardImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="service-section__image">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="service-section__image-label">{img.location}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Airports Service */}
      <section className="service-section service-section--alt" id="airports">
        <div className="container">
          <div className="service-section__layout service-section__layout--reverse">
            <motion.div
              className="service-section__gallery"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__image-grid">
                {airportImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="service-section__image">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="service-section__image-label">{img.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="service-section__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__icon-wrap" style={{ background: 'rgba(255,72,88,0.1)', color: 'var(--coral)' }}>
                <FaPlane size={32} />
              </div>
              <h2 className="section-title">
                <span className="gradient-text">Airports</span>
              </h2>
              <p className="service-section__text">
                WA Billboards holds the advertising rights to most of WA's regional airports,
                including Kalgoorlie-Boulder, Newman, Karratha, Port Hedland, Onslow and Geraldton.
                This allows our clients to reach their target audience in a large capacity.
              </p>
              <p className="service-section__text">
                Advertising in these locations catches the attention of FIFO workers, city commuters,
                national and international tourists, and farmers — giving you unmatched audience diversity.
              </p>
              <div className="service-section__airports">
                <h4 className="service-section__airports-title">Airport Terminals</h4>
                <div className="service-section__airport-grid">
                  {airportFeatures.map((airport, i) => (
                    <div key={i} className="service-section__airport-badge">
                      <FaPlane className="service-section__airport-icon" />
                      {airport}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Service */}
      <section className="service-section" id="digital">
        <div className="container">
          <div className="service-section__layout">
            <motion.div
              className="service-section__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__icon-wrap" style={{ background: 'rgba(224,64,251,0.1)', color: 'var(--magenta)' }}>
                <FaDesktop size={32} />
              </div>
              <h2 className="section-title">
                <span className="gradient-text">Digital</span>
              </h2>
              <p className="service-section__text">
                With the constant developments in technology, WA Billboards are moving to digital.
                We have installed a 12-faced screen at Karratha Airport and two 3-panelled screens
                in Newman and Kalgoorlie.
              </p>
              <p className="service-section__text">
                Acquiring new digital sites will increase the number of clients on each site, as
                well as create more diverse advertising opportunities for businesses of all sizes.
              </p>
              <ul className="service-section__features">
                {digitalFeatures.map((feature, i) => (
                  <li key={i} className="service-section__feature">
                    <HiCheckCircle className="service-section__check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="service-section__gallery"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__image-grid service-section__image-grid--digital">
                {digitalImages.map((img, i) => (
                  <div key={i} className="service-section__image service-section__image--digital">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="service-section__image-label">
                      {img.name} — {img.location}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Billboard Showcase */}
      <section className="services-showcase">
        <div className="container">
          <div className="services-showcase__header">
            <span className="section-tag">Our Inventory</span>
            <h2 className="section-title">
              Billboard <span className="gradient-text">Showcase</span>
            </h2>
          </div>
          <div className="services-showcase__grid">
            {billboardImages.map((img, i) => (
              <BillboardCard key={img.id} image={img} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__card">
            <div className="services-cta__bg" />
            <div className="services-cta__content">
              <h2>Find the Perfect Advertising Solution</h2>
              <p>Talk to our team about the best options for your campaign.</p>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get in Touch <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
