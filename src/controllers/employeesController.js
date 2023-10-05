// employeesController.js
const express = require("express");
const router = express.Router();
const employeesModel = require("../models/employeesModel");

employeesModel.createEmployeesTable(); // Ensure table is created

// Get all employees
const getAllEmployees = (req, res) => {
  employeesModel.getAllEmployees((err, employees) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(employees);
  });
};

const getEmployeeById = (req, res) => {
  const employeeId = req.params.employee_id;
  employeesModel.getEmployeeById(employeeId, (err, employee) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  });
};

const createEmployee = (req, res) => {
  const newEmployee = req.body;
  employeesModel.createEmployee(newEmployee, (err, employeeId) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).json({ id: employeeId, ...newEmployee });
  });
};

const updateEmployeeById = (req, res) => {
  const employeeId = req.params.employee_id;
  const updatedEmployee = req.body;
  employeesModel.updateEmployeeById(
    employeeId,
    updatedEmployee,
    (err, changes) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (changes === 0) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.json({ id: employeeId, ...updatedEmployee });
    }
  );
};

const deleteEmployeeById = (req, res) => {
  const employeeId = req.params.employee_id;
  employeesModel.deleteEmployeeById(employeeId, (err, changes) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (changes === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
