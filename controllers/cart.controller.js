const Cart = require("../models/Cart");

exports.getAllCart = async (req, res, next) => {
  try {
    const result = await Cart.find({});
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

exports.getCartByEmail = async (req, res, next) => {
  try {
    const result = await Cart.find({ email: req.params.email });
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

exports.updateCart = async (req, res, next) => {
  try {
    const cartId = req.params.id;
    const updates = req.body;
    const result = await Cart.findByIdAndUpdate(cartId, updates, {
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

exports.deleteCart = async (req, res, next) => {
  try {
    const result = await Cart.findByIdAndDelete(req.params.id);
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

exports.createCart = async (req, res, next) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(201).json({
      status: "success",
      data: newCart,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Cart not created",
      error: error.message,
    });
  }
};
