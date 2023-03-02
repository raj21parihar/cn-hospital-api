const Doctor = require('../models/doctor');

module.exports.register = function (req, res) {
    console.log(req.body);
    res.status(200).send(req.body);
};
