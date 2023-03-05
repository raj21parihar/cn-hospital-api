const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/mongoose');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
const passport = require('passport');
const passportjwt = require('./config/passport-jwt');
app.use('/', require('./routes'));

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err, 'Error while running server !');
    }
    console.log('Server running on port ', process.env.PORT);
    return;
});
