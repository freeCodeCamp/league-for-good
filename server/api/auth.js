const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Leagues = mongoose.model('league');
const Roles = mongoose.model('role');

function logInUser(req, res) {
	req.logIn(req.user, err => {
		if (err) {throw err;}
		res.redirect('/');
	});
}

function logOutUser(req, res) {
	req.logout();
	res.send('User logged out');
}

// This is called when the user loads up the page to get
// all of the initial data if they have an authenticated session
//	Initial data:
//		User access to leagues
//		Roles to determine proper access to those league
function fetchInitialData(req, res, next) {
	const { user } = req;

	if (!user) {return next();}

	const query = { $or: [ { owner: user._id }, { 'staff.email': user.email } ] };

	const leaguePromise = Leagues.find(query)
		.select('name _id sportType');
	const rolePromise = Roles.find({})
		.select('title privileges');

	return Promise.all([leaguePromise.exec(), rolePromise.exec()])
		.then(initData => {
			console.log(initData);
			res.send({user, leagueInfo: initData[0], roles: initData[1], loggedIn: true });
		})
		.catch((err) => res.send(err));
}

function handleAuthFailure(req, res) {
	return res.send({user: null, loggedIn: false});
}


Router.route('/google')
  .get(passport.authenticate('google', {scope: ['profile', 'email']}));


Router.route('/google/callback')
  .get(passport.authenticate('google', {failureRedirect: '/'}), logInUser);

Router.route('/logout')
  .post(logOutUser);

Router.route('/authenticate')
  .post(fetchInitialData, handleAuthFailure);

module.exports = Router;
