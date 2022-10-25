const { createBill, getBill } = require("../controllers/billController");

const router = require("express").Router();

router.get("/:iduser", getBill);
router.post("/post", createBill);

module.exports = router;
