const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

const League = mongoose.model('league');
const Player = mongoose.model('player');

const getRegForm = (req, res) => {
	const { leagueId } = req.params;

	req.session.submitted = false;

	League.findById(leagueId)
		.exec()
		.then(league => res.render('playerRegistration', { league } ))
		.catch(() => res.render('error', {
			message: 'The current link does not exist'
		}));
};

const createPlayer = (req, res) => {
	const { leagueId } = req.params;

	if (req.session.submitted) {
		return res.send('This session has expired');
	}

	req.session.submitted = true;

	Player.create(req.body)
		.then( player =>
			League.findByIdAndUpdate( leagueId, {
				$push: { pending_players: player }
			})
			.exec()
		)
		.then(() => res.render('success'))
		.catch(() => res.render('error', {
			message: 'Error submitting your registration form'
		}));
};

const deleteRegistration = (req, res) => {
	const { playerId } = req.params;

	Player.findById(playerId)
		.exec()
		.then(player => player.remove())
		.then(() => res.send('Player registration deleted'))
		.catch(err => { throw err;});

};

Router.route('/:leagueId')
	.get(getRegForm)
	.post(createPlayer);

Router.route('/delete/:playerId')
	.delete(deleteRegistration);

module.exports = Router;
