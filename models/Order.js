const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
  },
  orderStatus: {
    type: String,
    default: "Pending",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
