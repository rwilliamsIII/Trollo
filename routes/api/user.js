const User = require('../../models/User');

module.exports = (app) => {
	const bcrypt = require('bcryptjs');
	const jwt = require('jsonwebtoken');
	const passport = require('passport');
	const keys = require('../../config/keys');
	const User = require('../../models/User');

	app.post('/api/user/register', async (req, res) => {
		const { email, password, name } = req.body;

		const validateEmail = await User.findOne({ email });
		if (validateEmail) return res.status(400).send('Email exists.');

		const salt = await bcrypt.genSalt();
		const hash = await bcrypt.hash(password, salt);

		const newUser = new User({ name, email, password: hash });
		try {
			await newUser.save();
			res.status(200).send('User Created.');
		} catch (err) {
			res.status(400).send(error);
		}
	}),
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
		}),
		// app.get(
		// 	'/api/user',
		// 	passport.authenticate('jwt', { session: false }),
		// 	(req, res) => {
		// 		const userID = req.body._id;
		// 		const user = await User.findOne({ _id });
		// 		if (!user)
		// 		return res.status(200).send('user not found');
		// 	})
		// 		if (user) = await return res.json({
		// 		user: {
		// 			email: user.email,
		// 			name: user.name
		// 		},
		// 	})
		// 	.status(200);
		// }
		app.get(
			'/api/user/validate',
			passport.authenticate('jwt', { session: false }),
			(req, res) => {
				res.status(200).send('Authorized.');
			}
		);

	// 	app.get(
	// 		'/api/user/test',
	// 		passport.authenticate('jwt', { session: false }),
	// 		(req, res) => {
	// 			res.json({
	// 				success: true,
	// 				msg: 'Testing endpoint works',
	// 			});
	// 		}
	// 	);
};
