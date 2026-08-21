const express = require("express");
const Cake = require("../models/Cake");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const cakes = await Cake.find();

    res.json(cakes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get cakes",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);

    if (!cake) {
      return res.status(404).json({
        message: "Cake not found",
      });
    }

    res.json(cake);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get cake",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const cake = await Cake.create(req.body);

    res.status(201).json(cake);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create cake",
    });
  }
});

module.exports = router;
