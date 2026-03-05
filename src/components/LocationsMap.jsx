import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationsMap.css";

const billboardPoints = [
  {
    id: 1,
    name: "Billboard Site 1",
    siteId: "WA-BB-001",
    size: "12m x 3m",
    siteCard: "Large format billboard",
    lat: -31.894872,
    lng: 115.944671,
  },
  {
    id: 2,
    name: "Billboard Site 2",
    siteId: "WA-BB-002",
    size: "6m x 3m",
    siteCard: "Medium format billboard",
    lat: -31.905141,
    lng: 115.920381,
  },
  {
    id: 3,
    name: "Billboard Site 3",
    siteId: "WA-BB-003",
    size: "12m x 3m",
    siteCard: "Large format billboard",
    lat: -31.912497,
    lng: 115.8974,
  },
];

const markerIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function LocationsMap() {
  const center = [-31.904, 115.921];

  return (
    <section className="locations-map-section">
      <div className="container">
        <div className="locations-map-section__header">
          <span className="section-tag">Our Locations</span>
          <h2 className="section-title">
            Billboard <span className="gradient-text">Locations Map</span>
          </h2>
          <p className="section-subtitle">
            Explore our billboard locations across Perth and Western Australia.
          </p>
        </div>
        <div className="locations-map-section__wrapper">
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={false}
            className="locations-map-section__map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {billboardPoints.map((point) => (
              <Marker key={point.id} position={[point.lat, point.lng]} icon={markerIcon}>
                <Popup>
                  <div className="locations-map-section__popup">
                    <h4>{point.name}</h4>
                    <p><strong>Site ID:</strong> {point.siteId}</p>
                    <p><strong>Size:</strong> {point.size}</p>
                    <p><strong>Site Card:</strong> {point.siteCard}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
