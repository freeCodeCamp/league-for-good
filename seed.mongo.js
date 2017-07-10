// mongo ds139899.mlab.com:39899/league-for-good -u ahstein3521 -p

// var playerIds =  [
// "59271a9debc3cb2730e067c7",
// "59271a9debc3cb2730e067cf",
// "59271a9debc3cb2730e067cb",
// "59271a9debc3cb2730e067c9",
// "59271a9debc3cb2730e067d5",
// "59271a9debc3cb2730e067c5",
// "59271a9debc3cb2730e067d1",
// "59271a9debc3cb2730e067d3",
// "59271a9debc3cb2730e067cd",
// "59271a9debc3cb2730e067e7",
// "59271a9debc3cb2730e067f1",
// "59271a9debc3cb2730e067db",
// "59271a9debc3cb2730e067d9",
// "59271a9debc3cb2730e067e3",
// "59271a9debc3cb2730e067f7",
// "59271a9debc3cb2730e067ed",
// "59271a9debc3cb2730e067eb",
// "59271a9debc3cb2730e067f5",
// "59271a9debc3cb2730e067d7",
// "59271a9debc3cb2730e067e1",
// "59271a9debc3cb2730e067f3",
// "59271a9debc3cb2730e067df",
// "59271a9debc3cb2730e067e9",
// "59271a9debc3cb2730e067e5",
// "59271a9debc3cb2730e067dd",
// "59271a9debc3cb2730e067ef"
// ];

// var leagues = db.leagues.find({}, {_id:1}).toArray();

// var players = db.players.find({});


// players.forEach(function(player) {


// 		var q = {_id: player._id};
// 		var t = player.teams[0];


// 		if (t) {

// 			var team = {
// 				teamId: t.teamId,
// 				seasonId: t.seasonId,
// 				position: t.position,
// 				jerseyNum: t.jerseyNum
// 			};
// 			db.players.update(q, {$set: {teams: [team]}});
// 		}
// });

