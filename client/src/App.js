import React, {useState, useEffect} from "react";
import HomePageMap from "./components/HomePageMap.js";
import restaurantLogo from "./images/restaurant-logo.png";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {

  const [restaurantData, setRestaurantData] = useState([]);
  const [hoverIndex, setHoverIndex] = useState("");

  async function getData() {
    let restaurantsList = await fetch("http://localhost:5000/api");
    restaurantsList = await restaurantsList.json();
    setRestaurantData(restaurantsList);
  }
  useEffect(() => {
    getData();
  }, []);

  let navigate = useNavigate(); 

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
        <HomePageMap restaurantData={restaurantData} hoverIndex={hoverIndex} />
      </div>
      <ol id="navbar">
        {restaurantData.map((restaurant) => {
          return (
            <li
              key={restaurant.id}
              onClick={() => navigate(`/restaurant/?id=${restaurant.id}`)}
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
    </main>
  );
}

export default App;
