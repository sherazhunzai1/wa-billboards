import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiChevronDown } from 'react-icons/hi'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { galleryImages } from '../assets/billboardImages'
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
    <main className="bg-charcoal min-h-screen">
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
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[7]} alt="Contact WA Billboards for outdoor advertising enquiries" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="stamp mb-6 inline-block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">Contact Us</h1>
            <p className="text-lg text-ash max-w-xl">
              Big Spaces for Big Ideas — ready to boost your brand visibility? Let's talk about the perfect outdoor advertising solution for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                className="px-6 py-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lime">{item.icon}</span>
                  <h3 className="text-white font-bold uppercase tracking-[0.1em] text-sm">{item.title}</h3>
                </div>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-ash text-sm">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Info */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-6 h-px bg-lime" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">Send a Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                Let's Start Your Campaign
              </h2>
              <p className="text-ash leading-relaxed">
                Whether you're looking for a single billboard or a multi-site campaign,
                our team is ready to help you find the perfect outdoor advertising solution.
              </p>
              <p className="text-ash leading-relaxed">
                Fill in the form and we'll get back to you within 24 hours.
                Alternatively, give us a call or drop by our Malaga office.
              </p>

              <div className="overflow-hidden mt-6">
                <img src={galleryImages[8]} alt="WA Billboards office and billboard operations in Malaga WA" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-charcoal-light border border-white/5 p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="text-6xl font-black text-lime mb-4">SENT</div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Message Sent!</h3>
                    <p className="text-ash">Thank you for your enquiry. Our team will get back to you within 24 hours.</p>
                    <button
                      className="inline-flex items-center gap-2 px-8 py-3 bg-lime text-white font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-lime/90 mt-4"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Contact Us</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold uppercase tracking-[0.1em] text-ash mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-lime transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-[0.1em] text-ash mb-1.5">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                          className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-lime transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-[0.1em] text-ash mb-1.5">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(08) XXXX XXXX"
                          className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-lime transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold uppercase tracking-[0.1em] text-ash mb-1.5">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-lime transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold uppercase tracking-[0.1em] text-ash mb-1.5">Service Interest</label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pr-10 bg-charcoal border border-white/10 text-white focus:outline-none focus:border-lime transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-charcoal">Select a service...</option>
                          <option value="billboards" className="bg-charcoal">Billboards</option>
                          <option value="airports" className="bg-charcoal">Airport Advertising</option>
                          <option value="digital" className="bg-charcoal">Digital Displays</option>
                          <option value="multiple" className="bg-charcoal">Multiple Services</option>
                          <option value="other" className="bg-charcoal">Other</option>
                        </select>
                        <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-ash pointer-events-none" size={18} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold uppercase tracking-[0.1em] text-ash mb-1.5">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your advertising needs..."
                        rows="5"
                        required
                        className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-lime transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-lime text-white font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-lime/90"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Map */}
      <section className="py-20 md:py-28 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-lime" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">Visit Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Our Office Location
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-px border border-white/10">
            <div className="w-full lg:w-2/3" style={{ height: '420px' }}>
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
            <div className="w-full lg:w-1/3 bg-charcoal p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-lime mb-4">
                <HiLocationMarker size={28} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-3">Malaga Office</h3>
              <p className="text-chalk text-sm mb-1">40B Boulder Road</p>
              <p className="text-chalk text-sm mb-4">MALAGA WA 6090</p>
              <p className="text-ash text-sm leading-relaxed mb-6">
                Sales, Marketing, Operations &amp; Administration — all under one roof.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=40B+Boulder+Road+Malaga+WA+6090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-lime font-bold hover:gap-4 transition-all"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
