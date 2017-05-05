/*
* Season model stores information about current and past seasons
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
	start_date: {
		type: Date,
		required: true,
	},
	end_date: {
		type: Date,
		required: true,
	},
	quarter: {
		type: String,
		enum: ['Fall', 'Winter', 'Spring', 'Summer'],
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	active: {
		type: Boolean,
		default: false,
	},
	league_id: {
		type: Schema.Types.ObjectId,
		ref: 'league',
	}},
	{
		collection: 'seasons',
	}
);

module.exports = mongoose.model('season', SeasonSchema);
