const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report_controller');

router.post('/:status', reportController.reportByStatus);

module.exports = router;

// // -	Required Routes
// // -	/doctors/register → with username and password
// // -	/doctors/login → returns the JWT to be used
// // -	/patients/register
// // -	/patients/:id/create_report
// // -	/patients/:id/all_reports → List all the reports of a patient oldest to latest
// // -	/reports/:status  → List all the reports of all the patients filtered by a specific status
