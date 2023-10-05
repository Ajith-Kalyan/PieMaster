// db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("AppDb.db");

// create a table
db.run(
  "CREATE TABLE IF NOT EXISTS Employees ( employee_id INTEGER PRIMARY KEY AUTOINCREMENT, employee_name TEXT)"
);

db.run(
  "CREATE TABLE IF NOT EXISTS Pies (pie_id INTEGER PRIMARY KEY AUTOINCREMENT, pie_name TEXT, price INTEGER)"
);

db.run(`
  CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    pies_quantity TEXT,
    price REAL,
    status TEXT,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
  )
`);
module.exports = db;
