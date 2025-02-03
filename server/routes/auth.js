// routes/auth.js
const express = require("express");
const router = express.Router();
const {
  handleSignUp,
  handleLogin,
  handleForgetPassword,
  handleResetPassword,
} = require("../controllers/authController");
const { verifySignUp,verifyLogin,verifyReset}=require("../middlewares/validation")

router.post("/signup",verifySignUp, handleSignUp);
router.post("/login",verifyLogin, handleLogin);
router.post("/forget-password", handleForgetPassword);
router.post("/reset-password", verifyReset,handleResetPassword);

module.exports = router;
