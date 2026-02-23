import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { galleryImages } from '../assets/billboardImages'
import img24Sheet from '../assets/images/billboards/24-Sheet.png'
import imgSuper8 from '../assets/images/billboards/super 8.png'
import imgSupersite from '../assets/images/billboards/Supersite.png'
import imgSpectacular from '../assets/images/billboards/Spectacular.png'
import imgDigital from '../assets/images/billboards/Digital.png'
import SEO from '../components/SEO'
import './AboutBillboards.css'

const formats = [
  {
    name: '24 Sheet',
    width: '6M',
    height: '3M',
    image: img24Sheet,
    description:
      "The vast majority of WA Billboards' inventory is made up of 6m x 3m 24 Sheet billboards. The term '24 Sheet' relates back to when it took 24 sheets of paper to bill-post a board. This format is commonly featured in metro and regional areas and across several of WA's main highways. This format is a cost-effective solution for both local and national advertisers to display their message.",
    color: '#FF6B35',
  },
  {
    name: 'Super 8',
    width: '8.3M',
    height: '2.2M',
    image: imgSuper8,
    description:
      "Super 8's have become popular in recent years as they offer an alternative option to the full size Supersites. This format is very similar at a 4:1 ratio, however it boasts a lower price point. A true Super 8 is placed on a major highway, and will include flood lighting.",
    color: '#FF4858',
  },
  {
    name: 'Supersite',
    width: '12.6M',
    height: '3.3M',
    image: imgSupersite,
    description:
      'Supersites are the standard fare for large format advertising and always include flood lighting for night time viewing. This format is often situated in urban, metropolitan and high traffic locations.',
    color: '#E040FB',
  },
  {
    name: 'Spectacular',
    width: '15M',
    height: '5M',
    image: imgSpectacular,
    description:
      "'Spectacular' is a broad name that covers any panel larger than a Supersite. WA Billboards has one Spectacular billboard which measures a whopping 15m x 5m. The most common Spectacular format is 18m x 4m.",
    color: '#FFC857',
  },
  {
    name: 'Digital',
    width: 'Various',
    height: 'Sizes',
    image: imgDigital,
    description:
      'Digital billboards offer a strong and diverse advertising option for clients. This format is versatile and can display still images as well as video. Advertisers have the ability to be selective, reactive and creative.',
    color: '#00E5FF',
  },
]

export default function AboutBillboards() {
  return (
    <main className="about-billboards">
      <SEO
        title="About Billboards"
        path="/about-billboards"
        description="Learn about billboard formats from WA Billboards — 24 Sheet, Super 8, Supersite, Spectacular & Digital. West Australia billboards in every size for billboards Australia-wide campaigns."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Billboards', path: '/about-billboards' },
        ]}
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[1]} alt="Billboard formats and sizes offered by WA Billboards across Western Australia" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Billboard Knowledge</span>
            <h1 className="page-header__title">About Billboards</h1>
            <p className="page-header__subtitle">
              From classic 24 Sheets to spectacular digital displays — understand the billboard formats that make outdoor advertising so powerful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="ab-intro">
        <div className="container">
          <motion.div
            className="ab-intro__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">The Evolution</span>
            <h2 className="section-title">
              What Is a <span className="gradient-text">Billboard?</span>
            </h2>
            <p className="ab-intro__text">
              Traditionally billboards were seen as fixed advertising panels located in various areas to exhibit an advertiser's message, and were displayed in standardised sizes and formats. In more recent years the definition of 'billboard' has evolved to include a wide variety of layouts, designs and styles including bus shelters, electronic and digital signage. This transformation has revolutionised the industry, resulting in businesses re-branding themselves to become overall Out of Home media providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formats */}
      <section className="ab-formats">
        <div className="container">
          <div className="ab-formats__header">
            <span className="section-tag">Billboard Formats</span>
            <h2 className="section-title">
              Our <span className="gradient-text">Formats</span>
            </h2>
            <p className="section-subtitle">
              WA Billboards offers a range of billboard sizes to suit every campaign and budget.
            </p>
          </div>

          <div className="ab-formats__list">
            {formats.map((format, i) => (
              <motion.div
                key={format.name}
                className={`ab-format ${i % 2 !== 0 ? 'ab-format--reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="ab-format__image-wrap">
                  <img src={format.image} alt={`${format.name} billboard format — ${format.width} wide x ${format.height} high`} className="ab-format__image" />
                </div>
                <div className="ab-format__content">
                  <div className="ab-format__badge" style={{ background: `${format.color}18`, color: format.color }}>
                    {format.name}
                  </div>
                  <div className="ab-format__dimensions">
                    <div className="ab-format__dim">
                      <span className="ab-format__dim-label">Width</span>
                      <span className="ab-format__dim-value" style={{ color: format.color }}>{format.width}</span>
                    </div>
                    <div className="ab-format__dim-divider" />
                    <div className="ab-format__dim">
                      <span className="ab-format__dim-label">Height</span>
                      <span className="ab-format__dim-value" style={{ color: format.color }}>{format.height}</span>
                    </div>
                  </div>
                  <p className="ab-format__desc">{format.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div className="container">
          <div className="ab-cta__card">
            <div className="ab-cta__bg" />
            <div className="ab-cta__content">
              <h2>Ready to Choose the Right Billboard?</h2>
              <p>Our team can help you pick the perfect format for your campaign goals and budget.</p>
              <div className="ab-cta__actions">
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Get in Touch <HiArrowRight />
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
