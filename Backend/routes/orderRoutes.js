const sendOrderEmail = require("../utils/sendOrderEmail");
const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);

    try {
      await sendOrderEmail(order);
    } catch (emailError) {
      console.log("Email sending failed:", emailError.message);
    }

    res.status(201).json({
      message: "Order placed successfully",
      order: order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to place order",
    });
  }
});

module.exports = router;
