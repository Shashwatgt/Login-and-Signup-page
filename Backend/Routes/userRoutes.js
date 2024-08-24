const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controllers/userControllers");
//we use route instead of get,post to chain multiple request

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
