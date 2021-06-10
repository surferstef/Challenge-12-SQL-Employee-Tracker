const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'root#123',
      database: 'election'
    },
    console.log('Connected to the election database.')
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