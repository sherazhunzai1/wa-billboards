import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiCheckCircle } from 'react-icons/hi'

import { galleryImages } from '../assets/billboardImages'
import SEO from '../components/SEO'
import './Contact.css'

const contactInfo = [
  {
    icon: <HiLocationMarker size={24} />,
    title: 'Office',
    lines: ['40B Boulder Road', 'MALAGA 6090'],
    color: '#FF6B35',
  },
  {
    icon: <HiLocationMarker size={24} />,
    title: 'Manufacturing',
    lines: ['Harvard Road', 'Jandakot Airport, WA'],
    color: '#FF4858',
  },
  {
    icon: <HiPhone size={24} />,
    title: 'Phone',
    lines: ['08 9248 5070'],
    color: '#E040FB',
  },
  {
    icon: <HiMail size={24} />,
    title: 'Email',
    lines: ['sales@wabillboards.com.au'],
    color: '#FFC857',
  },
  {
    icon: <HiClock size={24} />,
    title: 'Hours',
    lines: ['Mon - Fri: 8:30am - 5:00pm', 'Sat - Sun: Closed'],
    color: '#00E5FF',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact">
      <SEO
        title="Contact Us"
        path="/contact"
        description="Contact WA Billboards for billboards in Australia enquiries. Phone 08 9248 5070 or email sales@wabillboards.com.au. West Australia billboards office: 40B Boulder Road, MALAGA 6090."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'WA Billboards',
          description: "Western Australia's largest privately owned outdoor media company.",
          url: 'https://wabillboards.com.au',
          telephone: '08 9248 5070',
          email: 'sales@wabillboards.com.au',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '40B Boulder Road',
            addressLocality: 'Malaga',
            addressRegion: 'WA',
            postalCode: '6090',
            addressCountry: 'AU',
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:30',
            closes: '17:00',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -31.8587,
            longitude: 115.8985,
          },
        }}
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[7]} alt="Contact WA Billboards for outdoor advertising enquiries" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Get In Touch</span>
            <h1 className="page-header__title">Contact Us</h1>
            <p className="page-header__subtitle">
              Ready to boost your brand visibility? Let's talk about the perfect outdoor advertising solution for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-info__grid">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                className="contact-info__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="contact-info__icon" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="contact-info__title">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="contact-info__line">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-section__layout">
            <motion.div
              className="contact-form-section__info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Send a Message</span>
              <h2 className="section-title">
                Let's Start Your <span className="gradient-text">Campaign</span>
              </h2>
              <p className="contact-form-section__text">
                Whether you're looking for a single billboard or a multi-site campaign,
                our team is ready to help you find the perfect outdoor advertising solution.
              </p>
              <p className="contact-form-section__text">
                Fill in the form and we'll get back to you within 24 hours.
                Alternatively, give us a call or drop by our Malaga office.
              </p>

              <div className="contact-form-section__image">
                <img src={galleryImages[8]} alt="WA Billboards office and billboard operations in Malaga WA" />
              </div>

            </motion.div>

            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="contact-form__success">
                  <div className="contact-form__success-icon">
                    <HiCheckCircle size={64} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for your enquiry. Our team will get back to you within 24 hours.</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="contact-form__title">Get a Free Quote</h3>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(08) XXXX XXXX"
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="billboards">Billboards</option>
                      <option value="airports">Airport Advertising</option>
                      <option value="digital">Digital Displays</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your advertising needs..."
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary contact-form__submit">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="contact-map">
        <div className="container">
          <div className="contact-map__card">
            <div className="contact-map__placeholder">
              <HiLocationMarker size={48} />
              <h3>Our Office Location</h3>
              <p>40B Boulder Road, MALAGA 6090</p>
              <p className="contact-map__note">
                Sales, Marketing, Operations & Administration
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
