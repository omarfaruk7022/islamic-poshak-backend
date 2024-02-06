import Product from "../models/Product.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Product not found",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const result = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Product not found",
      error: error.message,
    });
  }
};

// update a product using put
export const updateProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const updates = req.body;
    const result = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Product not found",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Product not found",
      error: error.message,
    });
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const result = await Product.create(req.body);
    // const product = new Product(req.body);

    // const result = await product.save();
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
