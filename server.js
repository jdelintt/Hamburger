const express = require("express");
var bodyParser = require("body-parser");
var express = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log("Sever listening on PORT" + PORT);
});
