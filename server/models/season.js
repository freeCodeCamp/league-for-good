/*
* Season model stores information about current and past seasons
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quarterNames = ['Fall', 'Winter', 'Spring', 'Summer'];

const SeasonSchema = new Schema({
	start_date: {
		type: Date,
		set: (val) => Date.parse(val),
		get: (val) => val.toDateString(),		
		required: true,
	},
	end_date: {
		type: Date,
		set: (val) => Date.parse(val),
		get: (val) => {
			return new Date(val).toDateString();
		},
		required: true,
	},
	quarter: {
		type: String,
		enum: quarterNames,
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

	return now >= this.start_date && now <= this.end_date;
});

SeasonSchema.virtual('quarterNamesList').get(function(){
	return quarterNames;
})




module.exports = mongoose.model('season', SeasonSchema);
