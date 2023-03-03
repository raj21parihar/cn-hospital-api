const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor_controller');

router.post('/register', doctorController.register);
router.post('/login', doctorController.login);

module.exports = router;
// -	Required Routes
// -	/doctors/register → with username and password
// -	/doctors/login → returns the JWT to be used
// -	/patients/register
// -	/patients/:id/create_report
// -	/patients/:id/all_reports → List all the reports of a patient oldest to latest
// -	/reports/:status  → List all the reports of all the patients filtered by a specific status
