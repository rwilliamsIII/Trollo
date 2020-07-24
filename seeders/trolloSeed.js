const mongoose = require('mongoose');
// const db = require('../models');
const Trollo = require('../models/Trollo');

mongoose.connect('mongodb://localhost/trollo', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let trolloSeed = [
	{
		title: 'Login',
		description: 'Login to the Trollo app!',
		dueDate: '7/12/20',
		inProgress: 'false',
		completed: 'true',
	},
	{
		title: 'Take a vacation!',
		description: 'Go on vacation after the bootcamp!',
		dueDate: '7/26/20',
		inProgress: 'false',
		completed: 'false',
	},
	{
		title: 'Finish this project',
		description: 'Complete the bootcamp!',
		dueDate: '7/25/20',
		inProgress: 'true',
		completed: 'false',
	},
];

Trollo.deleteMany({})
	.then(() => Trollo.collection.insertMany(trolloSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
