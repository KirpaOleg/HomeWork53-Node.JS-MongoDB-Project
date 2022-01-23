const {
  createStudent,
  getAllStudents,
  deleteStudentById,
  getStudentById,
  updateStudentById,
  getCountAllClass,
  getStudentByClass,
  addMark,
} = require('../model/students');

const students = {
  getAllStudents: async () => {
    return await getAllStudents();
  },
  deleteStudent: async (req) => {
    await deleteStudentById(req.params.id);
  },
  createStudent: async (obj) => {
    await createStudent(obj);
  },
  getStudentById: async (id) => {
    return await getStudentById(id);
  } ,
  updateStudentById: async (obj) => {
    await updateStudentById(obj);
  },
  getCountAllClass: async () => {
    const countArr = await getCountAllClass(['Math', 'Filology', 'Nature']);
    const counterObj = {
      classMath: countArr[0],
      classFilology: countArr[1],
      classNature: countArr[2],
      classAll: countArr.reduce((acc, curr) => {return acc + curr}, 0),
      marks: 4,
    }
    return counterObj;
  },
  getStudentByClass: async (req) => { 
    return await getStudentByClass(req.class);
  },
  addMark: async (req) => {
    return await addMark(req);
  }
};

module.exports = students;
