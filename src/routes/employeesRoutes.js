//employeesRoute.js
const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");

console.log({ employeesController });

router.get("/", employeesController.getAllEmployees);
router.get("/:employee_id", employeesController.getEmployeeById);
router.post("/", employeesController.createEmployee);
router.put("/:employee_id", employeesController.updateEmployeeById);
router.delete("/:employee_id", employeesController.deleteEmployeeById);

module.exports = router;
