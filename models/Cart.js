const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  orderDate: {
    type: String,
  },
  orderTime: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  long: {
    type: String,
  },
  body: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
