const mongoose = require('mongoose');
const Players = mongoose.model('player');
const ObjectId = mongoose.Types.ObjectId;

const objectIdArray = playerIds => playerIds.map(id => ObjectId(id));

module.exports = ({players, _id}) =>
	Players.aggregate([
		{$match: 
			{ _id: {$in: objectIdArray(players) } },
		},
		{$unwind:'$teams'},
		{$match: 
			{'teams.teamId' : { $in: [ObjectId(_id)]}}, 
		},
		{$project: 
		{
			first_name:1, 
			last_name:1, 
			full_name: { $concat : ['$last_name', ', ', '$first_name']},
			jersey_num: '$teams.jersey_num',
			position: '$teams.position', 
			email:1, 
			phone_num:1,
		},
		},
	]).exec();

