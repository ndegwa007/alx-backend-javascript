const express = require('express');

const router = express.Router();

const appcontroller = require('../controllers/AppController');
const studentcontroller = require('../controllers/StudentsController');

router.get('/', appcontroller.getHomepage);
router.get('/students', studentcontroller.getAllStudents);
router.get('/students/:major', studentcontroller.getAllStudentsByMajor);

module.exports = router;
