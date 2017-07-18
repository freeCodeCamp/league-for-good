const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

const Seasons = mongoose.model('season');

// Fetch all the seasons from a league
const fetchSeasonList = (req, res) => {
	const { leagueId } = req.params;

	Seasons.find({ leagueId })
		.exec()
		.then(seasons => res.send(seasons))
		.catch(err => { throw err; });
};


const createSeason = (req, res) => {

	Seasons.create(req.body)
		.then( newSeason => res.send(newSeason))
		.catch( err => { throw err; });
};

const deleteSeason = ( req, res ) => {

	const { seasonId } = req.params;

	Seasons.findById( seasonId )
		.exec()
		.then( season => season.remove())
		.then(() => res.status(200).send('Successfully removed season'))
		.catch(err => { throw err; });
};

const updateSeason = (req, res) => {
	const { seasonId } = req.params;
	const update = req.body;

	Seasons.findByIdAndUpdate(seasonId, update)
		.exec()
		.then(()=> res.status(200).send('Season updated'))
		.catch(err => { throw err; });
};

Router.route('/list/:leagueId').get(fetchSeasonList);
Router.route('/update/:seasonId').put(updateSeason);
Router.route('/create/:leagueId').post(createSeason);
Router.route('/remove/:seasonId').delete(deleteSeason);

module.exports = Router;
