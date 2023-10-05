// ordersModel.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./AppDb.db");

// Function to create the orders table
const createOrdersTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      orderId INTEGER PRIMARY KEY AUTOINCREMENT,
      orderedBy INTEGER,
      orderContents TEXT,
      orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
      paymentStatus TEXT,
      FOREIGN KEY (orderedBy) REFERENCES employees(employee_id)
    )
  `);
};

// Function to create a new order
const createOrder = (order, callback) => {
  const { orderedBy, orderContents, paymentStatus } = order;
  db.run(
    "INSERT INTO orders (orderedBy, orderContents, paymentStatus) VALUES (?, ?, ?)",
    [orderedBy, JSON.stringify(orderContents), paymentStatus],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

// Function to get all orders
const getAllOrders = (callback) => {
  db.all("SELECT * FROM orders", callback);
};

module.exports = {
  createOrdersTable,
  createOrder,
  getAllOrders,
};
