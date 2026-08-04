import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMap } from 'react-icons/hi'
import { bouncy } from './Playful'

export default function BillboardCard({ image, index = 0 }) {
  const [imgError, setImgError] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (image.locationId) navigate(`/locations?location=${image.locationId}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ ...bouncy, delay: (index % 4) * 0.07 }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
      className="group relative overflow-hidden bg-white rounded-3xl border-2 border-ink/5 shadow-soft"
      style={{ cursor: image.locationId ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden rounded-t-3xl">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-peach">
            <span className="text-primary font-bold text-lg tracking-wider">WAB</span>
          </div>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>

      {/* Hover action chip */}
      {image.locationId && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-primary-deep shadow-md">
            <HiMap className="w-3.5 h-3.5" /> View on map
          </span>
        </div>
      )}

      {/* Location label */}
      {image.location && (
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-bold text-ink truncate">{image.location}</span>
          <span className="w-2.5 h-2.5 bg-primary rounded-full flex-shrink-0 ml-2 group-hover:scale-125 transition-transform" />
        </div>
      )}
    </motion.div>
  )
}
