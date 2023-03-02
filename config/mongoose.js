const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cn_doctor_api');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to Database'));
db.once('open', function () {
    console.log('Connected to database!');
});
