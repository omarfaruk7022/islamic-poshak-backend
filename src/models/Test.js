import { Schema, model } from "mongoose";

const testSchema = new Schema({
  customerName: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  referenceName: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  allProducts: {
    type: Array,
  },
  remarks: {
    type: String,
  },
}, { versionKey: false });

const Test = model("Test", testSchema);

export default Test;
