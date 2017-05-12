const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const Team = mongoose.model('team');
const League = mongoose.model('league');


// Create a new team for a selected league
//after the team is saved, push the mongo generated _id into the 'archived_teams' array with that league
//Send the newly created team back to the client 
const createTeam = (req, res) => {
	let teamObject;
	const league = req.body.league;
	const query = { _id: league };

	const newTeam = new Team({
		name: req.body.name,
		league_id: league
	});

	newTeam.save()
		.then( team => {
			teamObject = team;
			return League.update(query, { $push: {archived_teams: team} })
				.exec(); 
		})
		.then(() => res.send(teamObject))
		.catch(error => res.send({ error }));
};

Router.route('/create').post(createTeam);

module.exports = Router;