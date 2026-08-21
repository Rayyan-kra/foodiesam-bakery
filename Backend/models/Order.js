const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },

  items: {
    type: Array,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },

  address: {
    type: Object,
    required: true,
  },

  paymentMethod: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Pending",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
