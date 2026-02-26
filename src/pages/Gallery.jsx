import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { galleryImages } from '../assets/billboardImages'
import SEO from '../components/SEO'
import './Gallery.css'

// Metro Billboards
import metro1 from '../assets/images/billboards/metro1.jpg'
import metro2 from '../assets/images/billboards/metro2.jpg'
import metro3 from '../assets/images/billboards/metro3.jpg'
import metro4 from '../assets/images/billboards/metro4.jpg'
import metro5 from '../assets/images/billboards/metro5.jpg'
import metro6 from '../assets/images/billboards/metro6.jpg'
import metro7 from '../assets/images/billboards/metro7.jpg'
import metro8 from '../assets/images/billboards/metro8.jpg'

// Regional Billboards
import regional1 from '../assets/images/billboards/regional1.jpg'
import regional2 from '../assets/images/billboards/regional2.jpg'
import regional3 from '../assets/images/billboards/regional3.jpg'
import regional4 from '../assets/images/billboards/regional4.jpg'
import regional5 from '../assets/images/billboards/regional5.jpg'
import regional6 from '../assets/images/billboards/regional6.jpg'
import regional7 from '../assets/images/billboards/regional7.jpg'
import regional8 from '../assets/images/billboards/regional8.jpg'

// Airport Billboards
import airport1 from '../assets/images/billboards/airport1.jpg'
import airport2 from '../assets/images/billboards/airport2.png'
import airport3 from '../assets/images/billboards/airport3.png'
import airport4 from '../assets/images/billboards/airport4.jpg'
import airport5 from '../assets/images/billboards/airport5.jpg'
import airport6 from '../assets/images/billboards/airport6.jpg'
import airport7 from '../assets/images/billboards/airport7.jpg'
import airport8 from '../assets/images/billboards/airport8.jpg'

// Ambient
import ambient1 from '../assets/images/billboards/ambient1.png'
import ambient2 from '../assets/images/billboards/ambient2.jpg'
import ambient3 from '../assets/images/billboards/ambient3.jpg'
import ambient4 from '../assets/images/billboards/ambient4.jpg'
import ambient5 from '../assets/images/billboards/ambient5.jpg'
import ambient6 from '../assets/images/billboards/ambient6.jpg'
import ambient7 from '../assets/images/billboards/ambient7.jpg'
import ambient8 from '../assets/images/billboards/ambient8.jpg'

const sections = [
  {
    key: 'metro',
    title: 'Metro',
    highlight: 'Billboards',
    description:
      'High-impact billboard advertising across Perth and metropolitan Western Australia.',
    images: [metro1, metro2, metro3, metro4, metro5, metro6, metro7, metro8],
    alts: [
      'Large billboard on Perth metropolitan freeway',
      'Roadside metro billboard advertising near busy intersection',
      'Illuminated billboard on major Perth highway at dusk',
      'Double-sided metro billboard on Mitchell Freeway corridor',
      'High-visibility billboard alongside Perth urban road',
      'Metro billboard targeting peak-hour commuter traffic',
      'Billboard advertising at key Perth metro location',
      'Rooftop billboard in Perth metropolitan commercial area',
    ],
  },
  {
    key: 'regional',
    title: 'Regional',
    highlight: 'Billboards',
    description:
      'Reaching audiences across regional WA — from the Kimberley through Goldfields to the South West.',
    images: [regional1, regional2, regional3, regional4, regional5, regional6, regional7, regional8],
    alts: [
      'Regional billboard on outback Western Australia highway',
      'Billboard advertising in Goldfields region along main road',
      'Cyclone-rated billboard in Kimberley region WA',
      'Regional roadside billboard targeting long-distance travellers',
      'South West WA billboard near country town',
      'Billboard installation on regional WA route',
      'Outback billboard advertising for remote area exposure',
      'Regional WA billboard serviced by WA Billboards aircraft',
    ],
  },
  {
    key: 'airport',
    title: 'Airport',
    highlight: 'Billboards',
    description:
      'Captivating travellers at major regional airports throughout Western Australia.',
    images: [airport1, airport2, airport3, airport4, airport5, airport6, airport7, airport8],
    alts: [
      'Airport terminal advertising display at WA regional airport',
      'Lightbox advertisement inside airport arrivals hall',
      'Digital advertising screen at airport passenger lounge',
      'Billboard advertising outside regional airport terminal',
      'Airport baggage claim area advertising panel',
      'Terminal walkway advertising at Karratha Airport',
      'Airport departure lounge billboard display',
      'Advertising display at WA regional airport entrance',
    ],
  },
  {
    key: 'ambient',
    title: 'Ambient',
    highlight: 'Advertising',
    description:
      'Creative ambient media placements that connect brands with audiences in unexpected ways.',
    images: [ambient1, ambient2, ambient3, ambient4, ambient5, ambient6, ambient7, ambient8],
    alts: [
      'Creative ambient advertising installation in public space',
      'Ambient media placement at high-traffic WA location',
      'Unconventional advertising display on commercial building',
      'Ambient brand activation at outdoor event venue',
      'Street-level ambient advertising engaging pedestrians',
      'Ambient advertising on building facade in WA',
      'Creative out-of-home media placement in urban setting',
      'Ambient advertising display at shopping precinct entrance',
    ],
  },
]

// Build flat list for lightbox navigation
const allImages = sections.flatMap((s) =>
  s.images.map((src, i) => ({ src, alt: s.alts[i] }))
)

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const openLightbox = (sectionIdx, imgIdx) => {
    const globalIdx = sectionIdx * 8 + imgIdx
    setLightbox({ open: true, index: globalIdx })
  }

  const closeLightbox = () => setLightbox({ open: false, index: 0 })

  const goPrev = () =>
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? allImages.length - 1 : prev.index - 1,
    }))

  const goNext = () =>
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === allImages.length - 1 ? 0 : prev.index + 1,
    }))

  return (
    <main className="gallery">
      <SEO
        title="Billboard Gallery — Metro, Regional, Airport & Ambient Advertising Photos"
        path="/gallery"
        description="Browse 30+ photos of WA Billboards installations — Perth metro billboards, regional highway billboards, airport terminal advertising & ambient media across Western Australia."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'WA Billboards Photo Gallery',
          description: 'Photos of billboard advertising installations across Perth metro, regional Western Australia, airports and ambient locations.',
          url: 'https://wabillboards.com.au/gallery',
          publisher: {
            '@type': 'Organization',
            name: 'WA Billboards',
            url: 'https://wabillboards.com.au',
          },
        }}
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img
            src={galleryImages[0]}
            alt="WA Billboards gallery showcasing billboard advertising across Western Australia"
          />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Our Work</span>
            <h1 className="page-header__title">Gallery</h1>
            <p className="page-header__subtitle">
              Explore our billboard installations across metro, regional,
              airport, and ambient locations throughout Western Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Sections */}
      {sections.map((section, sIdx) => (
        <section
          key={section.key}
          className={`gallery-section ${sIdx % 2 === 1 ? 'gallery-section--alt' : ''}`}
        >
          <div className="container">
            <motion.div
              className="gallery-section__header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">{section.title} {section.highlight}</span>
              <h2 className="section-title">
                {section.title}{' '}
                <span className="gradient-text">{section.highlight}</span>
              </h2>
              <p className="section-subtitle">{section.description}</p>
            </motion.div>

            <div className="gallery-section__grid">
              {/* Featured large image */}
              <motion.div
                className="gallery-section__featured"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(sIdx, 0)}
              >
                <img src={section.images[0]} alt={section.alts[0]} loading="lazy" />
                <div className="gallery-section__img-overlay" />
              </motion.div>

              {/* Remaining images */}
              <div className="gallery-section__thumbnails">
                {section.images.slice(1).map((img, i) => (
                  <motion.div
                    key={i}
                    className="gallery-section__thumb"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => openLightbox(sIdx, i + 1)}
                  >
                    <img src={img} alt={section.alts[i + 1]} loading="lazy" />
                    <div className="gallery-section__img-overlay" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <HiX />
            </button>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous image"
            >
              <HiChevronLeft />
            </button>

            <motion.img
              key={lightbox.index}
              src={allImages[lightbox.index]?.src}
              alt={allImages[lightbox.index]?.alt}
              className="gallery-lightbox__img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next image"
            >
              <HiChevronRight />
            </button>

            <div className="gallery-lightbox__counter">
              {lightbox.index + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
