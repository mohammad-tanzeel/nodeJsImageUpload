const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
const passport = require("passport");

router.get("/checklist", passport.authenticate('jwt', { session: false }), taskController.getCheckList);
router.post("/checklist", taskController.addTask);

module.exports = router;
