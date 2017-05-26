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
	const { league, player } = req.body;
	const team = player.team;
  player.teams = [{ team }];
  player.leagues = [ league ]

	Player.create( player )
		.then(newPlayer => {
			Teams.findByIdAndUpdate(team._id, {$push: { players: newPlayer }})
				.exec()
				.then(() => res.send( newPlayer ))
				.catch(e => res.send({ error: e }))
		})
}

Router.route('/add').post(addPlayerToLeague);

module.exports = Router;