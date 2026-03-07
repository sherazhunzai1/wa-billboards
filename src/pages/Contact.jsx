import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiCheckCircle } from 'react-icons/hi'

import { galleryImages } from '../assets/billboardImages'
import SEO from '../components/SEO'

const contactInfo = [
  {
    icon: <HiLocationMarker size={24} />,
    title: 'Office',
    lines: ['40B Boulder Road', 'MALAGA 6090'],
    color: '#FF6B35',
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
    <main className="bg-[#0a0a0f] min-h-screen">
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

      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[7]} alt="Contact WA Billboards for outdoor advertising enquiries" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 mb-6">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Ready to boost your brand visibility? Let's talk about the perfect outdoor advertising solution for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-white/50 text-sm">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Info */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let's Start Your <span className="gradient-text">Campaign</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                Whether you're looking for a single billboard or a multi-site campaign,
                our team is ready to help you find the perfect outdoor advertising solution.
              </p>
              <p className="text-white/60 leading-relaxed">
                Fill in the form and we'll get back to you within 24 hours.
                Alternatively, give us a call or drop by our Malaga office.
              </p>

              <div className="glass rounded-2xl overflow-hidden mt-6">
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
              <div className="glass rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="text-green-400">
                      <HiCheckCircle size={64} className="mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-white/60">Thank you for your enquiry. Our team will get back to you within 24 hours.</p>
                    <button
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 mt-4"
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
                    <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1.5">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(08) XXXX XXXX"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1.5">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-1.5">Service Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0a0a0f]">Select a service...</option>
                        <option value="billboards" className="bg-[#0a0a0f]">Billboards</option>
                        <option value="airports" className="bg-[#0a0a0f]">Airport Advertising</option>
                        <option value="digital" className="bg-[#0a0a0f]">Digital Displays</option>
                        <option value="multiple" className="bg-[#0a0a0f]">Multiple Services</option>
                        <option value="other" className="bg-[#0a0a0f]">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your advertising needs..."
                        rows="5"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
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

      {/* Map Placeholder */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-12 text-center">
            <HiLocationMarker size={48} className="text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Our Office Location</h3>
            <p className="text-white/60 mb-1">40B Boulder Road, MALAGA 6090</p>
            <p className="text-white/40 text-sm">
              Sales, Marketing, Operations & Administration
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
