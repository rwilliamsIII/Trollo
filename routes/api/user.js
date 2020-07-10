module.exports = (app) => {
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
	});

	app.post('/api/user/login', async (req, res) => {
		const { email, password } = req.body;

		const userExists = await User.findOne({ email });
		if (!userExists) return res.status(400).send('Email/password incorrect.');

		const match = await bcrypt.compare(password, userExists.password);
		if (!match) return res.status(400).send('Email/password incorrect.');

		const payload = {
			id: userExists._id,
			email: userExists.email,
		};

		const token = await jwt.sign(payload, keys.secretOrKey, {
			expiresIn: '1hr',
		});

		res.status(200).send({ token: `Bearer ${token}` });
	});

	app.get(
		'/api/user/validate',
		passport.authenticate('jwt', { session: false }),
		(req, res) => {
			res.status(200).send('Authorized.');
		}
	);

	// app.put(
	// 	'api/user/',
	// 	passport.authenticate('jwt', { session: false }),
	// 	(req, res) => {
	// 		console.log(req.user);
	// 		User.update(
	// 			{
	// 				name: req.body.name,
	// 				email: req.body.email,
	// 			},
	// 			{
	// 				where: {
	// 					id: req.user.id,
	// 				},
	// 			}
	// 		).then(() => {
	// 			User.findById(req.user.id)
	// 				.then((user) => {
	// 					res.status(200),
	// 						json({
	// 							email: user.email,
	// 							name: user.name,
	// 							message: 'User updated',
	// 							userUpdated: true,
	// 						});
	// 				})
	// 				.catch((err) => {
	// 					res.status(500).json(err);
	// 				});
	// 		});
	// 	}
	// );
};
