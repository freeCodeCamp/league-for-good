/*
* Player model stores information about each player,
* their contact info, and teams they played on
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const capitalize = require('./plugins/capitalize');
const removeRefs = require('./plugins/removeAllRefs');

const PlayerSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone_num: {
		type: String
	},
	emergency_contact: {
		name: String,
		phone_num: String,
		email: String,
		relation: String
	},
	address: {
		street: String,
		city: String,
		state: String,
		country: String
	},
	leagues: [{
		type: Schema.Types.ObjectId,
		ref: 'league'
	}],
	teams: [{
		teamId: Schema.Types.ObjectId,
		seasonId: Schema.Types.ObjectId,
		position: [String],
		jersey_num: Number
	}]},
	{
		collection: 'players',
		toObject: { virtuals: true },
		toJSON: { virtuals: true }
	}
);


const fields = [
	'first_name',
	'last_name',
	'emergency_contact.name'
];

PlayerSchema.virtual('full_name').get(function() {
	return `${this.first_name} ${this.last_name}`;
});

// TODO -- virtual should return team config relative to league AND seasonId
PlayerSchema.virtual('team').get(function() {
	return this.teams[0];
});

PlayerSchema.plugin(removeRefs, {
	modelName: 'league', field: 'pending_players'
});
PlayerSchema.plugin(capitalize, { fields });

module.exports = mongoose.model('player', PlayerSchema);
