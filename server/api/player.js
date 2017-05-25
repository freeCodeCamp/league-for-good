const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');
const faker = require('faker');

const Player = mongoose.model('player');
const Leagues = mongoose.model('league');
const Team = mongoose.model('team');

const addPlayerToLeague = (req, res) => {
	const { league, player } = req.body;
	const teamId = player.team;
  player.teams = [{teamId}];

	Player.create( player )
		.then(newPlayer => {
			Team.findByIdAndUpdate(teamId, {$push:{ players: newPlayer }})
				.exec()
				.then(() => res.send({newPlayer}))
				.catch(e => res.send({error:e}))
		})

}

Router.route('/add').post(addPlayerToLeague);

module.exports = Router;