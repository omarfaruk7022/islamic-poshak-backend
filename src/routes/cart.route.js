import { Router } from "express";
const router = Router();
import {
  getAllCart,
  createCart,
  deleteCart,
  updateCart,
  getCartByEmail,
} from "../controllers/cart.controller.js";

router.route("/").get(getAllCart).post(createCart);

router.route("/:id").delete(deleteCart).patch(updateCart);

router.route("/:email").get(getCartByEmail);

export default router;
