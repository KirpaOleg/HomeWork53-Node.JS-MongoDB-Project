const Role = require('../model/schemas/role')
const User = require('../model/schemas/user')
const bcrypt = require('bcrypt')

const authController = {
  registration: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const newUser = await User.findOne({username})
      if (newUser) {
        return res.send('Пользователь с таким именем уже существует')
      } 
      const hashPassword = bcrypt.hashSync(password, 10);
      const userRole = await Role.findOne({value: 'ADMIN'})
      const user = new User({ username, password: hashPassword, roles: [userRole.value]});
      user.save();
      return res.send('Пользователь создался')
    } catch (e) {
      console.log(e);
      res.send('Registration ERROR')
    }
  },
  login: async (req, res, next) => {
 
  },
  getRegistrationPage: async (req, res, next) => {
    res.render('registration')
  },
  getLoginPage: async (req, res, next) => {
 
  },
}

// const creteRole = () => {
//   const adminRole = new Role ({value: 'ADMIN'});
//   const nurseRole = new Role ({value: 'NURSE'});
//   const userRole = new Role ({value: 'USER'});
//   adminRole.save();
//   nurseRole.save();
//   userRole.save();
//   console.log('All ok!');
// } 
// creteRole()

module.exports = authController;
