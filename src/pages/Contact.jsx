import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiChevronDown, HiCheckCircle } from 'react-icons/hi'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { galleryImages } from '../assets/billboardImages'
import { SectionHeading, Floater, bouncy, springy, staggerParent, popChild } from '../components/Playful'
import SEO from '../components/SEO'

const OFFICE = { lat: -31.8587, lng: 115.8985 }

const officeMarker = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const contactInfo = [
  {
    icon: <HiLocationMarker size={20} />,
    title: 'Office',
    lines: ['40B Boulder Road', 'MALAGA 6090'],
  },
  {
    icon: <HiPhone size={20} />,
    title: 'Phone',
    lines: ['08 9248 5070'],
  },
  {
    icon: <HiMail size={20} />,
    title: 'Email',
    lines: ['sales@wabillboards.com.au'],
  },
  {
    icon: <HiClock size={20} />,
    title: 'Hours',
    lines: ['Mon - Fri: 8:30am - 5:00pm', 'Sat - Sun: Closed'],
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
    <main className="bg-cream min-h-screen text-ink">
      <SEO
        title="Contact Us — Get a Free Billboard Advertising Quote"
        path="/contact"
        description="Contact WA Billboards for billboard advertising enquiries. Phone 08 9248 5070, email sales@wabillboards.com.au. Office: 40B Boulder Road, Malaga WA 6090. Free quotes for Perth & regional WA."
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

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[7]} alt="Contact WA Billboards for outdoor advertising enquiries" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={popChild} className="mb-6">
              <span className="inline-block rounded-full bg-sun px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-ink shadow-lg -rotate-2">
                Get In Touch
              </span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] mb-4">Contact Us</motion.h1>
            <motion.p variants={popChild} className="text-lg text-white/90 font-semibold max-w-xl">
              Big Spaces for Big Ideas — ready to boost your brand visibility? Let's talk about the perfect outdoor advertising solution for you.
            </motion.p>
          </motion.div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full text-cream pointer-events-none"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,55 C240,95 480,20 720,45 C960,70 1200,25 1440,55 L1440,90 L0,90 Z" fill="currentColor" />
        </svg>
      </section>

      {/* Contact Info Strip */}
      <section className="relative z-20 -mt-8 px-6 md:px-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              variants={popChild}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              transition={bouncy}
              className="bg-white rounded-3xl border-2 border-ink/5 shadow-soft px-6 py-7"
            >
              <span className="inline-flex w-11 h-11 rounded-2xl bg-peach text-primary items-center justify-center text-xl mb-4">
                {item.icon}
              </span>
              <h3 className="text-ink font-semibold mb-1.5">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-ink-soft text-sm font-bold">{line}</p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <Floater className="top-16 right-8 hidden lg:block" duration={9}>
          <div className="w-20 h-20 rounded-full bg-peach/80" />
        </Floater>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Info */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={popChild}>
                <span className="inline-block rounded-full bg-peach px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-deep shadow-sm">
                  Send a Message
                </span>
              </motion.div>
              <motion.h2 variants={popChild} className="text-4xl md:text-5xl font-semibold text-ink leading-[1.08]">
                Let's start your <span className="text-primary squiggle">campaign</span>
              </motion.h2>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                Whether you're looking for a single billboard or a multi-site campaign,
                our team is ready to help you find the perfect outdoor advertising solution.
              </motion.p>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                Fill in the form and we'll get back to you within 24 hours.
                Alternatively, give us a call or drop by our Malaga office.
              </motion.p>

              <motion.div variants={popChild} className="overflow-hidden rounded-[2rem] border-4 border-white shadow-soft rotate-1 mt-6">
                <img src={galleryImages[8]} alt="WA Billboards office and billboard operations in Malaga WA" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
            >
              <div className="bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft-lg p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={bouncy}
                      className="mx-auto w-20 h-20 rounded-full bg-mint/15 text-mint flex items-center justify-center mb-4"
                    >
                      <HiCheckCircle size={44} />
                    </motion.div>
                    <h3 className="text-3xl font-semibold text-ink">Message Sent!</h3>
                    <p className="text-ink-soft font-semibold">Thank you for your enquiry. Our team will get back to you within 24 hours.</p>
                    <motion.button
                      className="btn-pop bg-primary-dark text-white px-8 py-3.5 shadow-pop hover:bg-primary mt-4"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.93 }}
                      transition={bouncy}
                    >
                      Send Another Message
                    </motion.button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-2xl font-semibold text-ink mb-2">Say hello</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-extrabold text-ink mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 rounded-2xl bg-cream border-2 border-peach text-ink font-semibold placeholder-ink-soft/50 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-extrabold text-ink mb-1.5">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                          className="w-full px-4 py-3 rounded-2xl bg-cream border-2 border-peach text-ink font-semibold placeholder-ink-soft/50 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-extrabold text-ink mb-1.5">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(08) XXXX XXXX"
                          className="w-full px-4 py-3 rounded-2xl bg-cream border-2 border-peach text-ink font-semibold placeholder-ink-soft/50 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-extrabold text-ink mb-1.5">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-2xl bg-cream border-2 border-peach text-ink font-semibold placeholder-ink-soft/50 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-extrabold text-ink mb-1.5">Service Interest</label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pr-10 rounded-2xl bg-cream border-2 border-peach text-ink font-semibold focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a service...</option>
                          <option value="billboards">Billboards</option>
                          <option value="airports">Airport Advertising</option>
                          <option value="digital">Digital Displays</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="other">Other</option>
                        </select>
                        <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none" size={18} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-extrabold text-ink mb-1.5">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your advertising needs..."
                        rows="5"
                        required
                        className="w-full px-4 py-3 rounded-2xl bg-cream border-2 border-peach text-ink font-semibold placeholder-ink-soft/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-pop w-full justify-center py-4 bg-primary-dark text-white shadow-pop hover:bg-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      transition={bouncy}
                    >
                      Send Message →
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Map */}
      <section className="py-20 md:py-28 bg-peach/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Visit Us"
            title={<>Our office <span className="text-primary">location</span></>}
          />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3 rounded-[2rem] overflow-hidden border-4 border-white shadow-soft-lg" style={{ height: '420px' }}>
              <MapContainer
                center={[OFFICE.lat, OFFICE.lng]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='Tiles &copy; Esri'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                />
                <Marker position={[OFFICE.lat, OFFICE.lng]} icon={officeMarker}>
                  <Popup>
                    <div>
                      <h4 style={{ fontWeight: 'bold' }}>WA Billboards — Office</h4>
                      <p>40B Boulder Road, MALAGA WA 6090</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=40B+Boulder+Road+Malaga+WA+6090"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <motion.div
              className="w-full lg:w-1/3 bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft p-8 lg:p-10 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
            >
              <span className="inline-flex w-14 h-14 rounded-2xl bg-peach text-primary items-center justify-center mb-5">
                <HiLocationMarker size={28} />
              </span>
              <h3 className="text-2xl font-semibold text-ink mb-3">Malaga Office</h3>
              <p className="text-ink font-bold mb-1">40B Boulder Road</p>
              <p className="text-ink font-bold mb-4">MALAGA WA 6090</p>
              <p className="text-ink-soft text-sm font-semibold leading-relaxed mb-6">
                Sales, Marketing, Operations &amp; Administration — all under one roof.
              </p>
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=40B+Boulder+Road+Malaga+WA+6090"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop bg-primary-dark text-white px-6 py-3 text-sm shadow-pop hover:bg-primary self-start"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.93 }}
                transition={bouncy}
              >
                Get Directions →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
