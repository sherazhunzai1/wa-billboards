import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
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
    <main className="bg-charcoal min-h-screen">
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

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[1]} alt="Billboard and outdoor advertising services across Western Australia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="stamp mb-6 inline-block">Our Services</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">Advertising<br />Solutions</h1>
            <p className="text-lg text-ash max-w-xl">
              Big Spaces for Big Ideas — comprehensive outdoor media options to reach your target audience across Western Australia.
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
              <span className="text-6xl md:text-7xl font-mono font-bold text-lime/15">01</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-chalk -mt-4">
                Billboards
              </h2>
              <p className="text-ash leading-relaxed">
                WA Billboards has an extensive inventory all over Western Australia — from the
                Kimberley, through the Goldfields and down to the South West. Having this broad
                coverage of both regional and metro billboards ensures that there is a perfect spot
                for your company to reach your desired target audience.
              </p>
              <p className="text-ash leading-relaxed">
                This includes extreme condition billboards that are built in-house to withstand
                cyclone prone areas, ensuring your advertising remains visible in even the harshest
                conditions.
              </p>
              <ul className="space-y-3">
                {billboardFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-chalk">
                    <span className="w-6 h-px bg-lime flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-lime text-white font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-lime/90">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-px bg-black/5">
                {billboardImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="group relative overflow-hidden">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                      <span className="text-white text-sm font-medium">{img.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Airports Service */}
      <section className="py-20 md:py-28 bg-charcoal-light" id="airports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-6xl md:text-7xl font-mono font-bold text-lime/15">02</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-chalk -mt-4">
                Airports
              </h2>
              <p className="text-ash leading-relaxed">
                WA Billboards holds the advertising rights to most of WA's regional airports,
                including Kalgoorlie-Boulder, Newman, Karratha, Port Hedland, Onslow and Geraldton.
                This allows our clients to reach their target audience in a large capacity.
              </p>
              <p className="text-ash leading-relaxed">
                Advertising in these locations catches the attention of FIFO workers, city commuters,
                national and international tourists, and farmers — giving you unmatched audience diversity.
              </p>
              <div>
                <h4 className="text-chalk font-bold uppercase tracking-[0.1em] text-sm mb-4">Airport Terminals</h4>
                <div className="grid grid-cols-2 gap-px">
                  {airportFeatures.map((airport, i) => (
                    <div key={i} className="bg-charcoal border border-black/5 px-4 py-3 text-chalk text-sm">
                      {airport}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-lime text-white font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-lime/90">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-px bg-black/5">
                {airportImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="group relative overflow-hidden">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                      <span className="text-white text-sm font-medium">{img.name}</span>
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
              <span className="text-6xl md:text-7xl font-mono font-bold text-lime/15">03</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-chalk -mt-4">
                Digital
              </h2>
              <p className="text-ash leading-relaxed">
                With the constant developments in technology, WA Billboards are moving to digital.
                We have installed a 12-faced screen at Karratha Airport and two 3-panelled screens
                in Newman and Kalgoorlie.
              </p>
              <p className="text-ash leading-relaxed">
                Acquiring new digital sites will increase the number of clients on each site, as
                well as create more diverse advertising opportunities for businesses of all sizes.
              </p>
              <ul className="space-y-3">
                {digitalFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-chalk">
                    <span className="w-6 h-px bg-lime flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-lime text-white font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-lime/90">
                Enquire Now <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-px bg-black/5">
                {digitalImages.map((img, i) => (
                  <div key={i} className="group relative overflow-hidden">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                      <span className="text-white text-sm font-medium">
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
      <section className="py-20 md:py-28 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-lime" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">Our Inventory</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-chalk">
              Billboard Showcase
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px">
            {billboardImages.map((img, i) => (
              <BillboardCard key={img.id} image={img} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime p-12 md:p-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Big Spaces for Big Ideas</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Talk to our team about the best outdoor advertising options for your campaign.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-charcoal font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/90">
            Get in Touch <HiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}
