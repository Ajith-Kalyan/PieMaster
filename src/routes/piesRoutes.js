//piesRoutes.js
const express = require("express");
const router = express.Router();
const piesController = require("../controllers/piesController");

console.log({ piesController });

router.get("/", piesController.getAllPies);

module.exports = router;
