import { Router } from "express";
const router = Router();
import { getAllTest, createTest } from "../controllers/test.controller.js";

router.route("/").get(getAllTest).post(createTest);

export default router;
