const express = require("express");
const router = express.Router();
const userController = require("./controller");

router.get("/", userController.getAllUsers);

router.post("/register", userController.register);

router.post("/signin", userController.signin);

module.exports = router;
