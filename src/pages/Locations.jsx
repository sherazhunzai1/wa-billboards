import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPlane, FaRoad } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { billboardPoints } from '../components/LocationsMap'
import { billboardImages, galleryImages } from '../assets/billboardImages'
import BillboardCard from '../components/BillboardCard'
import CtaSection from '../components/CtaSection'
import { SectionHeading, bouncy, staggerParent, popChild } from '../components/Playful'
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
    <circle cx="18" cy="18" r="16" fill="#F97316" stroke="#fff" stroke-width="3"/>
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
  { key: 'all', label: 'All Locations' },
  { key: 'Road', label: 'Billboards' },
  { key: 'Airport', label: 'Airports' },
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
    <main className="bg-cream min-h-screen text-ink">
      <SEO
        title="200+ Billboard Locations Across Perth & Western Australia"
        path="/locations"
        description="Find 200+ billboard sites across WA — Perth metro, Karratha, Port Hedland, Newman, Kalgoorlie, Geraldton, Kimberley, Goldfields & South West. Interactive map of all WA Billboards locations."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Billboard Locations', path: '/locations' },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[3]} alt="Billboard locations map across Western Australia" className="w-full h-full object-cover" />
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
                Our Network
              </span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] mb-4">Billboard<br />Locations</motion.h1>
            <motion.p variants={popChild} className="text-lg text-white/90 font-semibold max-w-xl">
              Big Spaces for Big Ideas — explore our extensive network of outdoor advertising locations across Western Australia.
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

      {/* Map Section */}
      <section className="py-20 md:py-28" ref={mapRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Interactive Map"
            title={<>Find us across <span className="text-primary">Western Australia</span></>}
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filters.map(f => (
              <motion.button
                key={f.key}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.93 }}
                transition={bouncy}
                className={`px-6 py-2.5 rounded-full text-sm font-extrabold transition-colors duration-200 ${
                  activeFilter === f.key
                    ? 'bg-primary-dark text-white shadow-pop'
                    : 'bg-white border-2 border-ink/10 text-ink-soft hover:text-primary-deep hover:border-sand'
                }`}
                onClick={() => { setActiveFilter(f.key); setSelectedPoint(null); setFlyTarget(null); }}
              >
                {f.label}
              </motion.button>
            ))}
          </div>

          {/* Map + Table Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map */}
            <div className="w-full lg:w-3/5">
              <div className="rounded-[2rem] border-4 border-white shadow-soft-lg overflow-hidden relative" style={{ height: '600px' }}>
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
                              className="underline"
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
                              className="underline"
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
                <div className="absolute bottom-4 left-4 z-[1000] bg-white/95 rounded-full shadow-md px-5 py-2.5 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-ink">
                    <span className="w-3 h-3 bg-accent rounded-full" />
                    Billboards
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-ink">
                    <span className="w-3 h-3 bg-primary rounded-full" />
                    Airports
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft overflow-hidden" style={{ height: '600px' }}>
                <div className="px-5 py-4 border-b-2 border-peach flex items-center justify-between">
                  <h3 className="text-ink font-semibold">
                    {activeFilter === 'all' ? 'All Locations' : activeFilter === 'Airport' ? 'Airport Locations' : 'Billboard Locations'}
                  </h3>
                  <span className="rounded-full bg-peach px-3 py-1 text-xs font-extrabold text-primary-deep">{filtered.length}</span>
                </div>
                <div className="overflow-y-auto" style={{ height: 'calc(100% - 61px)' }}>
                  <table className="w-full">
                    <thead className="sticky top-0 bg-white z-10 shadow-sm">
                      <tr className="text-left text-xs font-extrabold uppercase tracking-wider text-ink-soft">
                        <th className="px-4 py-3">Location</th>
                        <th className="px-4 py-3">Site ID</th>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">PDF</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-peach/70">
                      {filtered.map((point) => (
                        <tr
                          key={point.id}
                          className={`cursor-pointer transition-colors duration-200 hover:bg-peach/40 ${selectedPoint?.id === point.id ? 'bg-peach/70' : ''}`}
                          onClick={() => handleRowClick(point)}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2 text-ink text-sm font-bold">
                              <span className={selectedPoint?.id === point.id ? 'text-primary' : 'text-ink-soft'}>
                                {point.category === 'Airport' ? <FaPlane size={12} /> : <FaRoad size={12} />}
                              </span>
                              <span className="truncate">{point.title}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-primary-deep text-sm font-extrabold">{point.site_id || '\u2014'}</td>
                          <td className="px-4 py-3 text-ink-soft text-sm font-semibold">{point.size || '\u2014'}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${
                              point.category === 'Airport'
                                ? 'bg-primary/10 text-primary-deep'
                                : 'bg-accent/10 text-accent'
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
                                className="text-primary-deep hover:text-primary text-xs font-extrabold uppercase underline"
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
      <section className="py-20 md:py-28 bg-peach/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Our Sites"
            title={<>Billboard <span className="text-primary">Gallery</span></>}
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
        subtitle="Need a billboard in a specific location? Our team can help you find the perfect spot."
        primary={{ to: '/contact', label: 'Talk to Our Team' }}
      />
    </main>
  )
}
