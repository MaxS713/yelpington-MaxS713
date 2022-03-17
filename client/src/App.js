import React, {useState, useEffect} from "react";
import './App.css';
import Map from "./components/Map.js"

function App() {

  const [restaurantData, setRestaurantData] = useState([]);

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
    <h1>Places You Can Eat!</h1>
    <Map restaurantData ={restaurantData}/>
    </main>
  );
}

export default App;
