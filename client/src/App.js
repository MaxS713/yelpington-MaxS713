import React, {useState, useEffect} from "react";
import "./App.css";
import Map from "./components/Map.js";

import restaurantLogo from "./images/restaurant-logo.png";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [popUpIndex, setPopUpIndex] = useState("");
  

  async function getData() {
    let restaurantsList = await fetch("http://localhost:5000/api");
    restaurantsList = await restaurantsList.json();
    setRestaurantData(restaurantsList);
  }
  useEffect(() => {
    getData();
  }, []);


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
        <Map restaurantData={restaurantData} popUpIndex={popUpIndex} />
      </div>
      <ol id="navbar">
        {restaurantData.map((restaurant) => {
          return (
            <li key={restaurant.id}
            onClick={e => {
              setPopUpIndex(restaurant.id);
            }}>{restaurant.name}
            </li>
          );
        })}
      </ol>
    </main>
  );
}

export default App;
