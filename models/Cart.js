const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
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
    type: Date,
    default: Date.now,
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
