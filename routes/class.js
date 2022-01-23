const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const students = require('../controller/students');

router.get('/', async (req, res) => {
  const classMath = await students.getCountAllClass();
  res.render('class', classMath);
});

router.get('/:class', async (req, res) => {
  const studentsList = await students.getStudentByClass(req.params);
  res.render('classCreate', {studentsList: studentsList});
});

router.get('/student/:id', async (req, res, next) => {
  const student = await students.getStudentById(req.params.id);
  res.render('student', { student });
});

router.post('/student/:id', upload.none(), async (req, res) => {
  // addMark({id: '61e443c6b0c2b2498e8f7079', mark: 4})
  await students.addMark(req.body.marks);
  // res.send('addMark is ok');
});

module.exports = router;
