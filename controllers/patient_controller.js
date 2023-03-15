// Parient Conreollers
const Patient = require('../models/patient');
const Report = require('../models/report');
var mongoose = require('mongoose');

//Fucntion to registered a new patient by mobile number, if patient exist return the patients details.
//Input: phone, name(optional), age(optional), gender(optional)
module.exports.register = async function (req, res) {
    try {
        let patient = await Patient.findOne({ phone: req.body.phone });
        if (patient) {
            patient.message = 'User Already exist';
            return res.status(200).send(patient);
        }

        let newPatient = await Patient.create(req.body);
        if (newPatient) {
            return res.status(200).send({
                isRegistered: true,
                message: 'User registered',
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            isRegistered: false,
            message: 'Internal Server Error',
        });
    }
};

//Fucntion to create report pf a patient
//Input: doctor Id, Patient Id, status, date(default = todays date)
module.exports.createReport = async function (req, res) {
    try {
        let report = await Report.create({
            doctor: req.body.doctor,
            patient: req.params.id,
            status: req.body.status,
            date: req.body.date ? req.body.date : Date.now(),
        });
        if (report) {
            return res.status(200).send({
                isReportCreated: true,
                message: 'Report created succesfully',
            });
        }
    } catch (err) {
        return res.status(500).send({
            err: err,
            isReportCreated: false,
            message: 'Internal Server Error',
        });
    }
};

//Fucntion to get all the report of a patient
//Input: Patient Id
module.exports.reportByPatient = async function (req, res) {
    try {
        let report = await Report.find({ patient: req.params.id })
            .sort('-date')
            .exec();
        return res.status(200).send({
            data: report,
            message: 'Success',
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: 'Internal Server Error',
        });
    }
};
