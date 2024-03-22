const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviews.controller");
const middleware = require("../middleware");

router.delete(
  "/:id",
  middleware.decodeToken,
  reviewsController.deleteReviewById
);
router
  .route("/")
  .get(reviewsController.getAllReviews)
  .post(reviewsController.createReviews);

router.route("/:id").put(reviewsController.updateReviewById);

module.exports = router;
