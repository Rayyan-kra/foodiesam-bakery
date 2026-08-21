const express = require("express");
const sendOtpEmail = require("../utils/sendOtpEmail");

const router = express.Router();

const otpStore = {};

router.post("/send-otp",async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  otpStore[email] = otp;

  await sendOtpEmail(email, otp);
  
  res.json({
    message: "OTP generated successfully",
  });
});

router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      message: "Email and OTP are required",
    });
  }

  const savedOtp = otpStore[email];

  if (!savedOtp) {
    return res.status(400).json({
      message: "OTP not found or expired",
    });
  }

  if (Number(otp) !== savedOtp) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  delete otpStore[email];

  res.json({
    message: "OTP verified successfully",
  });
});

module.exports = {
  router,
  otpStore,
};
