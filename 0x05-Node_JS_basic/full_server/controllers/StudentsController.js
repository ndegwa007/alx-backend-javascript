const { readDatabase } = require('../utils');

class StudentController {
  static async getAllStudents (request, response) {
    const db = process.argv[process.argv.length - 1];
    if (!db) {
      response.status(500).send('Cannot load the database');
      return;
    }
    try {
      const { swe, cs } = await readDatabase(db);
      response.status(200).send(`This is the list of our students\nNumber of students in CS: ${cs.length}. List: ${cs}\nNumber of students in SWE: ${swe.length}. List: ${swe}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor (request, response) {
    const db = process.argv[process.argv.length - 1];
    if (!db) {
      response.status(500).send('Cannot load the database');
      return;
    }
    try {
      const { swe, cs } = await readDatabase(db);
      const { major } = request.params;
      if (major !== 'CS' && major !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
      }
      if (major === 'CS') {
        response.status(200).send(`List: ${cs}`);
      } else if (major === 'SWE') {
        response.status(200).send(`List: ${swe}`);
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentController;
