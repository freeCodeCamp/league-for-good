const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	avatar: {
		type: String
	},
	googleId: String
},
	{
		collection: 'users'
	}
);

module.exports = mongoose.model('user', UserSchema);
