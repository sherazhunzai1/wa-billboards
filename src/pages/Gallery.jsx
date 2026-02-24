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

const categories = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'metro',
    label: 'Metro Billboards',
    images: [metro1, metro2, metro3, metro4, metro5, metro6, metro7, metro8],
  },
  {
    key: 'regional',
    label: 'Regional Billboards',
    images: [regional1, regional2, regional3, regional4, regional5, regional6, regional7, regional8],
  },
  {
    key: 'airport',
    label: 'Airport Billboards',
    images: [airport1, airport2, airport3, airport4, airport5, airport6, airport7, airport8],
  },
  {
    key: 'ambient',
    label: 'Ambient',
    images: [ambient1, ambient2, ambient3, ambient4, ambient5, ambient6, ambient7, ambient8],
  },
]

function getAllImages() {
  return categories
    .filter((c) => c.key !== 'all')
    .flatMap((c) => c.images.map((src) => ({ src, category: c.label })))
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const allImages = getAllImages()

  const filtered =
    activeFilter === 'all'
      ? allImages
      : allImages.filter(
          (img) =>
            img.category === categories.find((c) => c.key === activeFilter)?.label
        )

  const openLightbox = (index) => setLightbox({ open: true, index })
  const closeLightbox = () => setLightbox({ open: false, index: 0 })

  const goPrev = () =>
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? filtered.length - 1 : prev.index - 1,
    }))

  const goNext = () =>
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === filtered.length - 1 ? 0 : prev.index + 1,
    }))

  return (
    <main className="gallery">
      <SEO
        title="Gallery"
        path="/gallery"
        description="Browse the WA Billboards gallery — metro billboards, regional billboards, airport billboards and ambient advertising across Western Australia."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
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

      {/* Filter Bar */}
      <section className="gallery-filters">
        <div className="container">
          <div className="gallery-filters__bar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`gallery-filters__btn ${activeFilter === cat.key ? 'gallery-filters__btn--active' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <motion.div className="gallery-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.category}-${img.src}-${i}`}
                  className="gallery-grid__item"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={`${img.category} - WA Billboards`}
                    loading="lazy"
                  />
                  <div className="gallery-grid__overlay">
                    <span className="gallery-grid__category">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

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
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="Previous image"
            >
              <HiChevronLeft />
            </button>

            <motion.img
              key={lightbox.index}
              src={filtered[lightbox.index]?.src}
              alt={`${filtered[lightbox.index]?.category} - WA Billboards`}
              className="gallery-lightbox__img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="Next image"
            >
              <HiChevronRight />
            </button>

            <div className="gallery-lightbox__counter">
              {lightbox.index + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
