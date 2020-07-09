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

// Routes to todos

router.get('/api/trollos', (req, res) => {
    Trollo.find({})
        .sort({date: -1})
        .then((trollo) => res.json(trollo))
        .catch((err) => res.status(422).json(err));
});

router.get('/api/inprogress', (req, res) => {
    Trollo.find({inProgress: 'true'})
        .sort({ date: -1 })
        .then((trollo) => res.json(trollo))
        .catch((err) => res.status(422).json(err));
});

router.get('/api/completed', (req, res) => {
    Trollo.find({completed: 'true'})
        .sort({date: -1})
        .then((trollo) => res.json(trollo))
        .catch((err) => res.status(422).json(err));
});

router.post('/api/trollos', (req, res) => {
    const newTrollo = {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate
    }
    Trollo.create(newTrollo)
    .then(dbTrollo => {
    console.log('Todo Created!');
    res.json(dbTrollo);
    })
    .catch(err => {
        res.status(422).json(err);
    });
});

module.exports = router;
