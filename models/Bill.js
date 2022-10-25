const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    methodPayment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", BillSchema);
