const Users = require("../models/Users");


exports.getAllUsers = async (req, res) => {
  try {
    const result = await Users.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Users not found",
      error: error.message,
    });
  }
};


exports.getUserById = async (req, res, next) => {
  try {
    const result = await Users.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
      error: error.message,
    });
  }
};


exports.deleteUser = async (req, res, next) => {
  try {
    const result = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
      error: error.message,
    });
  }
};


exports.createUsers = async (req, res, next) => {
  try {
    const result = await Users.create(req.body);
    // result.logger();
    // const user = new Users(req.body);

    // const result = await user.save();
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

exports.getUserByEmail = async (req, res, next) => {
  try {
    const email = req.params.email;
    const result = await Users.find({ email: email });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
      error: error.message,
    });
  }
};

exports.updateOrCreateUser = async (req, res, next) => {
  try {
    const result = await Users.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
      error: error.message,
    });
  }
};

exports.updateUserInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Users.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.status(200).json({
      status: "success",
      data: result,
      message: "User's Role Updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
      error: error.message,
    });
  }
};







