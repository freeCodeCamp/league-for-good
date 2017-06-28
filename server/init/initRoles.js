/*
 * This script will initialize the default roles in the database for the app
 * This is a sample of roles that you can use, feel free to create your own.
 *
 * Default roles:
 * 	owner:
 * 		-owner of the league
 * 		-has access to all privileges
 *	manager:
 *		-manager of the league
 *		-has access to all the teams, players, and season privileges
 *		-no access to settings tab
 *	coach:
 *		-coach of team(s)
 *		-has access to the teams tab
 *		-no access to the players, season, or settings tab
 *		-can view a subset of team(s) that he is assigned to and their roster(s)
 *		-can view player information through the roster
 *
 * A description of what each privilege does can be found in ../models/roles.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
const Role = require('../models/roles.js');


mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => console.log('Error connecting to MongoDB:', error));


const ownerRole = new Role({
	name: 'owner',
      	privileges: {
		viewTeams: true,
		viewSubsetTeams: false,
		createTeams: true,
		editTeams: true,
		deleteTeams: true,
		viewPlayers: true,
		viewPlayerRegistrations: true,
		createPlayers: true,
		editPlayers: true,
		assignPlayers: true,
		viewSeasons: true,
		editSeasons: true,
		deleteSeasons: true,
		viewSettings: true,
		createStaff: true,
		editStaff: true,
		deleteStaff: true,
		deleteLeague: true
	}
});

const managerRole = new Role({
	name: 'manager',
      	privileges: {
		viewTeams: true,
		viewSubsetTeams: false,
		createTeams: true,
		editTeams: true,
		deleteTeams: true,
		viewPlayers: true,
		viewPlayerRegistrations: true,
		createPlayers: true,
		editPlayers: true,
		assignPlayers: true,
		viewSeasons: true,
		editSeasons: true,
		deleteSeasons: true,
		viewSettings: false,
		createStaff: false,
		editStaff: false,
		deleteStaff: false,
		deleteLeague: false
	}
});

const coachRole = new Role({
	name: 'coach',
      	privileges: {
		viewTeams: false,
		viewSubsetTeams: true,
		createTeams: false,
		editTeams: false,
		deleteTeams: false,
		viewPlayers: false,
		viewPlayerRegistrations: false,
		createPlayers: false,
		editPlayers: false,
		assignPlayers: false,
		viewSeasons: false,
		editSeasons: false,
		deleteSeasons: false,
		viewSettings: false,
		createStaff: false,
		editStaff: false,
		deleteStaff: false,
		deleteLeague: false
	}
});


const ownerPromise = ownerRole.save()
	.then(() => console.log('Owner role added'));
const managerPromise = managerRole.save()
	.then(() => console.log('Manager role added'));
const coachPromise = coachRole.save()
	.then(() => console.log('Coach role added'));

Promise.all([ownerPromise, managerPromise, coachPromise])
	.then(() => console.log('Roles added'))
	.catch(err => console.log(err));
