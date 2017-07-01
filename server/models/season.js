/*
* Season model stores information about current and past seasons
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formatDate = date => 
	date.toDateString().replace(/^\w*\s/, '')

const SeasonSchema = new Schema({
	start_date: {
		type: Date,
		set: (val) => Date.parse(val),
		get: formatDate,		
		required: true,
	},
	end_date: {
		type: Date,
		set: (val) => Date.parse(val),
		get: formatDate,
		required: true,
	},
	quarter: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	league_id: {
		type: Schema.Types.ObjectId,
		ref: 'league',
	}},
	{
		collection: 'seasons',
		toObject: { 
			getters: true, 
			setters: true,
			virtuals: true 
		},
		toJSON: { 
			getters: true, 
			setters: true,			
			virtuals: true 
		},
	}
);

SeasonSchema.virtual('seasonName').get(function() {
	return this.quarter + ' ' + this.year;
});

SeasonSchema.virtual('active').get(function() {
	const now = Date.now();
	const start = Date.parse(this.start_date);
	const end = Date.parse(this.end_date);

	return now >= start && now <= end;
});





module.exports = mongoose.model('season', SeasonSchema);
