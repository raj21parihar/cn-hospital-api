const Report = require('../models/report');

module.exports.reportByStatus = async function (req, res) {
    try {
        let report = await Report.find({ status: req.params.status }).exec();
        return res.status(200).send({
            data: report,
            message: 'Success',
        });
    } catch (err) {
        return res.status(500).send({
            message: 'Internal Server Error',
        });
    }
};
