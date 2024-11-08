const pool = require('../db/connection');

// Department Queries
const getAllDepartments = async () => {
  return await pool.query('SELECT * FROM departments');
};

const addDepartment = async (name) => {
  return await pool.query('INSERT INTO departments (name) VALUES ($1)', [name]);
};

// Role Queries
const getAllRoles = async () => {
  return await pool.query(`
    SELECT roles.id, roles.title, departments.name AS department, roles.salary
    FROM roles
    JOIN departments ON roles.department_id = departments.id
  `);
};

const addRole = async (title, salary, departmentId) => {
  return await pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
};

// Employee Queries
const getAllEmployees = async () => {
  return await pool.query(`
    SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, 
    (SELECT CONCAT(m.first_name, ' ', m.last_name) FROM employees m WHERE e.manager_id = m.id) AS manager
    FROM employees e
    JOIN roles r ON e.role_id = r.id
    JOIN departments d ON r.department_id = d.id
  `);
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
  return await pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
};

const updateEmployeeRole = async (employeeId, roleId) => {
  return await pool.query('UPDATE employees SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
};

// Export all query functions
module.exports = {
  getAllDepartments,
  addDepartment,
  getAllRoles,
  addRole,
  getAllEmployees,
  addEmployee,
  updateEmployeeRole
};

