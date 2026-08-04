import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SectionHeader from "./SectionHeader";
import { billboardPoints } from "../data/billboardPoints";
import "./LocationsMap.css";

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

const airportIcon = new L.DivIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">
    <circle cx="18" cy="18" r="16" fill="#FF4858" stroke="#fff" stroke-width="2"/>
    <path d="M18 8l-2 7h-6l-1.5 3 7 2v5l-2 2h4l1.5-2 1.5 2h4l-2-2v-5l7-2L28 15h-6l-2-7h-2z" fill="#fff"/>
  </svg>`,
  className: "locations-map-section__airport-icon",
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

function getIcon(point) {
  return point.category === "Airport" ? airportIcon : markerIcon;
}

export default function LocationsMap() {
  const center = [-26.5, 119];

  return (
    <section className="locations-map-section">
      <div className="container">
        <SectionHeader
          tag="Our Locations"
          title={
            <>
              Billboard <span className="gradient-text">Locations Map</span>
            </>
          }
          subtitle="Explore our billboard locations across Perth and Western Australia."
        />
        <div className="locations-map-section__wrapper">
          <MapContainer
            center={center}
            zoom={5}
            scrollWheelZoom={false}
            className="locations-map-section__map"
          >
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            />
            {billboardPoints.map((point) => (
              <Marker key={point.id} position={[point.lat, point.lng]} icon={getIcon(point)}>
                <Tooltip direction="top" offset={[0, -20]} opacity={0.95}>
                  <div className="locations-map-section__popup">
                    <h4>{point.title}</h4>
                    {point.site_id && <p><strong>Site ID:</strong> {point.site_id}</p>}
                    {point.size && <p><strong>Size:</strong> {point.size}</p>}
                    {point.category && <p><strong>Category:</strong> {point.category}</p>}
                    {point.site_card_url && (
                      <a
                        href={point.site_card_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="locations-map-section__site-card-link"
                      >
                        View Site Card (PDF)
                      </a>
                    )}
                  </div>
                </Tooltip>
                <Popup>
                  <div className="locations-map-section__popup">
                    <h4>{point.title}</h4>
                    {point.site_id && <p><strong>Site ID:</strong> {point.site_id}</p>}
                    {point.size && <p><strong>Size:</strong> {point.size}</p>}
                    {point.category && <p><strong>Category:</strong> {point.category}</p>}
                    {point.site_card_url && (
                      <a
                        href={point.site_card_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="locations-map-section__site-card-link"
                      >
                        View Site Card (PDF)
                      </a>
                    )}
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
