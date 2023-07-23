const Test = require("../models/Test");

exports.getAllTest = async (req, res, next) => {
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

exports.createTest = async (req, res, next) => {
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
