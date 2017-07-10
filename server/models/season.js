/*
* Season model stores information about current and past seasons
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const SeasonSchema = new Schema({
	startDate: {
		type: Date,
		get: (val) => Date.parse(val),		
		required: true,
	},
	endDate: {
		type: Date,
		get: (val) => Date.parse(val),
		required: true,
	},
	name: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		required: true
	},
	teams: [{type: Schema.Types.ObjectId, ref: 'team'}],
	leagueId: {
		type: Schema.Types.ObjectId,
		ref: 'league'
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
		}
	}
);


SeasonSchema.virtual('active').get(function() {
	const now = Date.now();
	const start = Date.parse(this.startDate);
	const end = Date.parse(this.endDate);

	return now >= start && now <= end;
});



SeasonSchema.pre('remove', function(next) {
	const teamQuery = { seasons: { $in: [this._id] }};
	const teamUpdate = { $pull: { seasons: { $in: [this._id] }}};
	
	const playerQuery = { 'teams.seasonId': { $in: [this._id] }};
	const playerUpdate = { $pull: { teams: {season: this._id }}};

	const options = { multi: true };

	const teamPromise   = mongoose.model('team')
		.update(teamQuery, teamUpdate, options);
	const playerPromise = mongoose.model('player')
		.update(playerQuery, playerUpdate, options);

	Promise.all([ 
		teamPromise.exec(),
		playerPromise.exec()
	])
	.then(() => next())
	.catch( err => { throw err; });

});


module.exports = mongoose.model('season', SeasonSchema);
