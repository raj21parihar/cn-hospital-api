// initlizing express and app
const express = require('express');
const app = express();

//importing .env, db and passport config
require('dotenv').config();
const db = require('./config/mongoose');
const passport = require('passport');
const passportjwt = require('./config/passport-jwt');

//using json and urlencoded middlware to parse the json and submitted form
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//initilizing passport
app.use(passport.initialize());

// using the routes to user Route module for routing
app.use('/', require('./routes'));

//listing to request
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err, 'Error while running server !');
    }
    console.log('Server running on port ', process.env.PORT);
    return;
});
