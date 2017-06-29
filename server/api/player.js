const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');
const faker = require('faker');

const Player = mongoose.model('player');
const Leagues = mongoose.model('league');
const Teams = mongoose.model('team');


//Add a player into the database 
const addPlayerToLeague = (req, res) => {
	const { teams } = req.body;
	const teamId = teams[0] && teams[0].teamId ? teams[0].teamId : null;

	Player.create( req.body )
		.then(newPlayer => {
			if (teamId){
				Teams.findByIdAndUpdate(teamId, {$push: { players: newPlayer }})
					.exec()
					.then(() => res.send( newPlayer ))
					.catch(error => res.send({ error }));
			}
			else{
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
	const query = { leagues: { $in: [leagueId] }};
	const select = {}; 
	Player.find(query)
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

const swapTeams = (teamUpdate, player) => {
	if (!teamUpdate) return Promise.resolve('No update');

	const { prevTeam, currTeam } = teamUpdate;
	Promise.all([
		Teams.findByIdAndUpdate( prevTeam, { $pull: { players: player }}).exec(),
		Teams.findByIdAndUpdate( currTeam, { $push: { players: player }}).exec()
	])
	.then(() => Promise.resolve('Updated'))
	.catch(err => { throw err})
};

const updatePlayer = (req, res) => {
	const { playerId } = req.params;
	const { playerUpdate, teamUpdate } = req.body;

	Player.findByIdAndUpdate( playerId, playerUpdate )
		.exec()
		.then(() => swapTeams(teamUpdate, playerId))
		.then(() => res.send(playerUpdate))
		.catch(err => { throw err })

};

Router.route('/list/:leagueId').get(fetchPlayerList);
Router.route('/details/:playerId').get(getPlayer);

Router.route('/update/:playerId').put(updatePlayer);
Router.route('/assign').put(addPlayerToTeam);
Router.route('/add').post(addPlayerToLeague);

module.exports = Router;
