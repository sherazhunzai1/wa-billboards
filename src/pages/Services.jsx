import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { FaRoad, FaPlane, FaDesktop } from 'react-icons/fa'
import { billboardImages, airportImages, digitalImages, galleryImages } from '../assets/billboardImages'
import BillboardCard from '../components/BillboardCard'
import SEO from '../components/SEO'

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
    <main className="bg-[#0a0a0f] min-h-screen">
      <SEO
        title="Billboard Advertising Services — Billboards, Airport Ads & Digital Displays"
        path="/services"
        description="WA Billboards offers outdoor billboard advertising, airport terminal advertising at 6 WA airports & digital display screens. Serving Perth metro, Karratha, Port Hedland, Kalgoorlie & regional WA."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Advertising Services', path: '/services' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: {
            '@type': 'LocalBusiness',
            name: 'WA Billboards',
            url: 'https://wabillboards.com.au',
          },
          name: 'Outdoor Advertising Services',
          description: 'Comprehensive outdoor media advertising including billboards, airport advertising, and digital displays across Western Australia.',
          areaServed: {
            '@type': 'State',
            name: 'Western Australia',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Advertising Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Billboard Advertising', description: '200+ metro and regional billboard sites across all of Western Australia.' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airport Advertising', description: 'Advertising rights to 6 regional WA airports including Karratha, Port Hedland, Newman, Kalgoorlie, Geraldton and Onslow.' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Displays', description: 'Multi-faced digital screens at Karratha Airport, Newman and Kalgoorlie.' } },
            ],
          },
        }}
      />

      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[1]} alt="Billboard and outdoor advertising services across Western Australia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 mb-6">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Advertising Solutions</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive outdoor media options to reach your target audience across Western Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billboards Service */}
      <section className="py-20 md:py-28" id="billboards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-orange-500/10 text-orange-500">
                <FaRoad size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="gradient-text">Billboards</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                WA Billboards has an extensive inventory all over Western Australia — from the
                Kimberley, through the Goldfields and down to the South West. Having this broad
                coverage of both regional and metro billboards ensures that there is a perfect spot
                for your company to reach your desired target audience.
              </p>
              <p className="text-white/60 leading-relaxed">
                This includes extreme condition billboards that are built in-house to withstand
                cyclone prone areas, ensuring your advertising remains visible in even the harshest
                conditions.
              </p>
              <ul className="space-y-3">
                {billboardFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <HiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {billboardImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="group relative rounded-xl overflow-hidden glass hover-lift">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <span className="text-white/90 text-sm font-medium">{img.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Airports Service */}
      <section className="py-20 md:py-28 bg-white/[0.02]" id="airports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-pink-500/10 text-pink-500">
                <FaPlane size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="gradient-text">Airports</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                WA Billboards holds the advertising rights to most of WA's regional airports,
                including Kalgoorlie-Boulder, Newman, Karratha, Port Hedland, Onslow and Geraldton.
                This allows our clients to reach their target audience in a large capacity.
              </p>
              <p className="text-white/60 leading-relaxed">
                Advertising in these locations catches the attention of FIFO workers, city commuters,
                national and international tourists, and farmers — giving you unmatched audience diversity.
              </p>
              <div>
                <h4 className="text-white font-semibold mb-4">Airport Terminals</h4>
                <div className="grid grid-cols-2 gap-3">
                  {airportFeatures.map((airport, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-white/80 text-sm">
                      <FaPlane className="text-pink-400 flex-shrink-0" size={14} />
                      {airport}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {airportImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="group relative rounded-xl overflow-hidden glass hover-lift">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <span className="text-white/90 text-sm font-medium">{img.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Service */}
      <section className="py-20 md:py-28" id="digital">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-purple-500/10 text-purple-500">
                <FaDesktop size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="gradient-text">Digital</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                With the constant developments in technology, WA Billboards are moving to digital.
                We have installed a 12-faced screen at Karratha Airport and two 3-panelled screens
                in Newman and Kalgoorlie.
              </p>
              <p className="text-white/60 leading-relaxed">
                Acquiring new digital sites will increase the number of clients on each site, as
                well as create more diverse advertising opportunities for businesses of all sizes.
              </p>
              <ul className="space-y-3">
                {digitalFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <HiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {digitalImages.map((img, i) => (
                  <div key={i} className="group relative rounded-xl overflow-hidden glass hover-lift">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <span className="text-white/90 text-sm font-medium">
                        {img.name} — {img.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Billboard Showcase */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">Our Inventory</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Billboard <span className="gradient-text">Showcase</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {billboardImages.map((img, i) => (
              <BillboardCard key={img.id} image={img} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20" />
            <div className="absolute inset-0 glass-dark" />
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find the Perfect Advertising Solution</h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">Talk to our team about the best options for your campaign.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Get in Touch <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
