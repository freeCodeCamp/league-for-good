const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Leagues = mongoose.model('league');

const logInUser = (req,res) => {
	req.logIn(req.user, err => {
		if(err) throw err;
		res.redirect('/');
	});
};

const logOutUser = (req, res) =>{
	req.logout();
	res.status(200).send('User logged out');
};

const fetchUserAndLeagues = (req, res, next) => {
	const { user } = req;
	
	if(!user) return next();

	return Leagues.find({ owner: user._id })
		.populate('archived_teams active_teams')
		.exec()
		.then(leagueInfo => { 
			res.send({user, leagueInfo, loggedIn: true })
		});
};

const handleAuthFailure = (req,res) => res.send({user: null, loggedIn: false});

Router.route('/google')
  .get(passport.authenticate('google',{scope:['profile','email']}));


Router.route('/google/callback')
  .get(passport.authenticate('google',{failureRedirect: '/'}), logInUser);

Router.route('/logout')
  .post(logOutUser);

Router.route('/authenticate')
  .post(fetchUserAndLeagues, handleAuthFailure);

module.exports = Router;  