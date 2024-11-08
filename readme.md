# Employee Tracker

A command-line application for managing a company's employee database using Node.js, Inquirer, and PostgreSQL. This application allows users to view and manage departments, roles, and employees, facilitating better organization and planning within a business.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Seeding the Database](#seeding-the-database)

## Features

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Update employee roles.
- Displays data in a user-friendly format.

## Installation

1. Clone this repository:

```bash
   git clone https://github.com/
```

2. Navigate to the project directory:

```bash
cd Employee-Tracker 
```

3. Install the necessary dependencies:

```bash
npm install
```
4. Ensure you have PostgreSQL installed and running.

5. Create a database and set up the schema by running:


```sql
\i schema.sql
```

## Usage
1. Start the application:

``` bash
node index.js
```

2. Follow the prompts to manage your employee database.

3. To view the available options, select one from the command line menu.

## Database Schema

The database consists of three tables: departments, roles, and employees.

Departments
- id: Serial Primary Key
- name: Unique name of the department
# Roles
- id: Serial Primary Key
- title: Job title
- salary: Salary for the role
- department_id: Foreign key referencing departments
# Employees
- id: Serial Primary Key
- first_name: Employee's first name
- last_name: Employee's last name
- role_id: Foreign key referencing roles
- manager_id: Foreign key referencing employees (for the manager)

## Seeding the Database

To seed the database with initial data, run the following command:

```bash
node seed/seed.js
```
