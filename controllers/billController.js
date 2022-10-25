const Bill = require("../models/Bill");
const HistoryOrder = require("../models/HistoryOrder");
const billController = {
  createBill: async (req, res) => {
    try {
      const { name, price, methodPayment, order, userID } = req.body;
      const newBill = new Bill({
        user: userID,
        name,
        price,
        methodPayment,
      });
      const createdBill = await newBill
        .save()
        .then((result) => result)
        .catch((err) => {
          return res.status(500).json(err.message);
        });
      const newHistoryOrder = new HistoryOrder({
        user: userID,
        bill: createdBill._id,
        orderItems: order.orderItems,
        totalAmount: order.totalAmount,
      });
      await newHistoryOrder
        .save()
        .then((result) => {
          return res.status(200).json("Purchare success");
        })
        .catch((err) => {
          return res.status(500).json(err.message);
        });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  getBill: async (req, res) => {
    try {
      const { iduser } = req.params;
      const bills = await Bill.find({ user: iduser });
      return res.status(200).json(bills);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};

module.exports = billController;
