const Gallery = require("../models/Gallery");

exports.getAllGallery = async (req, res, next) => {
  try {
    const result = await Gallery.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Gallery not found",
      error: error.message,
    });
  }
};

exports.createGallery = async (req, res, next) => {
  try {
    const newGallery = await Gallery.create(req.body);
    res.status(201).json({
      status: "success",
      data: newGallery,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Gallery not created",
      error: error.message,
    });
  }
};
