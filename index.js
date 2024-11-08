const inquirer = require('inquirer');
const {
  viewAllDepartments,
  createDepartment,
  viewAllRoles,
  createRole,
  viewAllEmployees,
  createEmployee,
  changeEmployeeRole
} = require('./controllers/appController');

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]);

  switch (action) {
    case 'View all departments':
      await viewAllDepartments();
      break;
    case 'View all roles':
      await viewAllRoles();
      break;
    case 'View all employees':
      await viewAllEmployees();
      break;
    case 'Add a department':
      await createDepartment();
      break;
    case 'Add a role':
      await createRole();
      break;
    case 'Add an employee':
      await createEmployee();
      break;
    case 'Update an employee role':
      await changeEmployeeRole();
      break;
    case 'Exit':
      console.log('Goodbye!');
      return; // Exit the function to stop the program
  }

  // Call the main menu again to allow another action
  mainMenu();
};

// Start the application
mainMenu();
