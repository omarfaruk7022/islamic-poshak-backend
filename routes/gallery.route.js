const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/gallery.controller");
const middleware = require("../middleware");

router.post("/", middleware.decodeToken, galleryController.createGallery);

router.route("/").get(galleryController.getAllGallery);

module.exports = router;
