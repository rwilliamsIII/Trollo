const mongoose = require('mongoose');
// const db = require('../models');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/trollo', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let userSeed = [
	{
		name: 'dev',
		email: 'dev@trollo.com',
		password: 'trollo',
	},
];

User.deleteMany({})
	.then(() => User.collection.insertMany(userSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
