import React, {useState, useEffect} from "react";
import "./App.css";
import Map from "./components/Map.js";
import ModalComponent from './components/Modal.js'
import restaurantLogo from "./images/restaurant-logo.png";

function App() {

  const [restaurantData, setRestaurantData] = useState([]);
  const [hoverIndex, setHoverIndex] = useState("");
  const [modalState, setModalState] = useState(false);
  const [clickedRestaurantData, setClickedRestaurantData] = useState([]);

  async function getData() {
    let restaurantsList = await fetch("http://localhost:5000/api");
    restaurantsList = await restaurantsList.json();
    setRestaurantData(restaurantsList);
  }
  useEffect(() => {
    getData();
  }, []);

  function handleClick (){

    if (modalState === true){
      setModalState(false);
    } else {
      setModalState(true);
    }
  }

  return (
    <main>
      <div id="title-and-map">
        <div id="title-and-logo">
          <img
            src={restaurantLogo}
            alt="restaurant logo, a plate with fork and spoon on each side"
            height="100px"
          />
          <h1>Places You Can Eat!</h1>
        </div>
        <Map restaurantData={restaurantData} hoverIndex={hoverIndex} />
      </div>
      <ol id="navbar">
        {restaurantData.map((restaurant) => {
          return (
            <li
              key={restaurant.id}
              onClick={() => {
                setClickedRestaurantData(restaurant)
                handleClick()
              }}
              onMouseEnter={(e)=> {
                setHoverIndex(restaurant.id);
              }}
              onMouseLeave={(e)=> {
                setHoverIndex(false);
              }}
            >
              {restaurant.name}
            </li>
          );
        })}
      </ol>
      <ModalComponent modalState={modalState} handleClick={handleClick} clickedRestaurantData={clickedRestaurantData}/>
    </main>
  );
}

export default App;
