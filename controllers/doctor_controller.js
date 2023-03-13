// Doctor controller -  doctor related functionality
const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

//Fucntion to register a new doctor, if doctor not exist in system
//Input:username, name, passowrd

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

//Fucntion to login existing doctor doctor, if crdentials provided are correct it return JWT to be used for further use
//Input:username, passowrd
module.exports.login = async function (req, res) {
    try {
        let user = await Doctor.findOne({
            username: req.body.username,
            password: req.body.password,
        });
        if (user) {
            return res.status(200).send({
                isAuthenticated: true,
                token: jwt.sign(user.toJSON(), process.env.JWTKEY, {
                    expiresIn: '1000000',
                }),
                message: 'Sign in successful',
            });
        } else {
            return res.status(422).send({
                isAuthenticated: false,
                message: 'Invalid credentials',
            });
        }
    } catch (err) {
        console.log('Error : ', err);
        return res.status(500).send({
            isAuthenticated: false,
            message: 'Internal Server Error',
        });
    }
};
