import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "./modal.css";

export default function ModalComponent(props) {
  if (props.modalState === true) {
    return (
      <main id="overlay">
        <div id="modal-background">
          <div id="modal-content">
            <h1>{props.clickedRestaurantData.name}</h1>
            <p>
              {props.clickedRestaurantData.cuisine}
              <br />
              Address: {props.clickedRestaurantData.address}
              <br />
              Phone Number: {props.clickedRestaurantData.phoneNumber}
              <br />
              Hours: {props.clickedRestaurantData.hours}
              <br />
              Hours: {props.clickedRestaurantData.about}
            </p>
              <MapContainer
                center={[
                  props.clickedRestaurantData.coordinates.ns,
                  props.clickedRestaurantData.coordinates.we,
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
                    props.clickedRestaurantData.coordinates.ns,
                    props.clickedRestaurantData.coordinates.we,
                  ]}
                ></Marker>
              </MapContainer>
            <button onClick={props.handleClick}>Go Back</button>
          </div>
        </div>
      </main>
    );
  } else {
    return <div style={{display: "none"}}></div>;
  }
}
