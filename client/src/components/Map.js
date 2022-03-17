import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

export default function Map(props) {
  console.log(props.restaurantData);
  return (
    <MapContainer
      center={[44.48, -73.21]}
      zoom={14}
      style={{height: "70vh", width: "50vw", outline: "5px solid #92B4DB"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.restaurantData.map((restaurant) => {
          return (
            <Marker position={[restaurant.coordinates.ns, restaurant.coordinates.we]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            );
        })}
    </MapContainer>
  );
}
