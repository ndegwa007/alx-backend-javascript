#!/usr/bin/node

const fs = require('fs');
const { promisify } = require('util');

async function countStudents(path) {
  // read file asyncronously
  const readFileAsync = promisify(fs.readFile);
  const data = await readFileAsync(path, { encoding: 'utf-8' });
  if (data !== null) {
    const lines = data.split('\n');
    const numberOfStudents = lines.length - 2;
    console.log(`Number of students: ${numberOfStudents}`);
    const listCS = [];
    const listSWE = [];
    let csStudents = 0;
    let sweStudents = 0;
    for (let i = 1; i < lines.length; i += 1) {
      const row = lines[i].split(',');
      if (row.length >= 4 && row[3] && row[3].trim() !== '') {
        const field = row[3].trim();
        if (field === 'CS') {
          csStudents += 1;
          if (listCS.length !== 0) {
            listCS.push(` ${row[0]}`);
          } else {
            listCS.push(row[0]);
          }
        } else if (field === 'SWE') {
          sweStudents += 1;
          if (listSWE.length !== 0) {
            listSWE.push(` ${row[0]}`);
          } else {
            listSWE.push(row[0]);
          }
        } else {
          console.log('No students found');
        }
      }
    }
    console.log(`Number of students in CS: ${csStudents}. List: ${listCS}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${listSWE}`);
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
