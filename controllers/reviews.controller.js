const Reviews = require("../models/Reviews");

exports.getAllReviews = async (req, res, next) => {
  try {
    const result = await Reviews.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Reviews not found",
      error: error.message,
    });
  }
};

exports.createReviews = async (req, res, next) => {
  try {
    const newReviews = await Reviews.create(req.body);
    res.status(201).json({
      status: "success",
      data: newReviews,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Reviews not created",
      error: error.message,
    });
  }
};

exports.updateReviewById = async (req, res, next) => {
  try {
    const reviewId = req.params.id;
    const updates = req.body;
    const result = await Reviews.findByIdAndUpdate(reviewId, updates, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Review not found",
      error: error.message,
    });
  }
};
