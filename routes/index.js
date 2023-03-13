const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));
router.use('/reports', require('./reportes'));

module.exports = router;
