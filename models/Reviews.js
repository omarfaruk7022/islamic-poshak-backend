const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  email: String,
  review: String,
  status: Boolean,
  orderId: String,
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
