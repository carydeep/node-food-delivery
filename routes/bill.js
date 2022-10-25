const { createBill, getBill } = require("../controllers/billController");

const router = require("express").Router();

router.get("/bill", getBill);
router.post("/bill", createBill);

module.exports = router;
