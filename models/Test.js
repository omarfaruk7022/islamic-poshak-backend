const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  customername: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  referencename: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  allproducts: {
    type: Array,
  },
  remarks: {
    type: String,
  },
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
