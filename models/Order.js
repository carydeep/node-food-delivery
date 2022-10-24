const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "User is required"],
    },
    orderItems: [
      {
        img: {
          type: String,
          required: [true, "Image is required"],
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is required"],
        },
        price: {
          type: Number,
          required: [true, "Price is required"],
        },
        name: {
          type: String,
          required: [true, "Name is required"],
        },
        id: {
          type: String,
          required: [true, "ID is required"],
        },
      },
    ],
    totalAmount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
