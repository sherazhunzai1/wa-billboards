import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiLocationMarker } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function BillboardCard({ image, index = 0 }) {
  const [imgError, setImgError] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (image.locationId) navigate(`/locations?location=${image.locationId}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-dark-light border border-white/5 hover:border-orange/20 transition-all duration-500"
      style={{ cursor: image.locationId ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg" style={{ background: image.fallbackColor || '#FF6B35' }}>WA Billboards</div>
        ) : (
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={() => setImgError(true)} loading="lazy"/>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"/>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">View</span>
        </div>
      </div>
      {image.location && (
        <div className="px-4 py-3 flex items-center gap-2 text-slate-400 text-sm">
          <HiLocationMarker className="w-4 h-4 text-orange"/>
          <span>{image.location}</span>
        </div>
      )}
    </motion.div>
  )
}
