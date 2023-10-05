// ordersController.js
const express = require("express");
const router = express.Router();
const ordersModel = require("../models/ordersModel");

ordersModel.createOrdersTable();

// Get All Orders
const getAllOrders = (req, res) => {
  ordersModel.getAllOrders((err, orders) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(orders);
  });
};

// Create an Order
const createOrder = (req, res) => {
  const newOrder = req.body;
  ordersModel.createOrder(newOrder, (err, orderId) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).json({ id: orderId, ...newOrder });
  });
};

module.exports = {
  getAllOrders,
  createOrder,
};
