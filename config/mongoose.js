//Setup Mongoose
const mongoose = require('mongoose');
require('dotenv').config();

//reading database url form env file
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to Database'));
db.once('open', function () {
    console.log('Connected to database!');
});
