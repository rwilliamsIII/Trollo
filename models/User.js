const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	todos: [{
		title: String,
		description: String,
		dueDate: String,
		inProgress: Boolean,
		completed: Boolean
		}]
	}, {_id: true});

module.exports = mongoose.model('User', UserSchema);
