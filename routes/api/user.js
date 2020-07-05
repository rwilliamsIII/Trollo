module.exports = function (app) {
	const bcrypt = require('bcryptjs');
	const jwt = require('jsonwebtoken');
	const passport = require('passport');
	const keys = require('../../config/keys');
	const db = require('../../models/Users');

	app.get(
		'api/user/test',
		// passport.authenticate('jwt', { session: false }),
		(req, res) => {
			res.json({
				success: true,
				msg: 'Testing endpoint works',
			});
		}
	);

	app.post('/api/user', (req, res) => {
		db.user
			.findOne({
				Where: {
					email: req.body.email,
				},
			})
			.then((user) => {
				if (user) {
					return res.status(400).json({
						email: 'this email already taken',
					});
				} else {
					const newUser = {
						name: req.body.name,
						email: req.body.email,
						password: req.body.password,
					};
					bcrypt.genSalt(10, (err, salt) => {
						bcrypt.hash(newUser.password, salt, (err, hash) => {
							if (err) throw err;
							newUser.password = hash;

							db.user
								.create(newUser)
								.then((user) => {
									res.status(200).json({
										message: 'user created',
										userCreated: true,
									});
								})
								.catch((err) => console.log(err));
						});
					});
				}
			});
	});
};
