"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("listening on port port ".concat(PORT));
});