const Order = require("../models/Order");

const orderController = {
  updateOrder: async (req, res) => {
    const { userID, order } = req.body;
    try {
      const isUserExist = await Order.findOne({ user: userID });
      if (isUserExist) {
        await Order.findOneAndUpdate(
          { user: userID },
          {
            orderItems: order.orderItems,
            totalAmount: order.totalAmount,
          }
        );
      } else {
        const newOrder = new Order({
          user: userID,
          orderItems: order.orderItems,
          totalAmount: order.totalAmount,
        });
        await newOrder
          .save()
          .then((result) => {
            return res.status(200).json(result);
          })
          .catch((err) => {
            return res.status(500).json(err.message);
          });
      }
    } catch (error) {
      return res.status(500).json(err.message);
    }
  },
};

module.exports = orderController;
