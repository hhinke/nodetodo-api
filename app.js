var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require("./config");

var setupController = require("./controllers/SetupController");
var apiController = require("./controllers/ApiController");

var port = process.env.PORT || 3000;

app.use("/", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

setupController(app);
apiController(app);

app.listen(port);
