const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cakeRoutes = require("./routes/cakeRoutes");
const { router: authRoutes } = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/cakes", cakeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed");
    console.log(error);
  });