const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const db = require('../models/User');
const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
	passport.use(
		new JwtStrategy(options, (jwtPayload, done) => {
			User.findOne({
				where: {
					id: jwtPayload.id,
				},
			})
				.then((user) => {
					if (user) {
						return done(null, user);
					}
					return done(null, false);
				})
				.catch((err) => console.log(err));
		})
	);
};
