const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

const League = mongoose.model('league');
const Seasons = mongoose.model('season');
const Players = mongoose.model('player');
const Teams = mongoose.model('team');

// Create a new league for the user
const createLeague = (req, res) => {
	const newLeague = new League({
		name: req.body.name,
		sportType: req.body.sportType,
		owner: req.user._id
	});

	newLeague.save()
		.then((league) => {
			res.status(200);
			res.send(league);
		})
		.catch(() => {
			res.status(500);
			res.send('error server side');
		});
};

const fetchLeagueDetails = (req, res) => {
	const { leagueId } = req.params;

	const fetchPlayers = Players.find({ leagueId });
	const fetchSeasons = Seasons.find({ leagueId });
	const fetchTeams = Teams.find({ leagueId });
	const fetchStaff = League.findOne({ _id: leagueId })
				.select({ _id: 0, staff: 1});

	Promise.all([
		fetchSeasons.exec(),
		fetchTeams.exec(),
		fetchPlayers.exec(),
		fetchStaff.exec()
	])
	.then(([seasons, teams, players, league]) =>
		res.send({ teams, seasons, players, staff: league.staff })
	);

};


Router.route('/create').post(createLeague);
Router.route('/fetch/:leagueId').get(fetchLeagueDetails);


module.exports = Router;
