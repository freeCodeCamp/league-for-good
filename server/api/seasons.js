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

const importTeamsToSeason = (doc, importTeams) => {
	const query = { league_id: doc.league_id, currently_active: true };
	const update = { $push: { seasons: doc._id }};
	const options = { multi: true };
	
	if (!importTeams) {
		return doc;
	}

	mongoose.model('team').update(query, update, options)
		.exec()
		.then(() => Promise.resolve(doc))
		.catch(err => { throw err });

}


const createSeason = (req, res) => {
	const { league_id } = req.params;
	const { importActiveTeams } = req.body;

	Seasons.create(req.body)
		.then(doc => importTeamsToSeason(doc, importActiveTeams))
		.then( newSeason => res.send(newSeason))
		.catch( err => { throw err });
};

const deleteSeason = ( req, res ) => {

	const { seasonId } = req.params;

	Seasons.findById( seasonId )
		.exec()
		.then( season => season.remove())
		.then( () => res.status(200).send('Successfully removed season'))
		.catch(err => { throw err })
}	

Router.route('/list/:leagueId').get(fetchSeasonList);
Router.route('/create/:league_id').post(createSeason);
Router.route('/remove/:seasonId').delete(deleteSeason);

module.exports = Router;
