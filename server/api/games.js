const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

// const League = mongoose.model('league');
// const Seasons = mongoose.model('season');
// const Teams = mongoose.model('team');
const Games = mongoose.model('game');

/* const seedGames = (req, res) => {
	const { leagueId } = req.params;
	const now = new Date();

	Seasons.findOne({ $and: [
		{ startDate: { $lt: now }},
		{ endDate: { $gt: now }}
		]
	})
		// .populate('leagueId')
		.lean()
		.exec()
		.then(s => {
			// let d = new Date(s.startDate);
			let [...teams] = s.teams;

			res.send(teams);
		})
		.catch(e => res.send({ error: e }));
};*/

function createNewGame(req, res) {

	Games.create(req.body)
		.then(game =>
			res.send(game)
		);
}

function fetchGames(req, res) {
	const seasonId = req.params.seasonId;

	Games.find({seasonId})
		.exec()
		.then(games => res.send(games))
		.catch(error => { throw error; });
}

function updateGame(req, res) {
	const _id = req.params.gameId;

	Games.update({ _id }, req.body)
		.exec()
		.then(() =>
			res.status(200).send('update succeeded')
		)
		.catch(err => { throw err; });
}

function deleteGame(req, res) {
	Games.remove({ _id: req.params.gameId })
		.then(() =>
			res.status(200).send('deletion succeeded')
		)
		.catch(err => { throw err; });
}

Router.route('/new').post(createNewGame);
Router.route('/fetch/:seasonId').get(fetchGames);
Router.route('/update/:gameId').put(updateGame);
Router.route('/remove/:gameId').delete(deleteGame);
// Router.route('/seed/:leagueId').get(seedGames);
module.exports = Router;
