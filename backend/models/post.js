const mongoose = require('mongoose');

const weightSchema = mongoose.Schema({
	date: String,
	weight: String
});

module.exports = mongoose.model('CurrentWeight', weightSchema);
