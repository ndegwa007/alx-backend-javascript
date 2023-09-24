const http = require('http');
const fs = require('fs/promises');

async function countStudents(dataFile) {
  try {
    // Read the data file and parse its content
    const data = await fs.readFile(dataFile, 'utf8');
    const lines = data.trim().split('\n');

    // Initialize an empty list to store student objects
    const students = [];

    // Parse headers to determine the field index
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');

    // Parse each line and create student objects
    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      const student = {
        firstname: values[0],
        lastname: values[1],
        age: values[2],
        field: values[fieldIndex],
      };
      students.push(student);
    }

    return students;
  } catch (error) {
    throw new Error('Error reading and parsing data:', error);
  }
}

// Define the hostname and port where your server will listen
const hostname = '127.0.0.1';
const port = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header

  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    (async () => {
      const students = await countStudents('database.csv');

      const csStudents = students.filter((student) => student.field === 'CS');
      const sweStudents = students.filter((student) => student.field === 'SWE');

      const text = `This is the list of our students
    Number of students: ${students.length}
    Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student.firstname).join(', ')}
    Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student.firstname).join(', ')}`;

      res.end(text);
    })();
  }
});

// Start the server and have it listen on the specified hostname and port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
