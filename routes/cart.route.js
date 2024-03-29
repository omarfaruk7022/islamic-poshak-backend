const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router
  .route("/")
  .get(cartController.getAllCart)
  .post(cartController.createCart);


router
  .route("/:id")
  .put(cartController.updateCartById)
  .delete(cartController.deleteCart)
  .patch(cartController.updateCart);

router
  .route("/:email")
  .get(cartController.getCartByEmail)
  .delete(cartController.deleteCartByEmail);
  

router
  .route("/email/:email")
  .delete(cartController.deleteCartByEmail);

module.exports = router;
