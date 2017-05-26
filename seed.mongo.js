//mongo ds139899.mlab.com:39899/league-for-good -u ahstein3521 -p Wouldnt you like to know

var playerIds =  [
"59271a9debc3cb2730e067c7",
"59271a9debc3cb2730e067cf",
"59271a9debc3cb2730e067cb",
"59271a9debc3cb2730e067c9",
"59271a9debc3cb2730e067d5",
"59271a9debc3cb2730e067c5",
"59271a9debc3cb2730e067d1",
"59271a9debc3cb2730e067d3",
"59271a9debc3cb2730e067cd",
"59271a9debc3cb2730e067e7",
"59271a9debc3cb2730e067f1",
"59271a9debc3cb2730e067db",
"59271a9debc3cb2730e067d9",
"59271a9debc3cb2730e067e3",
"59271a9debc3cb2730e067f7",
"59271a9debc3cb2730e067ed",
"59271a9debc3cb2730e067eb",
"59271a9debc3cb2730e067f5",
"59271a9debc3cb2730e067d7",
"59271a9debc3cb2730e067e1",
"59271a9debc3cb2730e067f3",
"59271a9debc3cb2730e067df",
"59271a9debc3cb2730e067e9",
"59271a9debc3cb2730e067e5",
"59271a9debc3cb2730e067dd",
"59271a9debc3cb2730e067ef"
];

var teamId = "591617449b73010a086bde86";

var objectIdArray = playerIds.map(function(id){
	return ObjectId(id)
});


var players =	db.players.aggregate([
		{$match: 
			{ _id: {$in: objectIdArray } }
		},
		{$unwind:"$teams"},
		{$match: 
			{"teams.teamId" : { $in: [ObjectId(teamId)]}} 
		},
		{$project: 
			{
				first_name:1, 
				last_name:1, 
				jersey_num: "$teams.jersey_num",
				position: "$teams.position", 
				email:1, 
				phone_num:1,
			}
		}
	]).toArray()

