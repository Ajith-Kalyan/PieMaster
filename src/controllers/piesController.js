//piesController.js
const express = require("express");
const router = express.Router();
const piesModel = require("../models/piesModel");

piesModel.createPiesTable(); // If table does not exists.

//Get All Pies
const getAllPies = (req, res) => {
  piesModel.getAllPies((err, pies) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(pies);
  });
};

module.exports = {
  getAllPies,
};
