const { readDatabase } = require('../utils');

class StudentController {
  static async getAllStudents(request, response) {
    response.status(200);

    const db = process.argv[process.argv.length - 1];
    if (!db) {
      response.status(500).send('Cannot load the database');
    }
    const { swe, cs } = await readDatabase(db);
    response.send(`This is the list of our students\nNumber of students in CS: ${cs.length}. List: ${cs}\nNumber of students in SWE: ${swe.length}. List: ${swe}`);
  }

  static async getAllStudentsByMajor(request, response) {
    response.status(200);
    const db = process.argv[process.argv.length - 1];
    if (!db) {
      response.status(500).send('Cannot load the database');
    }
    const { swe, cs } = await readDatabase(db);
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    if (major === 'CS') {
      response.send(`List: ${cs}`);
    } else if (major === 'SWE') {
      response.send(`List: ${swe}`);
    }
  }
}

module.exports = StudentController;
