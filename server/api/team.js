const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const Team = mongoose.model('team');
const League = mongoose.model('league');

// Create a new league for the user
const createTeam = (req, res) => {
	let teamObject;
	const league = req.body.league;
	const newTeam = new Team({
		name: req.body.name,
		league_id: league
	});

	newTeam.save()
		.then( team => {
			teamObject = team;
			return League
				.update({_id:league}, {$push:{archived_teams:team}})
				.exec(); 
		})
		.then(() => res.send(teamObject))
		.catch(error => res.send({error}));
};

Router.route('/create').post(createTeam);

module.exports = Router;