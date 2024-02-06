import { Router } from "express";
const router = Router();
import { getAllOrder, createOrder, deleteOrder, updateOrder, getOrderByEmail } from "../controllers/order.controller.js";

router
  .route("/")
  .get(getAllOrder)
  .post(createOrder);

router.route("/:id").delete(deleteOrder)
.patch(updateOrder);

router.route("/:email").get(getOrderByEmail);

export default router;
