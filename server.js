const inquirer = require('inquirer')
const fs = require('fs');
const express = require('express');
//const mysql = require("mysql");
// Import and require mysql2
const mysql = require('mysql2');
//const { debugPort, mainModule } = require('process');
const PORT = process.env.PORT || 3001;
const app = express();
require('console.table');

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root#123',
      database: 'company'
    },
    console.log('Connected to the company database.')
  );



  db.connect(function (err) {
    if (err) {
        console.log("unable to connect to db")
    }
    db.query('SELECT * FROM employees', (err, res) => {

      if (err) {
        console.log(err);
      }
      console.table(res);
    })

    promptQuestions();
  });

  function promptQuestions() {
    inquirer.prompt(
      { 
      type: 'checkbox',
      name: 'dbOptions',
      message: 'What would you like to do?',
      choices: ['View All Employees', 
                'View All Employees by Department', 
                'View all Employees By Manager' ,
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'Stop']
     }).then(function (res) {
        main(res.dbOptions)
     })
    
    }

  function main(choice) {
    switch (choice) {
      case 'View All Employees':
          viewAllEmployees();
      break;
      case 'View All Employees by Department':
         viewAllEmplDepartment();
      break;
      case 'View all Employees By Manager':
        viewAllEmplManager();
      break;
      case 'Add Employee':
        addEmpl();
      break;
      case 'Remove Employee':
        removeEmpl();
      break;
      case 'View All Departments':
        allDept();
      break;
      case 'Update Employee Role':
        updateEmplRole();
      break;
      case 'Update Employee Manager':
        updateEmplManager();
      break;
      case 'Stop':
      end();
    }
  }
  
function viewAllEmployees() {
  db.query('SELECT * FROM employees', (err, res) => {

    if (err) {
      console.log(err);
    }
    console.table(res);
   // console.log(rows);
    promptQuestions();
  })
}


const allDept = function () {
  const sql = `SELECT * FROM department;`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(result);
    form();
  });
};

// Ask the user for the employee's information.
function addEmpl() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the new Employee's First Name?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the new Employee's Last Name?",
        name: "last_name",
      },
      {
        type: "list",
        message: "What is the employee's job title?",
        name: "title",
      },
      {
        type: "list",
        message: "Who is the employee's manager?",
        name: "manager",
        choices: ['Ashley Rodriguez', 'John Doe', 'Sarah Lourd'],
      }
    ]).then(function (response) {
      // console.log(response)
      addEmployees(response)
    })
}

function addEmployees(data) {
  db.query('INSERT INTO employees (first_name, last_name, title, manager',
  {
    first_name: data.first_name,
    last_name: data.last_name,
    role_id: data.title,
    manager_id: data.manager
  }, function (error, res) {
    if (error) throw error;
   })
  };




function quitDb() {
  db.end();
  process.exit();
}

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });