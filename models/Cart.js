const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  deliveryAddress: {
    type: String,
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
  orderStatus: {
    type: String,
    default: "Pending",
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
