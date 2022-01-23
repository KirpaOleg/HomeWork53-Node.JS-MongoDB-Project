const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const authController = require('../controller/auth')

router.get('/registration', authController.getRegistrationPage);

router.post('/registration', upload.none(), authController.registration);

router.post('/login', upload.none(), authController.login);

module.exports = router;
