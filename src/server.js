require('dotenv').config();
const express = require('express');
const path = require('path');
const { dbExecute } = require('./db');

const app = express();
const port = process?.env?.PORT || 5000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }))

app.listen(port, () => console.log(`Listening on port ${process?.env?.PORT || 5000}`));

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/manifest.json'));
});

app.use('/', express.static('./build'));
app.use('/*', express.static('./build'));

app.get('/sql', async (req, res) => {
  //const result = await dbExecute(req.query)
  const result = await dbExecute("SELECT * FROM passwords;");

  res.send(result.rows);
});