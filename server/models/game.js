/*
* Game model stores information about all the games played
* and the players who played
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
	teamId: {
		type: Schema.Types.ObjectId,
		ref: 'team'
	},
	seasonId: {
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
	opponentId: {
		type: Schema.Types.ObjectId,
		ref: 'team'
	},
	opponentScore: {
		type: Number,
		default: 0,
		min: 0
	},
	datePlayed: {
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

