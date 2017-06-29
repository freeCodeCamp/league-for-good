const mongoose = require('mongoose');
const Players = mongoose.model('player');
const ObjectId = mongoose.Types.ObjectId;

module.exports = league_id => 
	Players.aggregate([
		{ $match: { leagues: { $in: [ObjectId(league_id)] }} },
		{ $unwind: '$teams' },
		{ $lookup: { from: 'seasons', foreignField:'_id', localField: 'teams.seasonId', as: 'season'}},
		{ $unwind: '$season'},
		{ $match: { 'season.active': true }},
		{ $lookup: { from: 'teams', foreignField:'_id', localField: 'teams.teamId', as: 'season.team'}},
		{ $project: {
			first_name:1,
			last_name:1,
			full_name: {$concat: ['$first_name', ' ', '$last_name']},
			email:1,
			phone_num:1,
			current_team: {
				season: { $concat: ['$season.quarter',' ', { $substr: ['$season.year', 0, -1] }] },
				name: { $arrayElemAt: ['$season.team.name', 0] },
				teamId: '$teams.teamId',
				jersey_num: '$teams.jersey_num',
				position: '$teams.position'
			}
		}
	},
]).exec()