// employeesModel.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./AppDb.db");

const createEmployeesTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS employees (
      employee_id INTEGER PRIMARY KEY AUTOINCREMENT,
      employee_name TEXT
    )
  `);
};

const getAllEmployees = (callback) => {
  db.all("SELECT * FROM employees", callback);
};

const getEmployeeById = (id, callback) => {
  db.get("SELECT * FROM employees WHERE employee_id = ?", [id], callback);
};

const createEmployee = (employee, callback) => {
  const { employee_name } = employee;
  db.run(
    "INSERT INTO employees (employee_name) VALUES (?)",
    [employee_name],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

const updateEmployeeById = (id, employee, callback) => {
  const { employee_name } = employee;
  db.run(
    "UPDATE employees SET employee_name = ? WHERE employee_id = ?",
    [employee_name, id],
    function (err) {
      callback(err, this.changes);
    }
  );
};

const deleteEmployeeById = (id, callback) => {
  db.run("DELETE FROM employees WHERE employee_id = ?", [id], function (err) {
    callback(err, this.changes);
  });
};

module.exports = {
  createEmployeesTable,
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
