var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//to show path for sendFile
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile("index.html")
});
// same as res.send if object sends
// app.get('/', function(req, res){
//     res.json({message: "HI FROM EXPRESS!"});
// });

app.use('/api/todos', todoRoutes);


app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT 3000");
});
