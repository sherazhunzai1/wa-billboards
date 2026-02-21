import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiLocationMarker } from 'react-icons/hi'
import './BillboardCard.css'

export default function BillboardCard({ image, index = 0 }) {
  const [imgError, setImgError] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (image.locationId) {
      navigate(`/locations?location=${image.locationId}`)
    }
  }

  return (
    <div
      className="billboard-card"
      style={{ animationDelay: `${index * 0.1}s`, cursor: image.locationId ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      <div className="billboard-card__image-wrapper">
        {imgError ? (
          <div
            className="billboard-card__fallback"
            style={{ background: image.fallbackColor || 'var(--orange)' }}
          >
            <span>WA Billboards</span>
          </div>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            className="billboard-card__image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        <div className="billboard-card__overlay">
          <span className="billboard-card__badge">View</span>
        </div>
      </div>
      {image.location && (
        <div className="billboard-card__info">
          <HiLocationMarker className="billboard-card__icon" />
          <span>{image.location}</span>
        </div>
      )}
    </div>
  )
}
