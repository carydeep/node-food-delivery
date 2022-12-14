const { createBill, getBill } = require("../controllers/billController");

const router = require("express").Router();

router.post("/get", getBill);
router.post("/post", createBill);

module.exports = router;
