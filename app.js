var express = require("express");
var bodyParser = require("body-parser");
const uuidV1 = require('uuid/v1');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require("./routes.js")(app);

var server = app.listen(3000, function() {
    console.log("Listening on port %s...", server.address().port);
	console.log("Listening on address %s...", server.address().address);
});
