import {useState, useEffect, useRef} from 'react'
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import * as L from "leaflet"

export default function Map(props) {

  const smallIcon = new L.Icon({
    iconUrl: './leaflet/marker-icon-2x.png',
    shadowUrl: './leaflet/marker-shadow.png',
    iconSize: [17, 27],
    iconAnchor: [6, 20],
    popupAnchor: [1, -34],
    shadowSize: [20, 20]
  });

  const bigIcon = new L.Icon({
    iconUrl: './leaflet/marker-icon-2x-orange.png',
    shadowUrl: './leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const [currentRestaurantData, setCurrentRestaurantData] = useState([]);
  const markerRef = useRef([])

useEffect(() => {
  let refIndex = props.popUpIndex - 1
  if (props.popUpIndex) markerRef.current[refIndex].openPopup();
}, [props.popUpIndex]);

useEffect(() => {
  let refIndex = props.hoverIndex - 1
  if (props.hoverIndex) markerRef.current[refIndex].setIcon(bigIcon);
}, [props.hoverIndex]);

  return (
    <div id="map-container">
    <MapContainer
      center={[44.48, -73.21]}
      zoom={14}
      style={{height: "70vh", width: "50vw", outline: "5px solid #92B4DB"}}
      doubleClickZoom={false} 
      zoomSnap={false} 
      zoomDelta={false} 
      trackResize={false}
      touchZoom={false}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.restaurantData.map((restaurant, index) => {
          return (
            <Marker icon={smallIcon} ref={(element) => {markerRef.current[index] = element}}  position={[restaurant.coordinates.ns, restaurant.coordinates.we]}>
            </Marker>
            );
        })}
    </MapContainer>
    </div>
  );
}
