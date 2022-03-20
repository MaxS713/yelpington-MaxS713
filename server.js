const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


let restaurantList = require('./api/restaurants.json');

console.log(restaurantList)

app.get('/api',function(req,res){
  res.sendFile(__dirname + '/api/restaurants.json')
})

app.get('/restaurant/:id',function(req,res){
  let id = parseInt(req.params.id) - 1;
  let restaurantDataToSend = restaurantList[id]
  console.log(restaurantDataToSend)
  res.send(restaurantDataToSend)
})

app.listen(port, () => {
  console.log("Now listening on http://localhost:" + port);
});