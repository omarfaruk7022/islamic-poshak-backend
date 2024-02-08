import { Schema, model } from "mongoose";

const orderSchema = new Schema({
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

const Order = model('Order', orderSchema);

export default Order;
