const studentController = require('../controllers/studentController');

const express = require('express');
const router = express.Router();


router.post('/add-students', studentController.createStudent);
router.get('/students-list', studentController.getStudents);
router.get('/student/:id', studentController.getStudentById);
router.put('/update-student/:id', studentController.updateStudentById);
router.delete('/delete-student/:id', studentController.deleteStudentById);



module.exports = router;