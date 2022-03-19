import {useState, useEffect, useRef} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import ModalComponent from './Modal.js'
import "./modal.css"


export default function Map(props) {

  const [modalState, setModalState] = useState(false);
  const [currentRestaurantData, setCurrentRestaurantData] = useState([]);
  const markerRef = useRef(null)

function handleClick (){

  if (modalState === true){
    setModalState(false);
  } else {
    setModalState(true);
  }
}

useEffect(() => {
  console.log(markerRef.current)
  if (props.popUpIndex) markerRef.current.openPopup();
}, [props.popUpIndex]);

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
      {props.restaurantData.map((restaurant) => {
          return (
            <Marker ref={el => {markerRef.current = el }}  position={[restaurant.coordinates.ns, restaurant.coordinates.we]}>
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
