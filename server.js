const inquirer = require('inquirer')
const fs = require('fs');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();


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
    if (err) throw err;

    promptQuestions();
  });

  function promptQuestions() {
    inquirer.prompt()([
      { type: 'checkbox',
      name: 'dbOptions',
      message: 'What would you like to do?',
      choices: ['View All Employees', 
      'View All Employees by Department', 
      'View all Employees By Manager' ,
      'Add Employee',
      'Remove Employee',
      'Update Employee Role',
      'Update Employee Manager']
    } 
    ])
  }
  

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


  db.query(`SELECT * FROM employees`, (err, rows) => {
    console.log(rows);
  });

  // GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
  });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });