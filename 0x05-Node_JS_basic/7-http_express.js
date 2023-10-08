#!/usr/bin/node
const { promisify } = require('util');
const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;

async function countStudents (dbFile) {
  const students = [];

  // readfile
  try {
    const readFileAsync = promisify(fs.readFile);
    const data = await readFileAsync(dbFile, 'utf-8');
    // get data per line
    const lines = data.trim().split('\n');
    // create student object with data
    for (let i = 1; i < lines.length; i += 1) {
      const row = lines[i].split(',');
      const student = {
        first_name: row[0],
        last_name: row[1],
        age: row[2],
        field: row[3]
      };
      // push data to a list
      students.push(student);
    }
  } catch (error) { console.log(error); }
  return students;
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const database = process.argv[2];
  if (!database) {
    res.send('This is the list of our students\nCannot load the database');
  } else {
    const studentdata = await countStudents(database);
    const studentsCS = studentdata.filter((student) => student.field === 'CS');
    const studentSWE = studentdata.filter((student) => student.field === 'SWE');

    const text = `This is the list of our students\nNumber of students: ${studentdata.length}\nNumber of students in CS: ${studentsCS.length}. List: ${studentsCS.map((student) => student.first_name).join(', ')}\nNumber of students in SWE: ${studentSWE.length}. List: ${studentSWE.map((student) => student.first_name).join(', ')}`;

    res.send(text);
  }
});

app.listen(port, () => {
  console.log(`Express server running on ${port}`);
});

module.exports = app;
