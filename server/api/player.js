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
					.catch(e => res.send({ error: e }))
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

// const getAllPlayers = (req, res) => {
// 	Player.find({})
// 		.exec()
// 		.then(data => res.send(data))
// 		.catch(err => res.send(String(err)));
// };

const fetchList = (req, res) => {
	const { leagueId } = req.params;
	const query = { leagues: { $in: [leagueId] }};
	const select = {} 
	Player.find(query)
		.exec()
		.then(players => res.send(players))
}

const addPlayerToTeam = (req, res) => {
	const { playerId, team } = req.body;

	Player.findByIdAndUpdate(playerId, {$push: { teams: team }})
		.exec()
		.then(() => {
			Teams.findByIdAndUpdate(team.teamId, { $addToSet: { players: playerId }})
				.exec()
				.then(() => res.send("Successfully assigned player to team."))
				.catch( err => { throw err })
		})
		.catch(err => res.send(String(err)))

}

Router.route('/list/:leagueId').get(fetchList);
Router.route('/add').post(addPlayerToLeague);
// Router.route('/getAllPlayers').get(getAllPlayers);
Router.route('/details/:playerId').get(getPlayer);
Router.route('/assign').put(addPlayerToTeam);

module.exports = Router;
