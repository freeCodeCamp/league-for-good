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
	// data that will be fetched based off role permissions
	const dataToFetch = {
		teams: Teams.find({ leagueId }),
		players: Players.find({ leagueId }),
		seasons: Seasons.find({ leagueId }),
		staff: League.findById(leagueId)
	};
	
	League.findById(leagueId)
		.exec()
		.then( leagueInfo => {

			// Retrieve the staffer info for the league
			const staffRole = leagueInfo.staff.find(staffer => {
				return staffer.email === email;
			});

			const staffRoleAccess = roles.getRoleAccess(staffRole.role);
			userData = {};

			staffRoleAccess.reduce(function(userData, access) {
				return dataToFetch[access].exec().then( data => {
					userData[access] = data;
					console.log(userData);
				});
			}, userData);
		});

	const fetchPlayers = Players.find({ leagueId });
	const fetchSeasons = Seasons.find({ leagueId });
	const fetchTeams = Teams.find({ leagueId });
	const fetchStaff = League.findOne({ _id: leagueId })
				.select({ _id: 0, staff: 1});

	Promise.all([
		fetchSeasons.exec(),
		fetchTeams.exec(),
		fetchPlayers.exec(),
		fetchStaff.exec()
	])
	.then(([seasons, teams, players, league]) => {
		const staff = league.staff;
		const permissions = roles.getRolePermissions(staff.role);
		console.log('permissions from server', permissions);

		res.send({ teams, seasons, players, staff, permissions })
	});

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
