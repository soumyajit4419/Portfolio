const express = require("express");
const router = express.Router();
const rankData = require("../Models/data");
const config = require("../config");

const secretUser = config.getUser();

router.get("/getRanks", (req, res, next) => {
  rankData.findOne({ name: secretUser }, (err, result) => {
    if (err) {
      return res.json({ status: 500, message: "Internal Server Error" });
    } else if (!result) {
      return res.json({ status: 422, message: "Document Not Found" });
    } else {
      allRanks = [];
      allRanks.push({ spojRank: result.spojRank });
      allRanks.push({ hackerrank: result.hackerrank });
      allRanks.push({ cgpa: result.cgpa });
      allRanks.push({ sem: result.sem });
      return res.json({ status: 200, message: allRanks });
    }
  });
});

module.exports = router;
