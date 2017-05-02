/*
* Team model stores information about each team, players, and seasons they played in
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	players: {
		type: [{
			playerId: Schema.Types.ObjectId,
			ref: 'player'
		]},
		required: true
	},
	seasons: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: 'season'
		}]
	},
	currently_active: {
		type: Boolean,
		default: false
	},
	league_id: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: 'league'
		}]
	},
	sport_type: {
		type: String,
		required: true
	},
	staff: {
		type: [{
			role: String,
			name: String,
			email: String,
			phone_num: String
		}]
	}},
	{
		collection: 'teams'
	}
);

module.exports = mongoose.model('team', TeamSchema);