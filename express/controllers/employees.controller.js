const data = {
  employees: require("../model/employees.json"),
  setEmployees: function (data) {
    this.employees = data;
  },
};

const gettAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployee = (req, res) => {
  const newEmployee = {
    id: data.employees[data.employees.length - 1].id + 1 || 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: "First and last names are required." });
  }

  data.setEmployees([...data.employees, newEmployee]);
  res.status(201).json(data.employees);
};

const updateEmployee = (req, res) => {
  const employee = data.employees.find((e) => e.id === parseInt(req.body.id));
  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found` });
  }

  if (req.body.firstname) employee.firstname = req.body.firstname;
  if (req.body.lastname) employee.lastname = req.body.lastname;
  const filteredArray = data.employees.filter(
    (e) => e.id !== parseInt(req.body.id),
  );
  const unsortedArray = [...filteredArray, employee];
  data.setEmployees(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)),
  );
  res.json(data.employees);
};

const deleteEmployee = (req, res) => {
  const id = parseInt(req.body.id);
  if (!id) {
    return res
      .status(400)
      .json({ message: "ID is required to delete employee" });
  }

  const filteredArray = data.employees.filter((e) => e.id !== id);

  data.setEmployees(filteredArray);
  res.json(filteredArray);
};

const getEmployeeById = (req, res) => {
  const id = parseInt(req.body.id);
  if (!id) {
    return res
      .status(400)
      .json({ message: "ID is required to delete employee" });
  }

  const employee = data.employees.find((e) => e.id === id);

  res.json(employee);
};

module.exports = {
  gettAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
};
