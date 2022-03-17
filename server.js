const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/api',function(req,res){
  res.sendFile(__dirname + '/api/restaurants.json')
})

app.listen(port, () => {
  console.log("Now listening on http://localhost:" + port);
});