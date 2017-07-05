const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');

const Seasons = mongoose.model('season');

// Fetch all the seasons from a league
const fetchSeasonList = (req, res) => {
	const { leagueId } = req.params;
	const query = { league_id: leagueId };

	Seasons.find(query)
		.exec()
		.then(seasons => res.send(seasons))
		.catch(err => { throw err });
};

const createSeason = (req, res) => {

	const { league_id } = req.params;

	Seasons.create(req.body)
		.then( newSeason => res.send(newSeason))
		.catch( err => { throw err });
};

Router.route('/list/:leagueId').get(fetchSeasonList);
Router.route('/create/:league_id').post(createSeason);

module.exports = Router;
