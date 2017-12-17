var express = require("express");
var bodyParser = require("body-parser");
const uuidV1 = require('uuid/v1');

var app = express();
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require("./routes.js")(app);

var server = app.listen(server_port, server_host, function() {
    console.log("Listening on port %s...", server.address().port);
	console.log("Listening on address %s...", server.address().address);
});
