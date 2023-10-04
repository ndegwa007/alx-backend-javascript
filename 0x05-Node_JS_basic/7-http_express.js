#!/usr/bin/node
const countStudents = require('./3-read_file_async');
const express = require('express');
const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const data = await countStudents(database);
  try {
    if (data) {
      const dataFormat = data.join('\n');
      res.send(`This is the list of our students\n${dataFormat}`);
    } else {
      res.status(500).send('No data found!');
    }
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Express server running on ${port}`);
});

module.exports = app;
