var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");

app = express();
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.get('/',function(req, res){
	res.sendFile('index.html', {root: path.join(__dirname, '.')})
})

app.listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');