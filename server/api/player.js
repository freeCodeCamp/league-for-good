const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

const Player = mongoose.model('player');
const Teams = mongoose.model('team');


// Add a player into the database
const addPlayerToLeague = (req, res) => {
	const { teams } = req.body;
	const teamId = teams[0] && teams[0].teamId ? teams[0].teamId : null;

	Player.create( req.body )
		.then(newPlayer => {
			if (teamId) {
				Teams.findByIdAndUpdate(teamId, {$push: { players: newPlayer }})
					.exec()
					.then(() => res.send( newPlayer ))
					.catch(error => res.send({ error }));
			}			else {
				res.send(newPlayer);
			}
		})
		.catch(error => { throw error; });
};

const getPlayer = (req, res) => {
	const { playerId } = req.params;

	Player.findById(playerId)
		.exec()
		.then(data => res.send(data))
		.catch(err => res.send(String(err)));
};


const fetchPlayerList = (req, res) => {
	const { leagueId } = req.params;

	Player.find({ leagueId })
		.exec()
		.then(players => res.send(players));
};

const addPlayerToTeam = (req, res) => {
	const { playerId, team } = req.body;

	Player.findByIdAndUpdate(playerId, {$push: { teams: team }})
		.exec()
		.then(() => {
			Teams.findByIdAndUpdate(team.teamId, { $addToSet: { players: playerId }})
				.exec()
				.then(() => res.send('Successfully assigned player to team.'))
				.catch( err => { throw err; });
		})
		.catch(err => res.send(String(err)));

};

const swapTeams = (req, res, next) => {
	const { team: { shouldUpdate, currTeam, newTeam }} = req.body;

	if (shouldUpdate) {
		Promise.all([
			Teams.update(currTeam.query, currTeam.update).exec(),
			Teams.update(newTeam.query, newTeam.update).exec()
		])
		.then(() => { return next(); })
		.catch(err => { throw new Error({swapError: err}); });
	}
	return next();
};

const updatePlayer = (req, res) => {
	const { player: { query, update }} = req.body;

	Player.update(query, update)
		.exec()
		.then(() => res.send('Successfully updated player'))
		.catch(err => { throw err; });

};

Router.route('/list/:leagueId').get(fetchPlayerList);
Router.route('/details/:playerId').get(getPlayer);

Router.route('/update').put(swapTeams, updatePlayer);
Router.route('/assign').put(addPlayerToTeam);
Router.route('/add').post(addPlayerToLeague);

module.exports = Router;
