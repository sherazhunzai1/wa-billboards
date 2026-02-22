import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiPhone, HiMail, HiDownload } from 'react-icons/hi'
import { FaHandshake, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa'
import { galleryImages } from '../assets/billboardImages'
import landOwnersPdf from '../assets/pdf/Land-Owners.pdf'
import SEO from '../components/SEO'
import './LandOwners.css'

const benefits = [
  {
    icon: <FaMoneyBillWave size={28} />,
    title: 'Steady Income',
    desc: 'A strong and steady stream of income for the duration of your contract period.',
  },
  {
    icon: <FaCalendarAlt size={28} />,
    title: 'Flexible Contracts',
    desc: 'Contracts starting at 3 years with the option to extend further.',
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Long-Term Relationships',
    desc: 'We maintain strong relationships with our land owners, some for over 20 years.',
  },
]

export default function LandOwners() {
  return (
    <main className="landowners">
      <SEO
        title="Land Owners"
        path="/land-owners"
        description="Generate steady income from your commercial property with WA Billboards. Flexible contracts from 3 years. Contact Steve at 0411 518 049."
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[4]} alt="Billboard site on commercial property in Western Australia" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Partner With Us</span>
            <h1 className="page-header__title">Land Owners</h1>
            <p className="page-header__subtitle">
              Turn your commercial property into a steady source of income with a WA Billboards partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="landowners-content">
        <div className="container">
          <div className="landowners-content__layout">
            <motion.div
              className="landowners-content__text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Opportunity</span>
              <h2 className="section-title">
                Your Property, Our <span className="gradient-text">Billboards</span>
              </h2>
              <p className="landowners-content__paragraph">
                WA Billboards prides itself on providing clients with a vast range of billboards
                across metro and regional Western Australia. By offering diverse sizes, directions,
                areas and options WA Billboards has been successful in an otherwise competitive
                Out of Home media industry. As a result we are constantly seeking new sites and
                locations to add to our impressive inventory.
              </p>
              <p className="landowners-content__paragraph">
                If you are a commercial land owner on a busy road and have a blank wall or roof
                angled towards passing cars, or if you have a vacant block of land which does not
                currently have plans for redevelopment, then you may be the perfect candidate for
                a billboard.
              </p>
              <p className="landowners-content__paragraph">
                WA Billboards offers land owners a strong and steady stream of income for a
                contract period, which can start at 3 years and extend on from there. We maintain
                strong relationships with our land owners, some of which have been around for
                over 20 years!
              </p>
            </motion.div>

            <motion.div
              className="landowners-content__image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={galleryImages[2]} alt="WA Billboards rooftop billboard installed on commercial property" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="landowners-benefits">
        <div className="container">
          <div className="landowners-benefits__header">
            <span className="section-tag">Why Partner With Us</span>
            <h2 className="section-title">
              Benefits for <span className="gradient-text">Land Owners</span>
            </h2>
          </div>

          <div className="landowners-benefits__grid">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="landowners-benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="landowners-benefit-card__icon">{b.icon}</div>
                <h3 className="landowners-benefit-card__title">{b.title}</h3>
                <p className="landowners-benefit-card__desc">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="landowners-cta">
        <div className="container">
          <div className="landowners-cta__card">
            <div className="landowners-cta__bg" />
            <div className="landowners-cta__content">
              <h2>Interested in Becoming a Valued Land Owner?</h2>
              <p>
                Download our PDF for more information or contact Steve directly.
              </p>
              <div className="landowners-cta__contact">
                <a href="tel:0411518049" className="landowners-cta__contact-item">
                  <HiPhone /> 0411 518 049
                </a>
                <a href="mailto:steve@wabillboards.com.au" className="landowners-cta__contact-item">
                  <HiMail /> steve@wabillboards.com.au
                </a>
              </div>
              <div className="landowners-cta__actions">
                <a href={landOwnersPdf} download="Land-Owners.pdf" className="btn btn-secondary btn-lg">
                  <HiDownload /> Download PDF
                </a>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Contact Us <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
