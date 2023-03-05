const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWTKEY,
};

passport.use(
    new JWTStrategy(opts, async function (jwtPayLoad, done) {
        try {
            let user = await Doctor.findById(jwtPayLoad._id);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return console.log('Error in finding user');
        }
    })
);

module.exports = passport;
