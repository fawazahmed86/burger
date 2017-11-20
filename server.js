// Importing all dependencies
var express = require("express");
var bodyParser = require("body-parser");
var expressHandleBars = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.enable('view cache');

app.use("/", routes);

app.listen(port, function(){
  console.log("listening on port", port);
});
 