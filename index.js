const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});



const port = 3000;

app.get('/', (req, res) => {
  
  const newName = `FullCyle ${Math.floor(Math.random() * 1000)}`; 
  const insertQuery = `INSERT INTO people (name) VALUES ('${newName}')`;

  connection.query(insertQuery, (error, results) => {
    if (error) {
      res.status(500).send('Error inserting data into database');
    } else {
      const selectQuery = 'SELECT * FROM people';
      connection.query(selectQuery, (error, results) => {
        if (error) {
          res.status(500).send('Error fetching data from database');
        } else {
          let namesList = '<h1>Full Cycle Rocks!</h1><ul>';
          results.forEach(result => {
            namesList += `<li>${result.name}</li>`;
          });
          namesList += '</ul>';
          res.send(namesList);
        }
      });
    }
  });

});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});