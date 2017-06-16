const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');

const League = mongoose.model('league');
const Player = mongoose.model('player');

const getRegForm = (req, res) => {
	const { leagueId } = req.params;

	req.session.submitted = false;

	League.findById(leagueId)
		.populate('pending_players')
		.exec()
		.then(league => res.render('playerRegistration.ejs', { league } ))
		.catch(err => res.render('error', 
			{ message : 'The current link does not exist' }))
}

const createPlayer = (req, res) => {
	const { leagueId } = req.params;
	
	if (req.session.submitted) {
		return res.send('This session has expired')
	}
	
	req.session.submitted = true;

	Player.create(req.body)
		.then( player => 
			League.findByIdAndUpdate( leagueId, { $push: { pending_players: player } })
				.exec()
		)
		.then(() => res.render('success'))
		.catch(err => res.render('error', { message: 'Error submitting your registration form'}))
}

Router.route('/:leagueId')
	.get(getRegForm)
	.post(createPlayer);
	


module.exports = Router;
