const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user.controller");
const middleware = require("../middleware");

router.get("/", middleware.decodeToken, usersController.getAllUsers);
router.patch("/:id", middleware.decodeToken, usersController.updateUserInfo);

router.route("/").post(usersController.createUsers);
// .get(usersController.getAllUsers)

router
  .route("/:id")
  .get(usersController.getUserById)
  .delete(usersController.deleteUser);

router
  .route("/email/:email")
  .get(usersController.getUserByEmail)
  .put(usersController.updateOrCreateUser);

module.exports = router;
