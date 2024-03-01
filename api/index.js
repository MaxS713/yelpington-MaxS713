//  boiler plate to use express and open a port
const express = require("express");
const cors = require("cors");
const app = require("express")();
const { v4 } = require("uuid");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// gets the json data and stores it in a variable
const restaurantList = require("./restaurants.json");

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

// sends the whole data if this url is visited
app.get("/api/get-all-restaurants", (req, res) => {
  res.send(restaurantList);
});

// sends only the corresponding part of the JSON data
// if a restaurant by id is demanded
app.get("/api/get-restaurant-data/:id", (req, res) => {
  const id = parseInt(req.params.id) - 1;
  const restaurantDataToSend = restaurantList[id];
  res.send(restaurantDataToSend);
});

// I'm listening...
app.listen(port, () => {
  console.log(`Now listening on http://localhost:${port}`);
});

module.exports = app;
