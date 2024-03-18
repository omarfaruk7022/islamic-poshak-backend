const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const middleware = require("../middleware/index");

router.post("/", middleware.decodeToken, productController.createProduct);

router.route("/").get(productController.getAllProducts);
router
  .route("/:id")
  .get(productController.getProductById)
  .delete(productController.deleteProduct)
  .put(productController.updateProductById);

module.exports = router;
