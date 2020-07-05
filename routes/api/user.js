module.exports = function (app) {
	const bcrypt = require('bcryptjs');
	const jwt = require('jsonwebtoken');
	const passport = require('passport');
	const keys = require('../../config/keys');
	const User = require('../../models/User');

	app.get(
		'/api/user/test/',
		// passport.authenticate('jwt', { session: false }),
		(req, res) => {
			res.json({
				success: true,
				msg: 'Testing endpoint works',
			});
		}
	);

	app.post('/api/user', (req, res) => {
		// const { email, password, name } = req.body;
		console.log(req.body);
		User.findOne({
			Where: {
				email: req.body.email,
			},
		}).then((user) => {
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

						User.create(newUser)
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

		app.post('/api/user/login/', (req, res) => {
			const { email, password } = req.body;

			User.findOne({ where: { email } }).then((user) => {
				if (!user) {
					return res.status(404).json({ user: 'User not found' });
				}
				let currentUser = user.get();

				//compare passwords
				bcrypt.compare(password, currentUser.password).then((isMatch) => {
					if (isMatch) {
						User.findOne({
							where: { id: user.id },
						})
							.then((user) => {
								const payload = {
									id: user.id,
									email: user.email,
									name: user.name,
								};

								jwt.sign(
									payload,
									keys.secretOrKey,
									{ expiresIn: 3600 * 12 },
									(err, token) => {
										res.json({
											...payload,
											success: true,
											token: `Bearer ${token}`,
										});
									}
								);
							})
							.catch((err) => console.log(error));
					} else {
						return res.status(400).json({
							password: 'User password could not be validated',
						});
					}
				});
			});
		});
	});

	app.put(
		'api/user/',
		passport.authenticate('jwt', { session: false }),
		(req, res) => {
			console.log(req.user);
			User.update(
				{
					name: req.body.name,
					email: req.body.email,
				},
				{
					where: {
						id: req.user.id,
					},
				}
			).then(() => {
				User.findById(req.user.id)
					.then((user) => {
						res.status(200),
							json({
								email: user.email,
								name: user.name,
								message: 'User updated',
								userUpdated: true,
							});
					})
					.catch((err) => {
						res.status(500).json(err);
					});
			});
		}
	);
};
