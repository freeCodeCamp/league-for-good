const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: { unique: true },
	},
	email: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		required: true,
	},
	
	googleId: {
		type: String,
	}},
	{
		collection: 'users',
	}
);

module.exports = mongoose.model('user', UserSchema);