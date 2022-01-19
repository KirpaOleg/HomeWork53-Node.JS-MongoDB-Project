const {
  createStudent,
  getAllStudents,
  deleteStudentById,
  getStudentById,
  updateStudentById,
  getCountClass,
  getStudentByClass,
} = require('../model/students');

const students = {
  getAllStudents: async () => await getAllStudents(),
  deleteStudent: async (req) => {
    await deleteStudentById(req.params.id);
  },
  createStudent: async (obj) => {
    await createStudent(obj);
  },
  getStudentById: async (id) => await getStudentById(id),
  updateStudentById: async (obj) => {
    await updateStudentById(obj);
  },
  getCountClass: async (obj) => await getCountClass(obj),
  getStudentByClass: async (req) => {
    await getStudentByClass(req.params);
  },
};

module.exports = students;
