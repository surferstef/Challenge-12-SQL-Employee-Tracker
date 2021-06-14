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
  



app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


  db.query(`SELECT * FROM candidates`, (err, rows) => {
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