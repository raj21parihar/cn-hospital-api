const Doctor = require('../models/doctor');

module.exports.register = async function (req, res) {
    try {
        let user = await Doctor.findOne({ username: req.body.username });
        if (user) {
            return res.status(200).send({
                isRegistered: false,
                message: 'User already exist',
            });
        }

        let newUser = await Doctor.create({
            username: req.body.username,
            name: req.body.name ? req.body.name : req.body.username,
            password: req.body.password,
        });

        if (newUser) {
            return res.status(200).send({
                isRegistered: true,
                message: 'User registered',
            });
        }
    } catch (err) {
        return res.status(500).send({
            isRegistered: false,
            message: 'Internal Server Error',
        });
    }
};

module.exports.login = async function (req, res) {
    try {
        let user = await Doctor.findOne({
            username: req.body.username,
            password: req.body.password,
        });
        if (user) {
            return res.status(200).send({
                isAuthenticated: true,
                token: 'TEST',
                message: 'Loggedin succesfully',
            });
        } else {
            return res.status(200).send({
                isAuthenticated: false,
                token: '',
                message: 'Invalid credentials',
            });
        }
    } catch (err) {
        return res.status(500).send({
            isAuthenticated: false,
            token: '',
            message: 'Internal Server Error',
        });
    }
};
