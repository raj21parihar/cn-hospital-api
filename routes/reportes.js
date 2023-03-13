const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report_controller');

// Required Routes
// - POST	/reports/:status  → List all the reports of all the patients filtered by a specific status

router.post('/:status', reportController.reportByStatus);

module.exports = router;
