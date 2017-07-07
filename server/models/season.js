/*
* Season model stores information about current and past seasons
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
	startDate: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date,
		required: true
	},
	quarter: {
		type: String,
		enum: ['Fall', 'Winter', 'Spring', 'Summer'],
		required: true
	},
	year: {
		type: Number,
		required: true
	},
	active: {
		type: Boolean,
		default: false
	},
	leagueId: {
		type: Schema.Types.ObjectId,
		ref: 'league'
	}},
	{
		collection: 'seasons'
	}
);

module.exports = mongoose.model('season', SeasonSchema);
