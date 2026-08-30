const express = require("express");
const router = express.Router();
const {
  gettAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
} = require("../../controllers/employees.controller");

router
  .route("/")
  .get(gettAllEmployees)
  .post(createNewEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

router.route("/:id").get(getEmployeeById);

module.exports = router;
