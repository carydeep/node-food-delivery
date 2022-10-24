const { updateOrder } = require("../controllers/orderController");

const router = require("express").Router();

router.post("/order", updateOrder);

module.exports = router;
