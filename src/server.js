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


app.get('/sql', async (req, res) => {
  let result;

  try {
    result = await dbExecute(req.query.sql);
  }
  catch (e) {
    console.log(e);
    result = {
      rows: []
    };
  }

  console.log(result.rows);
  
  res.send(result.rows);
});


app.use('/', express.static('./build'));

// the following line must be defined after all of the other routes are defined
app.use('/*', express.static('./build'));
