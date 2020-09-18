const express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.get("/", function (req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/burgers_controller.js");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
  console.log("Sever listening on PORT" + PORT);
});
