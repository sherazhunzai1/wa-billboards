import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationsMap.css";

export const billboardPoints = [
  { id: 51, title: "Bassendean", category: "Road", site_id: "WA020", size: "8.3m x 2.2m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Bassendean-WA020.pdf", lat: -31.894872, lng: 115.944671 },
  { id: 57, title: "Bayswater", category: "Road", site_id: "WCO002", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Bayswater-WCO002.pdf", lat: -31.905141, lng: 115.920381 },
  { id: 50, title: "Bedford", category: "Road", site_id: "WA018", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Bedford-WA018.pdf", lat: -31.912497, lng: 115.8974 },
  { id: 73, title: "Bedford", category: "Road", site_id: "WA006", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Bedford-WA006.pdf", lat: -31.9038404, lng: 115.8849616 },
  { id: 25, title: "Bridgetown", category: "Road", site_id: "C035", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2018/10/Bridgetown-Sitecard-18.pdf", lat: -33.961637, lng: 116.136273 },
  { id: 12, title: "Broome", category: "Road", site_id: "C016", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Broome-C016.pdf", lat: -17.934011, lng: 122.213414 },
  { id: 27, title: "Brunswick Junction", category: "Road", site_id: "C040A/C040B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Brunswick-Junction-C040-AB.pdf", lat: -33.257685, lng: 115.837874 },
  { id: 10, title: "Bunbury (Dodson Rd)", category: "Road", site_id: "C014", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Bunbury-Dodson-C014-1.pdf", lat: -33.355597, lng: 115.675945 },
  { id: 28, title: "Bunbury (Picton)", category: "Road", site_id: "C041A/C041B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Bunbury-C041-AB.pdf", lat: -33.35197423804815, lng: 115.68671925396727 },
  { id: 29, title: "Bunbury (Picton)", category: "Road", site_id: "C042A/C042B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Bunbury-C042-AB.pdf", lat: -33.351667314795485, lng: 115.69233633862308 },
  { id: 15, title: "Busselton", category: "Road", site_id: "C019", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Busselton-C019.pdf", lat: -33.661332, lng: 115.36577 },
  { id: 65, title: "Carnarvon (Northwest Coastal Hwy)", category: "Road", site_id: "C003A/C003B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Carnarvon-C003-AB.pdf", lat: -24.862, lng: 113.7022 },
  { id: 19, title: "Carnarvon (Robinson St)", category: "Road", site_id: "C027", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Carnarvon-C027.pdf", lat: -24.875052, lng: 113.667094 },
  { id: 13, title: "Derby", category: "Road", site_id: "C017", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Derby-C017.pdf", lat: -17.726718, lng: 123.655692 },
  { id: 70, title: "Dongara", category: "Road", site_id: "C008A/C008B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Dongara-C008-AB.pdf", lat: -29.252532, lng: 114.956668 },
  { id: 14, title: "Esperance", category: "Road", site_id: "C018", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Esperance-C018.pdf", lat: -33.831852, lng: 121.895515 },
  { id: 16, title: "Fitzroy Crossing", category: "Road", site_id: "C023", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Fitzroy-Crossing-C023.pdf", lat: -18.194302, lng: 125.569437 },
  { id: 22, title: "Geraldton (Northwest Hwy)", category: "Road", site_id: "C031", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Geraldton-C031.pdf", lat: -28.763797, lng: 114.624937 },
  { id: 33, title: "Geraldton Airport", category: "Airport", site_id: "GEL", size: "Various", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/05/Geraldton-Airport-Media-Kit-1.pdf", lat: -28.7960639, lng: 114.7001732 },
  { id: 71, title: "Kalgoorlie (Lane St)", category: "Road", site_id: "C009A", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Kalgoorlie-Lane-St-C009A.pdf", lat: -30.781242, lng: 121.488602 },
  { id: 72, title: "Kalgoorlie (Lane St)", category: "Road", site_id: "C009B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Kalgoorlie-Lane-St-C009B.pdf", lat: -30.781078, lng: 121.488599 },
  { id: 17, title: "Kalgoorlie (Maritana St)", category: "Road", site_id: "C025", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Kalgoorlie-Maritana-C025.pdf", lat: -30.740473, lng: 121.467098 },
  { id: 32, title: "Kalgoorlie-Boulder Airport", category: "Airport", site_id: "KG", size: "Various", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/05/Kalgoorlie-Boulder-Airport-Media-Kit-1.pdf", lat: -30.785379, lng: 121.4557912 },
  { id: 23, title: "Karratha (Dampier Hwy)", category: "Road", site_id: "C032A/C032B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Karratha-C032-AB.pdf", lat: -20.721311, lng: 116.761839 },
  { id: 11, title: "Karratha (LIA)", category: "Road", site_id: "C015A/C015B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Karratha-LIA-C015-AB.pdf", lat: -20.761082, lng: 116.851337 },
  { id: 36, title: "Karratha Airport", category: "Airport", site_id: "KA", size: "Various", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Karratha-Airport-Media-Kit.pdf", lat: -20.7086696, lng: 116.7679774 },
  { id: 18, title: "Kununurra", category: "Road", site_id: "C026", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Kununarra-C026.pdf", lat: -15.783619, lng: 128.732138 },
  { id: 46, title: "Melville", category: "Road", site_id: "WA004", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Melville-WA004.pdf", lat: -32.034902, lng: 115.791451 },
  { id: 55, title: "Middle Swan", category: "Road", site_id: "WA025", size: "8.3m x 2.2m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Middle-Swan-WA025.pdf", lat: -31.8738928882511, lng: 116.01149352645872 },
  { id: 26, title: "Moora", category: "Road", site_id: "C039A/C039B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Moora-C039-AB.pdf", lat: -30.641093, lng: 116.008966 },
  { id: 125, title: "Morley", category: "Road", site_id: "", size: "", site_card_url: "", lat: -31.87230787982295, lng: 115.89855976481459 },
  { id: 20, title: "Mount Barker", category: "Road", site_id: "C028A/C028B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Mount-Barker-C028-AB.pdf", lat: -34.675865, lng: 117.675807 },
  { id: 21, title: "Narrogin", category: "Road", site_id: "C029", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Narrogin-C029.pdf", lat: -32.93064340717938, lng: 117.17783260251615 },
  { id: 56, title: "Naval Base", category: "Road", site_id: "WCO001A", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Naval-Base-WCO001AB.pdf", lat: -32.196744, lng: 115.782964 },
  { id: 6, title: "Newdegate", category: "Road", site_id: "C007A/C007B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Newdegate-C007-AB.pdf", lat: -33.0989, lng: 119.0155 },
  { id: 37, title: "Newman Access Road (North)", category: "Road", site_id: "NWN-ROAD-NORTH", size: "8.3m x 2.2m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Newman-Access-Road-NORTH-AB.pdf", lat: -23.413356159180168, lng: 119.79914155952451 },
  { id: 38, title: "Newman Access Road (South)", category: "Road", site_id: "NWN-ROAD-SOUTH", size: "8.3m x 2.2m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Newman-Access-Road-SOUTH-AB.pdf", lat: -23.41381833876463, lng: 119.79917387962342 },
  { id: 34, title: "Newman Airport", category: "Airport", site_id: "NWN", size: "Various", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/05/Newman-Airport-Media-Kit.pdf", lat: -23.4160472, lng: 119.8000699 },
  { id: 52, title: "North Perth (Charles Pub)", category: "Road", site_id: "WA022", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/North-Perth-Charles-Pub-WA022.pdf", lat: -31.917039830093877, lng: 115.84816760978696 },
  { id: 58, title: "North Perth (Tiles Expo)", category: "Road", site_id: "WCO003", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/North-Perth-Tiles-WCO003.pdf", lat: -31.92874, lng: 115.853019 },
  { id: 30, title: "Northam", category: "Road", site_id: "C043A/C043B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Northam-C043-AB.pdf", lat: -31.649466, lng: 116.677329 },
  { id: 54, title: "Northbridge", category: "Road", site_id: "WA024", size: "15m x 5m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Northbridge-WA024.pdf", lat: -31.948498, lng: 115.856525 },
  { id: 68, title: "O'Connor", category: "Road", site_id: "WA026", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/OConnor-WA026.pdf", lat: -32.063016, lng: 115.7865375 },
  { id: 39, title: "Onslow Airport", category: "Airport", site_id: "ONS", size: "Various", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/05/Onslow-Airport-Media-Kit-1.pdf", lat: -21.6656344, lng: 115.1100523 },
  { id: 66, title: "Osborne Park", category: "Road", site_id: "WCO004A", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2020/10/Osborne-Park-WCO004A-1.pdf", lat: -31.9046532, lng: 115.8168637 },
  { id: 67, title: "Osborne Park", category: "Road", site_id: "WCO004B", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2020/10/Osborne-Park-WCO004B-1.pdf", lat: -31.9046532, lng: 115.8168637 },
  { id: 48, title: "Palmyra", category: "Road", site_id: "WA012", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Palmyra-WA012.pdf", lat: -32.03656, lng: 115.784263 },
  { id: 9, title: "Port Hedland", category: "Road", site_id: "C012A/C012B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Port-Hedland-C012-AB.pdf", lat: -20.362074, lng: 118.629843 },
  { id: 35, title: "Port Hedland Airport", category: "Airport", site_id: "PD", size: "Various", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Port-Hedland-Airport-Media-Kit.pdf", lat: -20.377913, lng: 118.6289274 },
  { id: 5, title: "Southern Cross", category: "Road", site_id: "C005A/C005B", size: "6m x 3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/06/Southern-Cross-C005-AB.pdf", lat: -31.231761, lng: 119.357905 },
  { id: 45, title: "Welshpool (Leach Hwy)", category: "Road", site_id: "WA003", size: "12.6m x 3.3m", site_card_url: "https://www.wabillboards.com.au/wp-content/uploads/2022/08/Welshpool-WA003.pdf", lat: -31.994534, lng: 115.928879 },
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
