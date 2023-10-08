const fs = require('fs');
const { promisify } = require('util');

async function readDatabase(filePath) {
  const readFileAsync = promisify(fs.readFile);
  const data = await readFileAsync(filePath, 'utf-8');
  const lines = data.split('\n');
  const result = { swe: [], cs: [] };
  const students = [];
  for (let i = 1; i < lines.length; i += 1) {
    const row = lines[i].split(',');
    const student = {
      first_name: row[0],
      last_name: row[1],
      age: row[2],
      field: row[3],
    };
    students.push(student);
  }
  const csStudents = students.filter((st) => st.field === 'CS');
  const sweStudents = students.filter((s) => s.field === 'SWE');
  const namesForCsStudents = [];
  csStudents.map((s) => {
    if (namesForCsStudents.length !== 0) {
      return namesForCsStudents.push(` ${s.first_name}`);
    }
    return namesForCsStudents.push(s.first_name);
  });
  const namesForSweStudents = [];
  sweStudents.map((s) => {
    if (namesForSweStudents.length !== 0) {
      return namesForSweStudents.push(` ${s.first_name}`);
    }
    return namesForSweStudents.push(s.first_name);
  });
  result.swe = namesForSweStudents;
  result.cs = namesForCsStudents;
  return result;
}

module.exports = { readDatabase };
