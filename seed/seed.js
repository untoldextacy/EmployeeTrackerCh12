const pool = require('../db/connection');
const dbQueries = require('../models/dbQueries');

const seedDatabase = async () => {
    try {
        // Insert departments
        await dbQueries.addDepartment('Engineering');
        await dbQueries.addDepartment('Sales');
        await dbQueries.addDepartment('Marketing');

        // Insert roles
        await dbQueries.addRole('Software Engineer', 70000, 1); // Engineering department
        await dbQueries.addRole('Sales Associate', 50000, 2);   // Sales department
        await dbQueries.addRole('Marketing Manager', 60000, 3); // Marketing department

        // Insert employees
        await dbQueries.addEmployee('Alice', 'Johnson', 1, null); // Alice reports to no one (no manager)
        await dbQueries.addEmployee('Bob', 'Smith', 2, 1);       // Bob reports to Alice
        await dbQueries.addEmployee('Charlie', 'Brown', 3, 1);   // Charlie reports to Alice

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        pool.end(); // Close the database connection
    }
};

seedDatabase();
