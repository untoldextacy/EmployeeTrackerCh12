const inquirer = require('inquirer');
const {
  getAllDepartments, addDepartment,
  getAllRoles, addRole,
  getAllEmployees, addEmployee, updateEmployeeRole
} = require('../models/dbQueries');


const viewAllDepartments = async () => {
  const result = await getAllDepartments();
  console.table(result.rows);
};

const createDepartment = async () => {
  const { departmentName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the department:',
    }
  ]);
  await addDepartment(departmentName);
  console.log(`Added ${departmentName} to departments.`);
};


const viewAllRoles = async () => {
  const result = await getAllRoles();
  console.table(result.rows);
};

const createRole = async () => {
  const { title, salary, departmentId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Enter the department ID for this role:',
    }
  ]);
  await addRole(title, salary, departmentId);
  console.log(`Added ${title} role.`);
};


const viewAllEmployees = async () => {
  const result = await getAllEmployees();
  console.table(result.rows);
};

const createEmployee = async () => {
  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the employee\'s first name:',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the employee\'s last name:',
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the employee\'s role ID:',
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the employee\'s manager ID (or leave blank if none):',
    }
  ]);
  await addEmployee(firstName, lastName, roleId, managerId);
  console.log(`Added employee ${firstName} ${lastName}.`);
};

const changeEmployeeRole = async () => {
  const { employeeId, roleId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter the ID of the employee to update:',
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the new role ID for the employee:',
    }
  ]);
  await updateEmployeeRole(employeeId, roleId);
  console.log('Updated employee role.');
};

module.exports = {
  viewAllDepartments,
  createDepartment,
  viewAllRoles,
  createRole,
  viewAllEmployees,
  createEmployee,
  changeEmployeeRole
};
