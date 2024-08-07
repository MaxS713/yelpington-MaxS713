import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HomePageMap from "./HomePageMap";

import restaurantLogo from "../assets/restaurant-logo.png";

import "./HomePage.css";

export default function HomePage() {
  // Setting up some useState variables
  const [restaurantData, setRestaurantData] = useState([]);
  // this will hold the restaurant JSON data

  // this state is to know if a link is being hovered on so that
  // the corresponding marker size can change
  const [hoverIndex, setHoverIndex] = useState(false);

  // I've read online that this can be used to go to a link on a onClick event...
  const navigate = useNavigate();

  // This functions gets the JSON data sent by server.js for all restaurants
  async function getData() {
    let restaurantsList = await fetch("api/get-all-restaurants");
    restaurantsList = await restaurantsList.json();
    setRestaurantData(restaurantsList);
  }
  useEffect(() => {
    getData();
  }, []);

  // rendering
  return (
    <main>
      {/* The title and map */}
      <div id="title-and-map">
        <div id="title-and-logo">
          <img
            src={restaurantLogo}
            alt="restaurant logo, a plate with fork and spoon on each side"
            height="120rem"
          />
          <h1>Places You Can Eat!</h1>
        </div>
        {/* The map with the two states passed: the restaurant data +
        which item in the list is being hovered on  */}
        <HomePageMap restaurantData={restaurantData} hoverIndex={hoverIndex} />
      </div>

      {/* The list of restaurants */}
      <ol id="navbar">
        {/* Thanks to .map - every item in the JSON data received gets a <li> element */}
        {restaurantData.map((restaurant) => (
          <li
            key={restaurant.id}
            // when the item in the list is clicked,
            // the user is sent to the restaurant's respective page
            onClick={() => navigate(`/restaurant/?id=${restaurant.id}`)}
            // This sets the state to let the map know
            // which marker to enlarge on hover (mouse enter and leave)
            onMouseEnter={() => setHoverIndex(restaurant.id)}
            onMouseLeave={() => setHoverIndex(false)}
          >
            {restaurant.name}
          </li>
        ))}
      </ol>
    </main>
  );
}
