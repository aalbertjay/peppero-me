var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");

app = express();
app.use('/', express.static(__dirname + '/html'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/',function(req, res){
	res.sendFile('index.html', {root: path.join(__dirname, '.')})
})

app.listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
