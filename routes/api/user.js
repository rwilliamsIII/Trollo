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
		app.get(
			'/api/user/validate',
			passport.authenticate('jwt', { session: false }),
			(req, res) => {
				res.status(200).send('Authorized.');
			}
		);

	app.post(
		'/api/trollos',
		passport.authenticate('jwt', { session: false }),
		(req, res) => {
			console.log(req.user);
			User.updateOne(
				{ _id: req.user._id },
				{
					$push: {
						todos: {
							title: req.body.title,
							description: req.body.description,
							dueDate: req.body.dueDate,
							inProgress: true,
							completed: false,
						},
					},
				}
			)
				.then((updated) => res.json({ msg: 'User successfully updated' }))
				.catch((error) => res.json({ err: error }));
		}
	);

	app.put(
		'/api/trollos/:todoId', 
		passport.authenticate('jwt', {session: false}),
		(req, res) => {
    		User.updateOne({_id: req.user._id, 'todos._id': req.params.todoId}, {$set: {
    		// 'todos.$.title': req.body.title,
			// 'todos.$.description': req.body.description,
    		'todos.$.inProgress': false,
    		'todos.$.completed': true }}).then(updated => res.json({msg: 'Todo successfully updated'})).catch(error => res.json({err: error}));
	});

	app.get(
		'/api/user',
		passport.authenticate('jwt', { session: false }),
		(req, res) => {
			console.log(req.user);
			User.findOne({ _id: req.user._id })
				.then((user) => {
					if (user) {
						res.status(200).json(user);
					}
				})
				.catch((err) => console.log(err));
		}
	);
};
