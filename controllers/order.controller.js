const Order = require("../models/Order");
const { v4: uuidv4 } = require("uuid");

exports.getAllOrder = async (req, res, next) => {
  try {
    const result = await Order.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Cart not found",
      error: error.message,
    });
  }
};

exports.getOrderByEmail = async (req, res, next) => {
  try {
    const result = await Order.find({ email: req.params.email });
    res.status(200).json({
      status: "success",
      data: result,
    });
    console.log(result);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Cart not found",
      error: error.message,
    });
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const updates = req.body;
    const result = await Order.findByIdAndUpdate(orderId, updates, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Cart not found",
      error: error.message,
    });
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const result = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Cart not found",
      error: error.message,
    });
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const orderData = req.body;
    const ordersId = uuidv4(); // Generate a new UUID for the order

    const result = await Order.create({
      ordersId: ordersId,
      orders: orderData.data,
    });

    res.status(201).json({
      status: "success", 
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Please enter valid data",
      error: error.message,
    });
  }
};