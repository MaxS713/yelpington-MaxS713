import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.js";
import RestaurantPage from "./components/RestaurantPage.js";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="restaurant" element={<RestaurantPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);