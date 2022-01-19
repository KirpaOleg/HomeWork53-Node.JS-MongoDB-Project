const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const students = require('../controller/students');

router.get('/', async (req, res) => {
  const classMath = await students.getCountClass('Math');
  const classFilology = await students.getCountClass('Filology');
  const classNature = await students.getCountClass('Nature');
  const classAll = classMath + classFilology + classNature;
  res.render('class', {
    classMath,
    classFilology,
    classNature,
    classAll,
  });
});

router.get('/:class', async (req, res) => {
  const student = await students.getStudentByClass(req.params);
  console.log(student);
  // res.render('classCreate');
});

module.exports = router;
