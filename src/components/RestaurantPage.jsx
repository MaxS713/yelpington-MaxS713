import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import RestaurantMap from "./RestaurantMap";

import "./restaurant-page.css";

// The restaurant page component to display each restaurants's information
export default function RestaurantPage() {
  // setting up a state variable to store the current restaurant's data
  const [currentRestaurantData, setCurrentRestaurantData] = useState([]);

  const navigate = useNavigate(); // this is used to be able to go to another url "onClick"

  // this functions gets the corresponding data for each restaurant from server.js
  // based on which id was in the URL
  async function getRestaurantData() {
    const params = new URLSearchParams(document.location.search);
    const currentRestaurantID = params.get("id");
    let restaurantData = await fetch(`../api/get-restaurant-data/${currentRestaurantID}`);
    restaurantData = await restaurantData.json();
    setCurrentRestaurantData(restaurantData);
  }
  useEffect(() => {
    getRestaurantData();
  }, []);

  // Displaying all the information for each restaurant
  return (
    <main>
      <div id="page-content">
        <h1>{currentRestaurantData.name}</h1>
        <p>
          <center>{currentRestaurantData.cuisine}</center>
          <br />
          <span> Address: </span>
          {currentRestaurantData.address}
          <br />
          <span>Phone Number: </span>
          {currentRestaurantData.phoneNumber}
          <br />
          <span>Hours: </span>
          {currentRestaurantData.hours}
          <br />
          <span>Description: </span>
          {currentRestaurantData.about}
        </p>
        <RestaurantMap currentRestaurantData={currentRestaurantData} />
        <button type="button" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    </main>
  );
}
