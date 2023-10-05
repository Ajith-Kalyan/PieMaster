// orderRoutes.js
const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

console.log({ ordersController });

router.get("/", ordersController.getAllOrders);
router.post("/", ordersController.createOrder);

module.exports = router;
