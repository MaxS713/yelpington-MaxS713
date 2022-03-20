import { useState, useEffect } from 'react'
import RestaurantMap from "./RestaurantMap.js";
import "./restaurant-page.css";

export default function RestaurantPage() {

  const [currentRestaurantData, setCurrentRestaurantData] = useState([]);

  async function getRestaurantData() {
    let params = new URLSearchParams(document.location.search);
    let currentRestaurantID = params.get("id")
    let restaurantData = await fetch(`http://localhost:5000/restaurant/${currentRestaurantID}`);
    restaurantData = await restaurantData.json();
    setCurrentRestaurantData(restaurantData);
  }
  useEffect(() => {
    getRestaurantData();
  }, []);

  
  return (
    <main>
      <div id="page-content">
        <h1>{currentRestaurantData.name}</h1>
        <p>
          {currentRestaurantData.cuisine}
          <br />
          Address: {currentRestaurantData.address}
          <br />
          Phone Number: {currentRestaurantData.phoneNumber}
          <br />
          Hours: {currentRestaurantData.hours}
          <br />
          Hours: {currentRestaurantData.about}
        </p>
        <RestaurantMap currentRestaurantData={currentRestaurantData} />
        <button>Go Back</button>
      </div>
    </main>
  );
}
