import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { billboardImages, airportImages, digitalImages, galleryImages } from '../assets/billboardImages'
import BillboardCard from '../components/BillboardCard'
import CtaSection from '../components/CtaSection'
import { MotionLink, SectionHeading, Sticker, Floater, bouncy, springy, staggerParent, popChild } from '../components/Playful'
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
    <main className="bg-cream min-h-screen text-ink">
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
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[1]} alt="Billboard and outdoor advertising services across Western Australia" className="w-full h-full object-cover" />
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
                Our Services
              </span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] mb-4">Advertising<br />Solutions</motion.h1>
            <motion.p variants={popChild} className="text-lg text-white/90 font-semibold max-w-xl">
              Big Spaces for Big Ideas — comprehensive outdoor media options to reach your target audience across Western Australia.
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

      {/* Billboards Service */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="billboards">
        <Floater className="top-24 right-8 hidden lg:block" duration={8}>
          <div className="w-16 h-16 rounded-full bg-peach/80" />
        </Floater>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={popChild}>
                <Sticker className="bg-peach text-primary-deep">01 — Billboards</Sticker>
              </motion.div>
              <motion.h2 variants={popChild} className="text-4xl md:text-5xl font-semibold text-ink">
                Billboards
              </motion.h2>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                WA Billboards has an extensive inventory all over Western Australia — from the
                Kimberley, through the Goldfields and down to the South West. Having this broad
                coverage of both regional and metro billboards ensures that there is a perfect spot
                for your company to reach your desired target audience.
              </motion.p>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                This includes extreme condition billboards that are built in-house to withstand
                cyclone prone areas, ensuring your advertising remains visible in even the harshest
                conditions.
              </motion.p>
              <motion.ul variants={popChild} className="space-y-3">
                {billboardFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink font-bold">
                    <HiCheckCircle className="w-5 h-5 text-mint flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={popChild}>
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.06, rotate: -1 }}
                  whileTap={{ scale: 0.92 }}
                  transition={bouncy}
                  className="btn-pop bg-primary-dark text-white px-8 py-4 shadow-pop hover:bg-primary"
                >
                  Enquire Now <HiArrowRight />
                </MotionLink>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
            >
              <div className="grid grid-cols-2 gap-4">
                {billboardImages.slice(0, 4).map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, rotate: 0 }}
                    transition={bouncy}
                    className={`group relative overflow-hidden rounded-3xl border-4 border-white shadow-soft ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-ink shadow">{img.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Airports Service */}
      <section className="py-20 md:py-28 bg-peach/50" id="airports">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={popChild}>
                <Sticker className="bg-white text-primary-deep shadow-sm">02 — Airports</Sticker>
              </motion.div>
              <motion.h2 variants={popChild} className="text-4xl md:text-5xl font-semibold text-ink">
                Airports
              </motion.h2>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                WA Billboards holds the advertising rights to most of WA's regional airports,
                including Kalgoorlie-Boulder, Newman, Karratha, Port Hedland, Onslow and Geraldton.
                This allows our clients to reach their target audience in a large capacity.
              </motion.p>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                Advertising in these locations catches the attention of FIFO workers, city commuters,
                national and international tourists, and farmers — giving you unmatched audience diversity.
              </motion.p>
              <motion.div variants={popChild}>
                <h4 className="text-ink font-semibold text-lg mb-4">Airport Terminals</h4>
                <div className="grid grid-cols-2 gap-3">
                  {airportFeatures.map((airport, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3, rotate: i % 2 === 0 ? -1 : 1 }}
                      transition={bouncy}
                      className="bg-white rounded-2xl border-2 border-ink/5 shadow-sm px-4 py-3 text-ink text-sm font-bold"
                    >
                      {airport}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={popChild}>
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.06, rotate: -1 }}
                  whileTap={{ scale: 0.92 }}
                  transition={bouncy}
                  className="btn-pop bg-primary-dark text-white px-8 py-4 shadow-pop hover:bg-primary"
                >
                  Enquire Now <HiArrowRight />
                </MotionLink>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
            >
              <div className="grid grid-cols-2 gap-4">
                {airportImages.slice(0, 4).map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, rotate: 0 }}
                    transition={bouncy}
                    className={`group relative overflow-hidden rounded-3xl border-4 border-white shadow-soft ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-ink shadow">{img.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Service */}
      <section className="py-20 md:py-28" id="digital">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={popChild}>
                <Sticker className="bg-peach text-primary-deep">03 — Digital</Sticker>
              </motion.div>
              <motion.h2 variants={popChild} className="text-4xl md:text-5xl font-semibold text-ink">
                Digital
              </motion.h2>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                With the constant developments in technology, WA Billboards are moving to digital.
                We have installed a 12-faced screen at Karratha Airport and two 3-panelled screens
                in Newman and Kalgoorlie.
              </motion.p>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                Acquiring new digital sites will increase the number of clients on each site, as
                well as create more diverse advertising opportunities for businesses of all sizes.
              </motion.p>
              <motion.ul variants={popChild} className="space-y-3">
                {digitalFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink font-bold">
                    <HiCheckCircle className="w-5 h-5 text-mint flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={popChild}>
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.06, rotate: -1 }}
                  whileTap={{ scale: 0.92 }}
                  transition={bouncy}
                  className="btn-pop bg-primary-dark text-white px-8 py-4 shadow-pop hover:bg-primary"
                >
                  Enquire Now <HiArrowRight />
                </MotionLink>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
            >
              <div className="grid grid-cols-2 gap-4">
                {digitalImages.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, rotate: 0 }}
                    transition={bouncy}
                    className={`group relative overflow-hidden rounded-3xl border-4 border-white shadow-soft ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-ink shadow">
                        {img.name} — {img.location}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Billboard Showcase */}
      <section className="py-20 md:py-28 bg-peach/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Our Inventory"
            title={<>Billboard <span className="text-primary">Showcase</span></>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {billboardImages.map((img, i) => (
              <BillboardCard key={img.id} image={img} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        align="center"
        subtitle="Talk to our team about the best outdoor advertising options for your campaign."
        primary={{ to: '/contact', label: 'Get in Touch' }}
      />
    </main>
  )
}
