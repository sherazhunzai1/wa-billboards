// Real WA Billboards images
import billboardSchweppes from './images/billboards/IMG_7253-scaled.jpg'
import billboardKarratha from './images/billboards/Karratha-LIA-C015B-scaled.jpg'
import billboardNorthbridge from './images/billboards/Northbridge-Photograph-scaled.jpg'

// High-resolution hero images
import heroMetro from './images/billboards/metro1.jpg'
import heroRegional from './images/billboards/regional1.jpg'
import heroCity from './images/billboards/metro3.jpg'
import heroAirport from './images/billboards/airport1.jpg'
import heroRegional2 from './images/billboards/regional4.jpg'
import heroMetro2 from './images/billboards/metro5.jpg'

export const realBillboardImages = [billboardSchweppes, billboardKarratha, billboardNorthbridge]

export const heroImages = [heroMetro, heroRegional, heroCity, heroAirport, heroRegional2, heroMetro2]

export const billboardImages = [
  {
    id: 1,
    src: billboardSchweppes,
    alt: 'Schweppes Rooftop Billboard - WA Billboards',
    location: 'Perth Metro, WA',
    locationId: 1,
    fallbackColor: '#FF6B35',
  },
  {
    id: 2,
    src: billboardKarratha,
    alt: 'Regional Billboard - Karratha WA',
    location: 'Karratha, WA',
    locationId: 2,
    fallbackColor: '#FF4858',
  },
  {
    id: 3,
    src: billboardNorthbridge,
    alt: 'RAC Billboard - Northbridge Perth',
    location: 'Northbridge, Perth',
    locationId: 1,
    fallbackColor: '#D97706',
  },
  {
    id: 4,
    src: billboardSchweppes,
    alt: 'Billboard Advertising - Perth',
    location: 'Kalgoorlie-Boulder, WA',
    locationId: 5,
    fallbackColor: '#FFC857',
  },
  {
    id: 5,
    src: billboardKarratha,
    alt: 'Regional Highway Billboard',
    location: 'Port Hedland, WA',
    locationId: 3,
    fallbackColor: '#E55A25',
  },
  {
    id: 6,
    src: billboardNorthbridge,
    alt: 'City Billboard Display',
    location: 'Great Eastern Highway, Perth',
    locationId: 1,
    fallbackColor: '#334155',
  },
  {
    id: 7,
    src: billboardKarratha,
    alt: 'South West Billboard',
    location: 'Bunbury, WA',
    locationId: 10,
    fallbackColor: '#FF8F5E',
  },
  {
    id: 8,
    src: billboardSchweppes,
    alt: 'Geraldton Billboard Display',
    location: 'Geraldton, WA',
    locationId: 6,
    fallbackColor: '#FFD980',
  },
]

export const airportImages = [
  {
    id: 1,
    src: billboardKarratha,
    alt: 'Karratha Airport Billboard',
    name: 'Karratha Airport',
  },
  {
    id: 2,
    src: billboardSchweppes,
    alt: 'Port Hedland Airport Advertising',
    name: 'Port Hedland Airport',
  },
  {
    id: 3,
    src: billboardNorthbridge,
    alt: 'Newman Airport Display',
    name: 'Newman Airport',
  },
  {
    id: 4,
    src: billboardKarratha,
    alt: 'Kalgoorlie Airport Advertising',
    name: 'Kalgoorlie-Boulder Airport',
  },
  {
    id: 5,
    src: billboardSchweppes,
    alt: 'Geraldton Airport Display',
    name: 'Geraldton Airport',
  },
  {
    id: 6,
    src: billboardNorthbridge,
    alt: 'Onslow Airport Advertising',
    name: 'Onslow Airport',
  },
]

export const digitalImages = [
  {
    id: 1,
    src: billboardKarratha,
    alt: 'Digital Screen Karratha',
    name: '12-Faced Digital Screen',
    location: 'Karratha Airport',
  },
  {
    id: 2,
    src: billboardNorthbridge,
    alt: 'Digital Panel Newman',
    name: '3-Panel Digital Screen',
    location: 'Newman',
  },
  {
    id: 3,
    src: billboardSchweppes,
    alt: 'Digital Panel Kalgoorlie',
    name: '3-Panel Digital Screen',
    location: 'Kalgoorlie',
  },
]

export const galleryImages = [
  billboardSchweppes,
  billboardKarratha,
  billboardNorthbridge,
  billboardSchweppes,
  billboardKarratha,
  billboardNorthbridge,
  billboardSchweppes,
  billboardKarratha,
  billboardNorthbridge,
  billboardSchweppes,
]
