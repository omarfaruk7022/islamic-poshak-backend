const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user.controller");

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUsers);

router
  .route("/:id")
  .get(usersController.getUserById)
  .delete(usersController.deleteUser)
  .patch(usersController.updateUserInfo);

router
  .route("/email/:email")
  .get(usersController.getUserByEmail)
  .put(usersController.updateOrCreateUser);


module.exports = router;
