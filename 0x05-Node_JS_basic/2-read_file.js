#!/usr/bin/node

const fs = require('fs');

function countStudents (path) {
  // try and catch
  let numberOfStudents = 0;
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    numberOfStudents = lines.length - 2;
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
          listCS.push(' ' + row[0]);
        } else if (field === 'SWE') {
          sweStudents += 1;
          listSWE.push(' ' + row[0]);
        } else {
          console.log('No students found');
        }
      }
    }
    console.log(`Number of students in CS: ${csStudents}. List: ${listCS}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${listSWE}`);
  } catch (error) {
    // throw Error('Cannot load the database');
    console.log(`Error: ${error.message}`);
  }
}

module.exports = countStudents;
