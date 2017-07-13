/*
* Season model stores information about current and past seasons
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const SeasonSchema = new Schema(
	{
		startDate: {
			type: Date,
			get: (val) => Date.parse(val),
			required: true
		},
		endDate: {
			type: Date,
			get: (val) => Date.parse(val),
			required: true
		},
		name: {
			type: String,
			required: true
		},
		teams: [{type: Schema.Types.ObjectId, ref: 'team'}],
		leagueId: {
			type: Schema.Types.ObjectId,
			ref: 'league'
		}
	},
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

// Compare start - end dates to todays date to determine
// if the season is currently active
SeasonSchema.virtual('active').get(function() {
	const now = Date.now();

	return now >= this.startDate && now <= this.endDate;
});

// If a season is deleted then refs within the player model
// must be deleted as well
SeasonSchema.pre('remove', function(next) {
	const Players = mongoose.model('player');
	const query = { 'teams.seasonId': { $in: [this._id] }};
	const update = { $pull: { teams: {season: this._id }}};
	const options = { multi: true };

	Players.update(query, update, options)
		.exec()
		.then(() => next())
		.catch( err => { throw err; });

});


module.exports = mongoose.model('season', SeasonSchema);
