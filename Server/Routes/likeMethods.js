const express = require("express");
const router = express.Router();
const likesData = require("../Models/data");
const config = require("../config");

const secretUser = config.getUser();

router.get("/getLikes", (req, res, next) => {
  likesData.findOne({ name: secretUser }, (err, result) => {
    if (err) {
      return res.json({ status: 500, message: "Internal Server Error" });
    } else if (!result) {
      return res.json({ status: 422, message: "Document Not Found" });
    } else {
      return res.json({ status: 200, data: result.likes });
    }
  });
});

router.post("/updateLikes", (req, res, next) => {
  likesData.findOne({ name: secretUser }, (err, result) => {
    if (err) {
      return res.json({ status: 500, message: "Internal Server Error" });
    } else if (!result) {
      return res.json({ status: 422, message: "Document Not Found" });
    } else {
      result.likes = result.likes + 1;
      result.save();
      return res.json({ status: 200, message: "Updated Successfully" });
    }
  });
});

module.exports = router;
