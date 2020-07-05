// Requiring our Todo model
const router = require('express').Router();
const User = require('../models/user');
const Trollo = require('../models/trollo');

// Routes
router.get('/users', (req, res) => {
	// Use a regular expression to search titles for req.query.q
	// using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
	User.find({})
		.sort({ date: -1 })
		.then((user) => res.json(user))
		.catch((err) => res.status(422).json(err));
	console.log(user);
});

router.get('/trollos', (req, res) => {
    Trollo.find({})
        .sort({date: -1})
        .then((trollo) => res.json(trollo))
        .catch((err) => res.status(422).json(err));
});

module.exports = router;
