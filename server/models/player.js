/*
* Player model stores information about each player, their contact info, and teams they played on
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const capitalize = require('./plugins/capitalize');

const PlayerSchema = new Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	phone_num: {
		type: String,
		unique: true,
	},
	emergency_contact: {
		name: String,
		phone_num: String,
		email: String,
		relation: String,
	},
	address: {
		type: String,
	},
	city: {
		type: String,
	},
	state: {
		type: String,
	},
	country: {
		type: String,
	},
	leagues: [{
		type: Schema.Types.ObjectId,
		ref: 'league',
	}],
	teams: [{
		teamId: Schema.Types.ObjectId,
		position: [String],
		jersey_num: {
			type: Number,
			default:-1,
		},
	}]},
	{
		collection: 'players',
	}
);


const fields = [
	'first_name', 
	'last_name', 
	'city', 
	'country', 
	'state', 
	'address',
	'emergency_contact.name'
];

PlayerSchema.plugin(capitalize, { fields });

module.exports = mongoose.model('player', PlayerSchema);
