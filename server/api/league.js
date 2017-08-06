const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

const League = mongoose.model('league');
const Seasons = mongoose.model('season');
const Players = mongoose.model('player');
const Teams = mongoose.model('team');
const roles = require('../config/roles.config');

// Create a new league for the user
const createLeague = (req, res) => {
	const newLeague = new League({
		name: req.body.name,
		sportType: req.body.sportType,
		staff: [{
			email: req.user.email,
			role: roles.getOwnerRole(),
			teams: []
		}]
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

const fetchLeagueDetails = (req, res) => {
	const { leagueId } = req.params;
	const { email } = req.user;

	console.log(leagueId, email);
	
	League.findById(leagueId)
		.exec()
		.then( leagueInfo => {
			let userData = {};

			// Retrieve the staffer info for the league
			const staffRole = leagueInfo.staff.find(staffer => {
				return staffer.email === email;
			});

			const staffRoleAccess = roles.getRoleAccess(staffRole.role);
			staffRoleAccess.forEach(access => {
				userData[access] = true;
			});


			console.log('fetching league info');

			const fetchPlayers = () => Players.find({ leagueId }).exec();
			const fetchSeasons = () => Seasons.find({ leagueId }).exec();
			const fetchTeams = () => Teams.find({ leagueId }).exec();
			const fetchStaff = () => League.findOne({ _id: leagueId })
						.select({ _id: 0, staff: 1}).exec();


			console.log(userData);
			Promise.all([
				userData.players ? fetchPlayers() : Promise.resolve(), 
				userData.seasons ? fetchSeasons() : Promise.resolve(),
				userData.teams ? fetchTeams() : Promise.resolve(), 
				userData.staff ? fetchStaff() : Promise.resolve()
			])
			.then(results => {
				/*if (!!league) {
					const staff = league.staff;
					const permissions = roles.getRolePermissions(staff.role);
				}*/
				//console.log('permissions from server', permissions);
				//console.log(seasons, teams, players, staff);
				console.log(results);
				res.send(JSON.stringify(results));

				//res.send({ teams, seasons, players, staff, permissions })
			})
		})
		.catch(err => { console.log(err); });

};


const deleteLeague = (req, res) => {
	const { leagueId } = req.params;

	League.findById(leagueId)
		.exec()
		.then( league => league.remove())
		.then(() => res.status(200).send('Deleted League'))
		.catch( err => { throw err; });
};

Router.route('/create').post(createLeague);
Router.route('/remove/:leagueId').delete(deleteLeague);
Router.route('/fetch/:leagueId').get(fetchLeagueDetails);


module.exports = Router;
