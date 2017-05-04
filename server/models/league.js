/*
* League model stores information about each league and the teams in each league
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LeagueSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'user',
		required: true
	},
	sport_type: {
		type: String,
		required: true
	},
	active_teams: [{
			type: Schema.Types.ObjectId,
			ref: 'team'
	}],
	archived_teams: [{
			type: Schema.Types.ObjectId,
			ref: 'team'
	}]
	},
	{
		collection: 'leagues'
	}
);

module.exports = mongoose.model('league', LeagueSchema);