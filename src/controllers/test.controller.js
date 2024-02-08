import Test from "../models/Test.js";

export const getAllTest = async (req, res, next) => {
  try {
    const result = await Test.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Test not found",
      error: error.message,
    });
  }
};

export const createTest = async (req, res, next) => {
  try {
    const result = await Test.create(req.body);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Test not found",
      error: error.message,
    });
  }
};
