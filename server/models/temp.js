const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
	// name of the league
	name: {
		type: String,
		required: true,
		trim: true
	},
	// how the league operates for seasons
	settings: {
		numberPerYear: {
			type: Number,
			default: 4,
			min: 1
		},
		names: {
			type: [String],
			default: ['Fall', 'Winter', 'Spring', 'Summer']
		}
	},
	// staff of the league
	staff: [{
		role: String,
		email: String,
		teams: {
			type: [String]
		}
	}],
	// players in the league; each player is in one team per season
	players: [{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		phoneNum: {
			type: String
		},
		emergencyContact: {
			name: String,
			phoneNum: String,
			email: String,
			relation: String
		},
		address: {
			street: String,
			city: String,
			state: String,
			country: String
		}
	}],
	// players that have requested entry into the league, but are 
	// awaiting approval
	pendingPlayers: [{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		phoneNum: {
			type: String
		},
		emergencyContact: {
			name: String,
			phoneNum: String,
			email: String,
			relation: String
		},
		address: {
			street: String,
			city: String,
			state: String,
			country: String
		}
	}],
	// active and previous seasons in the league
	seasons: [{
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
		// teams competing in the season
		teams: [{
			type: String
		}],
		games: [{
			homeTeamName: {
				type: String,
				required: true
			},
			awayTeamName: {
				type: String,
				required: true
			},
			datePlayed: {
				type: Date,
				required: true
			},
			venue: {
				type: String
			},
			scores: {
				home: {
					type: Number,
					default: 0,
					min: 0
				},
				away: {
					type: Number,
					default: 0,
					min: 0			
				}
			},
			rosters: {
				home: [{
					type: String
				}],
				away: [{
					type: String
				}]
			}
		}]
	}],
	// league sport
	sportType: {
		type: String,
		required: true
	},
	// list of teams in the league
	teams: [{
		name: {
			type: String,
			trim: true,
			required: true
		},
		// player emails are used to enforce uniqueness on teams 
		// across the league
		players: [{
			type: String,
			required: true,
			unique: true
		}],
		// teams can be active or archived for historical purposes
		currentlyActive: {
			type: Boolean,
			default: false
		}
	}]
}, { collection: 'leagues' });

module.exports = mongoose.model('league', LeagueSchema);
