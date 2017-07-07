/*
* Season model stores information about current and past seasons
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SeasonSchema = new Schema({
	start_date: {
		type: Date,
		set: (val) => Date.parse(val),		
		required: true,
	},
	end_date: {
		type: Date,
		set: (val) => Date.parse(val),
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	teams: [{type: Schema.Types.ObjectId, ref: 'team'}],
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

//Convenience method for displaying season name w/ year;
SeasonSchema.virtual('seasonName').get(function() {
	const d = new Date(this.start_date);
	return `${this.name} ${d.getFullYear()}`;
});

SeasonSchema.virtual('active').get(function() {
	const now = Date.now();
	const start = Date.parse(this.start_date);
	const end = Date.parse(this.end_date);

	return now >= start && now <= end;
});



SeasonSchema.pre('remove', function(next) {
	const teamQuery = { seasons: { $in: [this._id] }};
	const teamUpdate = { $pull: { seasons: { $in: [this._id] }}};
	
	const playerQuery = { 'teams.seasonId': { $in: [this._id] }};
	const playerUpdate = { $pull: { teams: {season: this._id }}};

	const options = { multi: true };

	const teamPromise   = mongoose.model('team').update(teamQuery, teamUpdate, options);
	const playerPromise = mongoose.model('player').update(playerQuery, playerUpdate, options);

	Promise.all([ 
		teamPromise.exec(),
		playerPromise.exec()
	])
	.then(() => next())
	.catch( err => { throw err })

})


module.exports = mongoose.model('season', SeasonSchema);
