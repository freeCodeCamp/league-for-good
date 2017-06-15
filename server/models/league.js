/*
* League model stores information about each league and the teams in each league
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LeagueSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			required: true,
		},
		staff: [{
			type: String,
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

module.exports = mongoose.model('league', LeagueSchema);
