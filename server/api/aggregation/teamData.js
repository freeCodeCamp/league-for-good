const mongoose = require('mongoose');
const Seasons = mongoose.model('season');
const ObjectId = mongoose.types.ObjectId;
const now = new Date();

module.exports = leagueId =>
	Seasons.aggregate([

	{ $match: { league_id: ObjectId(leagueId) }},
	{ $unwind: '$teams' },
	{ $lookup: { from: 'teams', localField: 'teams', foreignField: '_id', as: 'team' }},
	{ $project: 
	{ 
		seasonInfo: {
			start_date:'$start_date',
			end_date:'$end_date',
			seasonName: {
				$concat: [
					'$name', ' ', { $dateToString: { format: '%Y', date:'$start_date' }}
				]
			},
			active: {
				$and: [
						{ $gte: [now, '$start_date']},
						{ $lt: [now, '$end_date']}
				]
			}				
		},	
		team: { $arrayElemAt: ['$team', 0]},
	}
	},
	{	$group: 
	{
		_id: '$team._id',
		name: { $first: '$team.name' },
		currently_active: { $first: '$team.currently_active'},
		players: { $first: '$team.players'},
		staff: {$first: '$team.staff'},
		seasons: { $push: '$seasonInfo' }
	}
	}
	]).exec();


