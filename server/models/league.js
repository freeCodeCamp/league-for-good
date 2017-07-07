/*
* League model stores information about each league and the teams in each league
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
	Various settings properties to be associated with each league
	
*/
const LeagueSettings = {
	season: {
		numberPerYear : {
			type: Number,
			default: 4,
			min: 1,
		},
		names: {
			type: [String],
			default:['Fall', 'Winter', 'Spring', 'Summer'],
		}
	}
};

const LeagueSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		settings: LeagueSettings,		
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			required: true,
		},
		staff: [{
			role: String, 
      email: String,
      teams: {
				type: [String],
      	default: [],
			},
		}],
		pending_players: [{
			type: Schema.Types.ObjectId,
			ref: 'player'
		}],
		sport_type: {
			type: String,
			required: true,
		},
		teams: [{
			type: Schema.Types.ObjectId,
			ref: 'team',
		}],
	},
	{
		collection: 'leagues',
	}
);

LeagueSchema.pre('remove', function(next) {
	const _id = this._id;

	Promise.all([
		mongoose.model('season').remove({ league_id: _id }),
		mongoose.model('team').remove({ league_id: _id }),
		mongoose.model('player').remove({ leagueId: _id }),
		
	])
	.then(() => {
		console.log('League refs all deleted');
		next()
	})
	.catch(err => { throw err })

})

module.exports = mongoose.model('league', LeagueSchema);
