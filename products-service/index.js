const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3003;

const db = mysql.createConnection({
    host: 'demo-rds.ccs2bkukboxm.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Amodh1234',
  database: 'demoo'
});

db.connect();

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (error, results) => {
    if (error) return res.status(500).send(error);
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Products service running on port ${PORT}`);
});
