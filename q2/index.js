const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express(); // app variable

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/relationships");

app.use(require("./routes/route"));

app.listen(5000, () => console.log("server listening on port"));
