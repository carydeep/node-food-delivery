const { updateOrder } = require("../controllers/orderController");

const router = require("express").Router();

router.post("/post", updateOrder);

module.exports = router;
