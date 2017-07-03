const mongoose = require('mongoose');

const Players = mongoose.model('player');
const ObjectId = mongoose.Types.ObjectId;

const objectIdArray = playerIds => playerIds.map(id => ObjectId(id));

module.exports = ({players, _id}) =>
	Players.aggregate([
		{$match:
			{ _id: {$in: objectIdArray(players) } }
		},
		{$unwind: '$teams'},
		{$match:
			{'teams.teamId': { $in: [ObjectId(_id)]}}
		},
		{$project:
		{
			firstName: 1,
			lastName: 1,
			fullName: { $concat: ['$lastName', ', ', '$firstName']},
			jerseyNum: '$teams.jerseyNum',
			position: '$teams.position',
			email: 1,
			phoneNum: 1
		}
		}
	]).exec();

