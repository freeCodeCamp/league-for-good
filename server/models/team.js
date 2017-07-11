/*
* Team model stores information about each team, players, and seasons
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const capitalize = require('./plugins/capitalize');

const TeamSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	players: [{type: Schema.Types.ObjectId, ref: 'player'}],
	seasons: [{type: Schema.Types.ObjectId, ref: 'season'}],
	currentlyActive: {
		type: Boolean,
		default: false
	},
	leagueId: {
		type: Schema.Types.ObjectId,
		ref: 'league'
	}
});

TeamSchema.plugin(capitalize, {fields: ['name']});

module.exports = mongoose.model('team', TeamSchema, 'teams');
