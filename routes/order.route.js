const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router
  .route("/")
  .get(orderController.getAllOrder)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(orderController.getOrderById)
  .delete(orderController.deleteOrder)

  .patch(orderController.updateOrder);

router.route("/email/:email").get(orderController.getOrderByEmail);

module.exports = router;
