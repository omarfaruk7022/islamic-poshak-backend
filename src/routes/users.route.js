import { Router } from "express";
const router = Router();
import {
  getAllUsers,
  createUsers,
  getUserById,
  deleteUser,
  updateUserInfo,
  getUserByEmail,
  updateOrCreateUser,
} from "../controllers/user.controller.js";

router.route("/").get(getAllUsers).post(createUsers);

router.route("/:id").get(getUserById).delete(deleteUser).patch(updateUserInfo);

router.route("/email/:email").get(getUserByEmail).put(updateOrCreateUser);

export default router;
