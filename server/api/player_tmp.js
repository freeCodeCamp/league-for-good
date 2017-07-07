const express  	= require('express');

const Router   	= express.Router();
const mongoose 	= require('mongoose');
const faker 		= require('faker');

const Player 	= mongoose.model('player');
const Teams   	= mongoose.model('team');
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

// TMP FILE - Seeding a league with players
const createPlayers = teams => {


	teams.forEach(team => {

		const size = random(17, 28);
		for (let i = 0; i < size; i++) {

			Player.create({
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				email: faker.internet.email(),
				phoneNum: faker.phone.phoneNumber(),
				leagues: [team.leagueId],
				teams: [{
					teamId: team._id,
					position: ['Goalie'],
					jerseyNum: random(1, 99)
				}]
			})
			.then(player => Teams.update({_id: team._id}, {$push: {players: player}}))
			.catch(err => { throw err;});
		}
	});
	Promise.resolve('Great job');
};


Router.route('/seed')
	.get((req, res) => {

		Teams.find({})
			.exec()
			.then(createPlayers)
			.then(() => res.redirect('/player/seed1'))
			.catch(err => res.send({err}));
	});
Router.route('/seed1')
	.get((req, res) => {

		Player.find({})
			.exec()
			.then(data => res.send(data))
			.catch(err => res.send({err}));
	});
