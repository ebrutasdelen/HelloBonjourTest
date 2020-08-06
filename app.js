const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

 app.use(express.static(__dirname)); 


app.get("/", function(req,res){
     res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
    let nom = req.body.nom;
    res.send("<p>Bonjour</p> "+nom);
});



app.listen(3000, function(){
    console.log("Server Started");
});