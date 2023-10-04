#!/usr/bin/node

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Express server started on http://localhost:${port}`);
});

module.exports = app;
