const Order = require("../models/Order");
const { v4: uuidv4 } = require("uuid");
const middleware = require("../middleware/index");

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
      message: "Order not found",
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

exports.deleteOrder = async (req, res) => {
  try {
    const result = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Order not found",
      error: error.message,
    });
  }
};

// exports.createOrder = async (req, res, next) => {
//   try {
//     const result = await Order.create(req.body);
//     res.status(201).json({
//       status: "success",
//       data: result,
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: "order not found",
//       error: error.message,
//     });
//   }
// };

exports.createOrder = async (req, res, next) => {
  
  try {
    const orderData = req.body;
    const ordersId = uuidv4(); // Generate a new UUID for the order

    const result = await Order.create({
      email: orderData.data[0].email,
      phone: orderData.data[0].phone,
      deliveryAddress: orderData.data[0].deliveryAddress,
      orderDate: orderData.data[0].orderDate,
      orderTime: orderData.data[0].orderTime,
      ordersId: ordersId,
      customerName: orderData.data[0].customerName,
      orders: orderData.data,
      orderStatus: orderData.data[0].orderStatus,
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
