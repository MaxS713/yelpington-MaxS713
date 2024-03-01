import { useEffect, useRef } from "react";

// imports needed for the map to function
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
// I needed this to use a local css file for leaflet icons, I hope you were able to npm install it!
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import * as L from "leaflet";
import "../assets/leaflet/leaflet.css";

import smallIconPNG from "../assets/leaflet/marker-icon-2x.png";
import bigIconPNG from "../assets/leaflet/marker-icon-2x-orange.png";
import shadowPNG from "../assets/leaflet/marker-shadow.png";

/* It ended up being easier to have two maps components, one for the homepage,
and one that would display for the single restaurant pages
because their properties were quite different. */

// The map component that shows on the index page
export default function Map({ hoverIndex, restaurantData }) {
  /* Reading up on how online, I created two icons,
  A default, smaller one, and one bigger and orange
  for when the corresponding restaurants are hovered on */
  const smallIcon = new L.Icon({
    iconUrl: smallIconPNG,
    shadowUrl: shadowPNG,
    iconSize: [18.75, 29.7],
    iconAnchor: [6, 20],
    popupAnchor: [1, -34],
    shadowSize: [20, 20],
    className: "marker-icon",
  });

  const bigIcon = new L.Icon({
    iconUrl: bigIconPNG,
    shadowUrl: shadowPNG,
    iconSize: [27.5, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: "marker-icon",
  });

  // It took some work but thanks to useEffect and useRef, when each
  // restaurant in the list is hovered, its corresponding marker changes
  const markerRef = useRef([]);

  useEffect(() => {
    if (hoverIndex) markerRef.current[hoverIndex - 1].setIcon(bigIcon);
  });

  // displaying the map
  return (
    <div id="map-container">
      <MapContainer
        center={[44.48, -73.21]} // hard-centered on Burlington, VT
        zoom={14.25}
        // I had to remove most zoom settings because they were not necessarily needed +
        // the map would too often accidentally move when trying to scroll around the page
        doubleClickZoom={false}
        trackResize={true}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
      >
        {/* Attribution */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Thanks to the .map method, this renders a unique marker
        for each restaurant's coordinates
        with a respective reference to know when their icon needs to change */}
        {restaurantData.map((restaurant, index) => (
          <Marker
            key={restaurant.id}
            icon={smallIcon}
            ref={(element) => {
              markerRef.current[index] = element;
            }}
            position={[restaurant.coordinates.ns, restaurant.coordinates.we]}
          />
        ))}
      </MapContainer>
    </div>
  );
}
