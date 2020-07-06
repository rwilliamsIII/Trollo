const mongoose = require('mongoose');

const TrolloSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		unique: true,
	},
	dueDate: {
		type: String,
		required: true,
    },
    inProgress: {
        type: Boolean,
        default: false,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Trollo', TrolloSchema);