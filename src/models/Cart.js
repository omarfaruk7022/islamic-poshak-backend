import { Schema, model } from "mongoose";

const cartSchema = new Schema({
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

const Cart = model("Cart", cartSchema);

export default Cart;
