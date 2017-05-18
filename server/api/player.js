const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');
const faker = require('faker');

const Players = mongoose.model('player');
const Leagues = mongoose.model('league');

const createPlayers = (leagues) => {	
	
	let playersArray = [];	

	for(let i = 0; i < 20; i++){

		playersArray[i] = ({
			first_name: faker.name.firstName(),
			last_name: faker.name.lastName(),
			email: faker.internet.email(),
			phone_num: faker.phone.phoneNumber(),
			leagues
		})
	}

	return Promise.resolve(playersArray);
}


Router.route('/seed')
	.get((req,res) => {
	
		Leagues.find({owner: req.user._id})
			.select("_id")
			.exec()
			.then(leagues => createPlayers(leagues))
			.then(players => Players.create(players))
			.then(data => res.send(data))
			.catch(err => res.send({err}))
})

module.exports = Router;