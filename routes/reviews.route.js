const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviews.controller");

router
  .route("/")
  .get(reviewsController.getAllReviews)
  .post(reviewsController.createReviews);

router.route("/:id").put(reviewsController.updateReviewById);

module.exports = router;
