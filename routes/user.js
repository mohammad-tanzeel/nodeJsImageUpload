const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/profile", userController.profile);

module.exports = router;
