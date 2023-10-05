// app.js
const express = require("express");
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
const employeesRoutes = require("./src/routes/employeesRoutes");
const piesRoutes = require("./src/routes/piesRoutes");
const ordersRoutes = require("./src/routes/ordersRoutes");

app.use("/employees", employeesRoutes);
app.use("/pies", piesRoutes);
app.use("/orders", ordersRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
