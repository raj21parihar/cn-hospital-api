const express = require('express');
const router = express.Router();
const friendController = require('../controllers/doctor_controller');

router.post('/register', friendController.register);
// route.post('/login', (req, res) => {
//     return res.send({ test: 'msg' });
// });
module.exports = router;
// -	Required Routes
// -	/doctors/register → with username and password
// -	/doctors/login → returns the JWT to be used
// -	/patients/register
// -	/patients/:id/create_report
// -	/patients/:id/all_reports → List all the reports of a patient oldest to latest
// -	/reports/:status  → List all the reports of all the patients filtered by a specific status
