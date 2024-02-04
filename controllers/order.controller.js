const Order = require("../models/Order");

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

exports.getOrderById = async (req, res, next) => {
  try {
    const result = await Order.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "order not found",
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
    const result = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "order not found",
      error: error.message,
    });
  }
};
