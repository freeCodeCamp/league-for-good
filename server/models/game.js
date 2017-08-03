/*
* Game model stores information about all the games played
* and the players who played
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
	seasonId: {
		type: Schema.Types.ObjectId,
		ref: 'season'
	},

	homeTeamId: {
		type: Schema.Types.ObjectId,
		ref: 'team'
	},

	awayTeamId: {
		type: Schema.Types.ObjectId,
		ref: 'team'
	},

	datePlayed: {
		type: Date,
		required: true
	},

	venue: {
		type: String
	},

	scores: {
		home: {
			type: Number,
			default: 0,
			min: 0
		},
		away: {
			type: Number,
			default: 0,
			min: 0			
		}
	},

	rosters: {
		home: [
			{
				type: Schema.Types.ObjectId,
				ref: 'player'
			}
		],
		away: [
			{
				type: Schema.Types.ObjectId,
				ref: 'player'			
			}
		]}
	},
	{
		collection: 'games'
	}
);

module.exports = mongoose.model('game', GameSchema);

