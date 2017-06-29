/*
* Game model stores information about all the games played
* and the players who played
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
	team_id: {
		type: Schema.Types.ObjectId,
		ref: 'team'
	},
	season_id: {
		type: Schema.Types.ObjectId,
		ref: 'season'
	},
	win: {
		type: String,
		default: 'Win'
	},
	score: {
		type: Number,
		default: 0,
		min: 0
	},
	opponent_id: {
		type: Schema.Types.ObjectId,
		ref: 'team'
	},
	opponent_score: {
		type: Number,
		default: 0,
		min: 0
	},
	date_played: {
		type: Date,
		required: true
	},
	venue: {
		type: String
	},
	// home field advantage
	home: {
		type: Boolean
	},
	roster: [{
		type: Schema.Types.ObjectId,
		ref: 'player'
	}]},
	{
		collection: 'games'
	}
);

module.exports = mongoose.model('game', GameSchema);

