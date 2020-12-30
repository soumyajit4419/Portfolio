const mongooose = require("mongoose");
const schema = mongooose.Schema;

const numLikes = schema({
  likes: { type: Number, default: 0 },
  name: { type: String, required: true },
  spojRank: { type: String, required: true },
  hackerrank: { type: String, required: true },
  cgpa: { type: String, required: true },
  sem: { type: String, required: true },
});

module.exports = mongooose.model("likes", numLikes);
