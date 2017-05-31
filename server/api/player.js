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
	const teamId = teams[0] ? teams[0].teamId : null;

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
}

Router.route('/add').post(addPlayerToLeague);

module.exports = Router;