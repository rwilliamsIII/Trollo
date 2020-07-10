const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// require('./passport')(passport);
const User = require('../models/User');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
	passport.use(
		new JwtStrategy(opts, (payload, done) => {
			User.findOne({ _id: payload.id })
				.then((user) => (user ? done(null, user) : done(null, false)))
				.catch((err) => done(err, false));
		})
	);
};
