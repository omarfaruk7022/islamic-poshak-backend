const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct)

router 
  .route("/:id")
  .get(productController.getProductById)
  .delete(productController.deleteProduct)
  .put(productController.updateProductById);

module.exports = router;
