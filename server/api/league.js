const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('user');
const League = mongoose.model('league');


// Create a new league for the user
const createLeague = (req, res) => {
	const newLeague = new League({
		name: req.body.name,
		sport_type: req.body.sportType,
		owner: req.user._id,
	});
	
	newLeague.save()
		.then((league) => {
			res.status(200);
			res.send(league);
		})
		.catch(() => {
			res.status(500);
			res.send('error server side');
		});
};


// Router.route('/fetchLeagues').get(getLeagues);
Router.route('/create').post(createLeague);


module.exports = Router;
