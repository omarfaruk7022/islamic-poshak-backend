import { Router } from "express";
const router = Router();
import {
  getAllProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProductById,
} from "../controllers/product.controller.js";

router.route("/").get(getAllProducts).post(createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProductById);

export default router;
