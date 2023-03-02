const { truncate } = require('fs');
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
