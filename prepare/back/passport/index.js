const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id); //쿠키랑 묶어줄 이메일만 저장
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findOne({ where: { id }});
            done(null, user); // req.user
        } catch(error) {
            console.error(error);
            done(error);
        }
    });

    local();
}