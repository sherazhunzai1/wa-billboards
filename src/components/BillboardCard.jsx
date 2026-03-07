import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BillboardCard({ image, index = 0 }) {
  const [imgError, setImgError] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (image.locationId) navigate(`/locations?location=${image.locationId}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden bg-charcoal-light"
      style={{ cursor: image.locationId ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-charcoal-mid">
            <span className="text-lime font-bold text-lg tracking-wider uppercase">WAB</span>
          </div>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          {image.locationId && (
            <span className="text-xs tracking-[0.15em] uppercase text-lime font-bold">View on map →</span>
          )}
        </div>
      </div>

      {/* Location label */}
      {image.location && (
        <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-sm text-chalk truncate">{image.location}</span>
          <span className="w-1.5 h-1.5 bg-lime rounded-full flex-shrink-0 ml-2" />
        </div>
      )}
    </motion.div>
  )
}
