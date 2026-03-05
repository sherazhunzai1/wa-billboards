import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { FaPlane, FaRoad } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { billboardPoints } from '../components/LocationsMap'
import { billboardImages, galleryImages } from '../assets/billboardImages'
import BillboardCard from '../components/BillboardCard'
import SEO from '../components/SEO'
import './Locations.css'

const markerIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const airportIcon = new L.DivIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">
    <circle cx="18" cy="18" r="16" fill="#FF4858" stroke="#fff" stroke-width="2"/>
    <path d="M18 8l-2 7h-6l-1.5 3 7 2v5l-2 2h4l1.5-2 1.5 2h4l-2-2v-5l7-2L28 15h-6l-2-7h-2z" fill="#fff"/>
  </svg>`,
  className: 'locations-map__airport-icon',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
})

function getIcon(point) {
  return point.category === 'Airport' ? airportIcon : markerIcon
}

const filters = [
  { key: 'all', label: 'All Locations', icon: <HiLocationMarker /> },
  { key: 'Road', label: 'Billboards', icon: <FaRoad /> },
  { key: 'Airport', label: 'Airports', icon: <FaPlane /> },
]

function FlyToLocation({ lat, lng, zoom }) {
  const map = useMap()
  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], zoom || 12, { duration: 1 })
    }
  }, [lat, lng, zoom, map])
  return null
}

export default function Locations() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedPoint, setSelectedPoint] = useState(null)
  const [flyTarget, setFlyTarget] = useState(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const locationId = searchParams.get('location')
    if (locationId) {
      const point = billboardPoints.find(p => p.id === Number(locationId))
      if (point) {
        setSelectedPoint(point)
        setFlyTarget({ lat: point.lat, lng: point.lng })
        setTimeout(() => {
          mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
      setSearchParams({}, { replace: true })
    }
  }, [])

  const filtered = activeFilter === 'all'
    ? billboardPoints
    : billboardPoints.filter(p => p.category === activeFilter)

  const handleRowClick = (point) => {
    setSelectedPoint(point)
    setFlyTarget({ lat: point.lat, lng: point.lng })
  }

  return (
    <main className="locations">
      <SEO
        title="200+ Billboard Locations Across Perth & Western Australia"
        path="/locations"
        description="Find 200+ billboard sites across WA — Perth metro, Karratha, Port Hedland, Newman, Kalgoorlie, Geraldton, Kimberley, Goldfields & South West. Interactive map of all WA Billboards locations."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Billboard Locations', path: '/locations' },
        ]}
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img src={galleryImages[3]} alt="Billboard locations map across Western Australia" />
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
      <section className="locations-map" ref={mapRef}>
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
                onClick={() => { setActiveFilter(f.key); setSelectedPoint(null); setFlyTarget(null); }}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>

          <div className="locations-map__layout">
            <div className="locations-map__map-container">
              <MapContainer
                center={[-26.5, 119]}
                zoom={5}
                scrollWheelZoom={false}
                className="locations-map__leaflet-map"
              >
                <TileLayer
                  attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                />
                {flyTarget && (
                  <FlyToLocation lat={flyTarget.lat} lng={flyTarget.lng} zoom={12} />
                )}
                {filtered.map((point) => (
                  <Marker key={point.id} position={[point.lat, point.lng]} icon={getIcon(point)}>
                    <Tooltip direction="top" offset={[0, -20]} opacity={0.95}>
                      <div className="locations-map__popup">
                        <h4>{point.title}</h4>
                        {point.site_id && <p><strong>Site ID:</strong> {point.site_id}</p>}
                        {point.size && <p><strong>Size:</strong> {point.size}</p>}
                        {point.category && <p><strong>Category:</strong> {point.category}</p>}
                        {point.site_card_url && (
                          <a
                            href={point.site_card_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locations-map__site-card-link"
                          >
                            View Site Card (PDF)
                          </a>
                        )}
                      </div>
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>

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

            {/* Location Table */}
            <div className="locations-map__table-panel">
              <h3 className="locations-table__title">
                {activeFilter === 'all' ? 'All Locations' : activeFilter === 'Airport' ? 'Airport Locations' : 'Billboard Locations'}
                <span className="locations-list__count">{filtered.length}</span>
              </h3>
              <div className="locations-table__wrapper">
                <table className="locations-table">
                  <colgroup>
                    <col style={{ width: '30%' }} />
                    <col style={{ width: '18%' }} />
                    <col style={{ width: '22%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '15%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Site ID</th>
                      <th>Size</th>
                      <th>Type</th>
                      <th>Site Card</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((point) => (
                      <tr
                        key={point.id}
                        className={`locations-table__row ${selectedPoint?.id === point.id ? 'locations-table__row--active' : ''}`}
                        onClick={() => handleRowClick(point)}
                      >
                        <td>
                          <div className="locations-table__location-cell">
                            <span className="locations-table__icon">
                              {point.category === 'Airport' ? <FaPlane /> : <FaRoad />}
                            </span>
                            {point.title}
                          </div>
                        </td>
                        <td><span className="locations-table__site-id">{point.site_id || '—'}</span></td>
                        <td>{point.size || '—'}</td>
                        <td>
                          <span className={`locations-table__badge locations-table__badge--${point.category.toLowerCase()}`}>
                            {point.category}
                          </span>
                        </td>
                        <td>
                          {point.site_card_url ? (
                            <a
                              href={point.site_card_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="locations-table__pdf-link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              PDF
                            </a>
                          ) : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
