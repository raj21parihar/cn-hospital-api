const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor_controller');

// Required Routes
// - POST	/doctors/register → with username and password
// - POST	/doctors/login → returns the JWT to be used

router.post('/register', doctorController.register);
router.post('/login', doctorController.login);

module.exports = router;
