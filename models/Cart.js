const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  itemId: {
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
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
