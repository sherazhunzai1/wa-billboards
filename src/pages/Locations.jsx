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
  className: '',
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
    <main className="bg-[#0a0a0f] min-h-screen">
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
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[3]} alt="Billboard locations map across Western Australia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 mb-6">Our Network</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Billboard Locations</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Explore our extensive network of outdoor advertising locations across Western Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28" ref={mapRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">Interactive Map</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Find Us Across <span className="gradient-text">Western Australia</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {filters.map(f => (
              <button
                key={f.key}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === f.key
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25'
                    : 'glass text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => { setActiveFilter(f.key); setSelectedPoint(null); setFlyTarget(null); }}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>

          {/* Map + Table Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map */}
            <div className="w-full lg:w-3/5">
              <div className="glass rounded-2xl overflow-hidden relative" style={{ height: '600px' }}>
                <MapContainer
                  center={[-26.5, 119]}
                  zoom={5}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
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
                        <div>
                          <h4 className="font-bold">{point.title}</h4>
                          {point.site_id && <p><strong>Site ID:</strong> {point.site_id}</p>}
                          {point.size && <p><strong>Size:</strong> {point.size}</p>}
                          {point.category && <p><strong>Category:</strong> {point.category}</p>}
                          {point.site_card_url && (
                            <a
                              href={point.site_card_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline text-sm"
                            >
                              View Site Card (PDF)
                            </a>
                          )}
                        </div>
                      </Tooltip>
                      <Popup>
                        <div>
                          <h4 className="font-bold">{point.title}</h4>
                          {point.site_id && <p><strong>Site ID:</strong> {point.site_id}</p>}
                          {point.size && <p><strong>Size:</strong> {point.size}</p>}
                          {point.category && <p><strong>Category:</strong> {point.category}</p>}
                          {point.site_card_url && (
                            <a
                              href={point.site_card_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline text-sm"
                            >
                              View Site Card (PDF)
                            </a>
                          )}
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 z-[1000] glass rounded-xl px-4 py-3 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    Billboards
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-3 h-3 rounded-full bg-pink-500" />
                    Airports
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="w-full lg:w-2/5">
              <div className="glass-dark rounded-2xl overflow-hidden" style={{ height: '600px' }}>
                <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-white font-semibold">
                    {activeFilter === 'all' ? 'All Locations' : activeFilter === 'Airport' ? 'Airport Locations' : 'Billboard Locations'}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400">{filtered.length}</span>
                </div>
                <div className="overflow-y-auto" style={{ height: 'calc(100% - 56px)' }}>
                  <table className="w-full">
                    <thead className="sticky top-0 bg-[#12121a] z-10">
                      <tr className="text-left text-xs uppercase tracking-wider text-white/40">
                        <th className="px-4 py-3">Location</th>
                        <th className="px-4 py-3">Site ID</th>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">PDF</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filtered.map((point) => (
                        <tr
                          key={point.id}
                          className={`cursor-pointer transition-colors duration-200 hover:bg-white/5 ${selectedPoint?.id === point.id ? 'bg-orange-500/10' : ''}`}
                          onClick={() => handleRowClick(point)}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                              <span className="text-white/40">
                                {point.category === 'Airport' ? <FaPlane size={12} /> : <FaRoad size={12} />}
                              </span>
                              <span className="truncate">{point.title}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-white/50 text-sm font-mono">{point.site_id || '\u2014'}</td>
                          <td className="px-4 py-3 text-white/50 text-sm">{point.size || '\u2014'}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                              point.category === 'Airport'
                                ? 'bg-pink-500/15 text-pink-400'
                                : 'bg-orange-500/15 text-orange-400'
                            }`}>
                              {point.category}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {point.site_card_url ? (
                              <a
                                href={point.site_card_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 text-xs font-medium underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                PDF
                              </a>
                            ) : '\u2014'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">Our Sites</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Billboard <span className="gradient-text">Gallery</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Billboard in a Specific Location?</h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">Our team can help you find the perfect spot for your campaign.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Talk to Our Team <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
