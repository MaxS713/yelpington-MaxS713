
//boiler plate to use express and open a port
const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors"); 
// not sure if cors was actually needed in this scenario, but added it for good measure
const app = require('express')();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//gets the json data and stores it in a variable
let restaurantList = require('./restaurants.json');

//sends the whole data if this url is visited
app.get('/api',function(req,res){
  res.send(restaurantList)
})

//sends only the corresponding part of the JSON data 
//if a restaurant by id is demanded
app.get('api/restaurant/:id',function(req,res){
  let id = parseInt(req.params.id) - 1;
  let restaurantDataToSend = restaurantList[id]
  res.send(restaurantDataToSend)
})

//I'm listening...
app.listen(port, () => {
  console.log("Now listening on http://localhost:" + port);
});