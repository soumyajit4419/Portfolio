const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const likeRoute = require("./Routes/likeMethods");
const rankRoute = require("./Routes/rankMethods");
const uri = config.getSecretToken();

const app = express();
const Port = process.env.PORT || 3600;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.json({ message: "Server Running" });
});

app.use("/likes", likeRoute);
app.use("/ranks", rankRoute);
app.listen(Port, () => {
  console.log(`Server Running ${Port}`);
});

mongoose
  .connect(uri)
  .then(function () {
    console.log("Moongose Connection Successful");
  })
  .catch(function (err) {
    console.log(err);
  });
