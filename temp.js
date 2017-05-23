///mongodb scripts for fixing up the model

//mongo ds139899.mlab.com:39899/league-for-good -u  -p 

db.leagues.find().forEach(function(league){
	var teams = league.archived_teams.concat(league.active_teams);

	db.leagues.update({_id: league._id}, {$set: {teams: teams}})
})