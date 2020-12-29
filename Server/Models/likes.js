const mongooose = require("mongoose");
const schema = mongooose.Schema;

const numLikes = schema({
  likes: { type: Number, default: 0 },
  name: { type: String, required: true },
});

module.exports = mongooose.model("likes", numLikes);
