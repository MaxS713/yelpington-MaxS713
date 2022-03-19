import {useState, useEffect, useRef} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import * as L from "leaflet"
import ModalComponent from './Modal.js'



export default function Map(props) {

  const smallIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [13, 20],
    iconAnchor: [6, 20],
    popupAnchor: [1, -34],
    shadowSize: [20, 20]
  });

  const bigIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const [modalState, setModalState] = useState(false);
  const [currentRestaurantData, setCurrentRestaurantData] = useState([]);
  const markerRef = useRef([])

function handleClick (){

  if (modalState === true){
    setModalState(false);
  } else {
    setModalState(true);
  }
}

useEffect(() => {
  let refIndex = props.popUpIndex - 1
  if (props.popUpIndex) markerRef.current[refIndex].openPopup();
}, [props.popUpIndex]);

useEffect(() => {
  let refIndex = props.hoverIndex - 1
  if (props.hoverIndex) markerRef.current[refIndex].setIcon(bigIcon);
}, [props.hoverIndex]);

  return (
    <>
    <div id="map-container">
    <MapContainer
      center={[44.48, -73.21]}
      zoom={14}
      style={{height: "70vh", width: "50vw", outline: "5px solid #92B4DB"}}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.restaurantData.map((restaurant, index) => {
          return (
            <Marker icon={smallIcon} ref={(element) => {markerRef.current[index] = element}}  position={[restaurant.coordinates.ns, restaurant.coordinates.we]}>
              <Popup>
              <button onClick={() => {handleClick();
                setCurrentRestaurantData(restaurant)}}>{restaurant.name}</button>
              </Popup>
            </Marker>
            );
        })}
    </MapContainer>
    </div>
    <div id="modal">
    <ModalComponent modalState={modalState} handleClick={handleClick} currentRestaurantData={currentRestaurantData}/>
    </div>
    </>
  );
}
