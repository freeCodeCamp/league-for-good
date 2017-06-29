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

Router.route('/list/:leagueId').get(fetchSeasonList);

module.exports = Router;
