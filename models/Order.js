const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  ordersId: String,
  email: String,
  deliveryAddress: String,
  orderDate: String,
  orderTime: String,
  customerName: String,
  phone: String,
  orderStatus: String,
  orders: [
    {
      name: String,
      quantity: Number,
      price: Number,
      phone: String,
      deliveryAddress: String,
      orderDate: String,
      orderTime: String,
      image: String,
      customerName: String,
      email: String,
      orderStatus: {
        type: String,
        default: "pending",
      },
    },
  ],
  // name: {
  //   type: String,
  // },
  // quantity: {
  //   type: Number,
  // },
  // price: {
  //   type: Number,
  // },
  // deliveryAddress: {
  //   type: String,
  // },
  // orderDate: {
  //   type: String,
  // },
  // orderTime: {
  //   type: String,
  // },
  // image: {
  //   type: String,
  // },
  // email: {
  //   type: String,
  // },
  // orderStatus: {
  //   type: String,
  //   default: "Pending",
  // },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
