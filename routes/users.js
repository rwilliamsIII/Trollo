const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');
// const normalize = require('normalize-url');
const User = require('../models/Users');

// @route    GET api/users
// @desc     Register user
// @access   Public

router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],

	// check to see if user exits
	// encrypt password
	// return jsonwebtoken
	//User.findOne().then.catch
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			user = new User({
				name,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			res.send('User registered');
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);
module.exports = router;