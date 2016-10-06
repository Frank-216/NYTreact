const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

app.use(express.static(process.cwd() + "/public"));

//Nagivate the simple page on HTML 
app.get("*", function(req, res) {
	console.log(0);
  res.sendFile(__dirname + "/public/index.html");
});
// app get to git info from mongoose
app.get('/api',function(req,res){

});
// app post informaiton to the db
app.post("/api/save",function(req,res){

});

app.listen(PORT, function(){
  console.log("App listening on port %s", PORT);
});
