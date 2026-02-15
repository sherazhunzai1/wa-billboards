import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { FaPlane, FaRoad, FaDesktop } from 'react-icons/fa'
import { billboardImages, galleryImages } from '../assets/billboardImages'
import BillboardCard from '../components/BillboardCard'
import './Locations.css'

const locations = [
  { id: 1, name: 'Perth Metro', type: 'billboard', lat: -31.95, lng: 115.86, x: 32.5, y: 82.5, desc: 'Mitchell Freeway, Great Eastern Highway & more' },
  { id: 2, name: 'Karratha', type: 'airport', lat: -20.73, lng: 116.85, x: 34, y: 51, desc: 'Karratha Airport - 12-faced digital screen' },
  { id: 3, name: 'Port Hedland', type: 'airport', lat: -20.37, lng: 118.63, x: 38, y: 49, desc: 'Port Hedland Airport terminal advertising' },
  { id: 4, name: 'Newman', type: 'airport', lat: -23.42, lng: 119.80, x: 40, y: 58, desc: 'Newman Airport - 3-panelled digital screen' },
  { id: 5, name: 'Kalgoorlie', type: 'airport', lat: -30.79, lng: 121.47, x: 43, y: 79, desc: 'Kalgoorlie-Boulder Airport - digital screen' },
  { id: 6, name: 'Geraldton', type: 'airport', lat: -28.80, lng: 114.70, x: 31, y: 72, desc: 'Geraldton Airport terminal advertising' },
  { id: 7, name: 'Onslow', type: 'airport', lat: -21.67, lng: 115.11, x: 31.5, y: 54, desc: 'Onslow Airport advertising rights' },
  { id: 8, name: 'Kimberley', type: 'billboard', lat: -15.77, lng: 128.74, x: 55, y: 35, desc: 'Regional billboard coverage' },
  { id: 9, name: 'Goldfields', type: 'billboard', lat: -28.00, lng: 121.50, x: 43, y: 70, desc: 'Goldfields region billboard network' },
  { id: 10, name: 'South West', type: 'billboard', lat: -33.65, lng: 115.35, x: 31, y: 87, desc: 'Bunbury and South West regional coverage' },
  { id: 11, name: 'Jandakot', type: 'billboard', lat: -32.10, lng: 115.88, x: 33, y: 83, desc: 'HQ - Sign manufacturing & aircraft hangar' },
  { id: 12, name: 'Malaga', type: 'billboard', lat: -31.84, lng: 115.89, x: 33.5, y: 81.5, desc: 'Office - Sales, marketing & administration' },
]

const filters = [
  { key: 'all', label: 'All Locations', icon: <HiLocationMarker /> },
  { key: 'billboard', label: 'Billboards', icon: <FaRoad /> },
  { key: 'airport', label: 'Airports', icon: <FaPlane /> },
]

export default function Locations() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeLocation, setActiveLocation] = useState(null)

  const filtered = activeFilter === 'all'
    ? locations
    : locations.filter(l => l.type === activeFilter)

  const mapSrc = useMemo(() => {
    if (activeLocation) {
      const { lat, lng, name } = activeLocation
      return `https://www.google.com/maps?q=${lat},${lng}&z=10&output=embed`
    }
    // Default: centered on Western Australia
    return `https://www.google.com/maps?q=-25.5,122&z=5&output=embed`
  }, [activeLocation])

  return (
    <main className="locations">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[3]} alt="Our Locations" />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Our Network</span>
            <h1 className="page-header__title">Billboard Locations</h1>
            <p className="page-header__subtitle">
              Explore our extensive network of outdoor advertising locations across Western Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="locations-map">
        <div className="container">
          <div className="locations-map__header">
            <span className="section-tag">Interactive Map</span>
            <h2 className="section-title">
              Find Us Across <span className="gradient-text">Western Australia</span>
            </h2>
          </div>

          <div className="locations-map__filters">
            {filters.map(f => (
              <button
                key={f.key}
                className={`locations-map__filter ${activeFilter === f.key ? 'locations-map__filter--active' : ''}`}
                onClick={() => { setActiveFilter(f.key); setActiveLocation(null); }}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>

          <div className="locations-map__layout">
            <div className="locations-map__map-container">
              <iframe
                className="locations-map__google-map"
                src={mapSrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WA Billboards Locations"
              />

              {/* Map Legend */}
              <div className="locations-map__legend">
                <div className="locations-map__legend-item">
                  <span className="locations-map__legend-dot" style={{ background: 'var(--orange)' }} />
                  Billboards
                </div>
                <div className="locations-map__legend-item">
                  <span className="locations-map__legend-dot" style={{ background: 'var(--coral)' }} />
                  Airports
                </div>
              </div>
            </div>

            {/* Location List */}
            <div className="locations-map__list">
              {activeLocation ? (
                <motion.div
                  className="location-detail"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <button className="location-detail__back" onClick={() => setActiveLocation(null)}>
                    &larr; All Locations
                  </button>
                  <div className="location-detail__badge">
                    {activeLocation.type === 'airport' ? <FaPlane /> : <FaRoad />}
                    {activeLocation.type === 'airport' ? 'Airport' : 'Billboard'}
                  </div>
                  <h3 className="location-detail__name">{activeLocation.name}</h3>
                  <p className="location-detail__desc">{activeLocation.desc}</p>
                  <Link to="/contact" className="btn btn-primary" style={{ marginTop: '20px' }}>
                    Enquire About This Location <HiArrowRight />
                  </Link>
                </motion.div>
              ) : (
                <div className="locations-list">
                  <h3 className="locations-list__title">
                    {activeFilter === 'all' ? 'All Locations' : activeFilter === 'airport' ? 'Airport Locations' : 'Billboard Locations'}
                    <span className="locations-list__count">{filtered.length}</span>
                  </h3>
                  {filtered.map((loc) => (
                    <div
                      key={loc.id}
                      className="locations-list__item"
                      onClick={() => setActiveLocation(loc)}
                    >
                      <div className="locations-list__item-icon">
                        {loc.type === 'airport' ? <FaPlane /> : <FaRoad />}
                      </div>
                      <div className="locations-list__item-info">
                        <h4>{loc.name}</h4>
                        <p>{loc.desc}</p>
                      </div>
                      <HiArrowRight className="locations-list__item-arrow" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="locations-gallery">
        <div className="container">
          <div className="locations-gallery__header">
            <span className="section-tag">Our Sites</span>
            <h2 className="section-title">
              Billboard <span className="gradient-text">Gallery</span>
            </h2>
          </div>
          <div className="locations-gallery__grid">
            {billboardImages.map((img, i) => (
              <BillboardCard key={img.id} image={img} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="locations-cta">
        <div className="container">
          <div className="locations-cta__card">
            <div className="locations-cta__bg" />
            <div className="locations-cta__content">
              <h2>Need a Billboard in a Specific Location?</h2>
              <p>Our team can help you find the perfect spot for your campaign.</p>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Talk to Our Team <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
