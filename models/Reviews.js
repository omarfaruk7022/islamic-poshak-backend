const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  email: String,
  review: String,
  status: Boolean,
  orderId: String,
  date: {
    type: String,
    default: Date.now,
  },
  time: {
    type: String,
    default: new Date().toLocaleTimeString(),
  },
  products: [],
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
