const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  ordersId: String,
  orders: [
    {
      name: String,
      quantity: Number,
      price: Number,
      deliveryAddress: String,
      orderDate: String,
      orderTime: String,
      image: String,
      email: String,
      orderStatus: String,
    },
  ],
}, { versionKey: false });  // Exclude the version key from the schema

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
