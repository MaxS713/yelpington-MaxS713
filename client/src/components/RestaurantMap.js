//imports needed for the map to function
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility"; 

//The smaller map component for each restaurant page
export default function RestaurantMap(props) {

  //not sure why this was necessary, but sometimes the map would try to render before the data was fetched
  //and it would result in errors, so this makes sure the data is actually there before rendering
  if (props.currentRestaurantData.length === 0) {
    return null;
  } else {
    return (

      // rendering the map
      <div id="resto-map-container">
        <MapContainer
        //centered on the current restaurant's coordinates
          center={[
            props.currentRestaurantData.coordinates.ns,
            props.currentRestaurantData.coordinates.we,
          ]}
          zoom={15}
          //most control options were not really necessary...
          doubleClickZoom={false}
          trackResize={true}
          touchZoom={false}
          scrollWheelZoom={false}
          zoomControl={true}
          attributionControl={false}
          draggin={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* the marker is set on the current restaurant's coordinates */}
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
