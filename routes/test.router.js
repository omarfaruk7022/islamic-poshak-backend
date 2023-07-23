const express = require("express");
const router = express.Router();
const testController = require("../controllers/test.controller");

router

  .route("/")
  .get(testController.getAllTest)
  .post(testController.createTest);

module.exports = router;
