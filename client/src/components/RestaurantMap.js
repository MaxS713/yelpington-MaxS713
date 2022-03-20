
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

export default function RestaurantMap(props) {
  
if (props.currentRestaurantData.length === 0){
  return null
} else {
  console.log(props.currentRestaurantData)
  return (
    <div id="map-container">
      <MapContainer
        center={[
          props.currentRestaurantData.coordinates.ns,
          props.currentRestaurantData.coordinates.we
        ]}
        zoom={15}
        style={{
          height: "30vh",
          width: "20vw",
          outline: "5px solid #92B4DB",
        }}
        doubleClickZoom={false}
        zoomSnap={false}
        zoomDelta={false}
        trackResize={false}
        touchZoom={false}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            props.currentRestaurantData.coordinates.ns,
            props.currentRestaurantData.coordinates.we,
          ]}
        ></Marker>
      </MapContainer>
    </div>
  );
      }
}
