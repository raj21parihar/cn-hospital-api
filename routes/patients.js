const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient_controller');
const passport = require('passport');

// Required Routes
// - POST	/patients/register (authenticated)
// - POST	/patients/:id/create_report (authenticated)
// - POST	/patients/:id/all_reports → List all the reports of a patient oldest to latest

router.post(
    '/register',
    passport.authenticate('jwt', { session: false }),
    patientController.register
);
router.post(
    '/:id/create_report',
    passport.authenticate('jwt', { session: false }),
    patientController.createReport
);
router.post('/:id/all_reports', patientController.reportByPatient);

module.exports = router;
