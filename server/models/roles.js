/* 
 * Role model stores information about the roles each user can have in a league
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Privileges that each role can be assigned 
//
// Teams
// 	viewTeams: user can view the team tab and a list of all teams
// 	viewSubsetTeams: user can view the team tab and only a subset of teams
// 			 the list of teams is defined in the staff object in
// 			 the league collection
// 			 this would only be used for users that need to have limited
// 			 access to teams such as coaches or assistant coaches
// 	createTeams: user can create a team
// 	editTeams: user can edit a team
// 	deleteTeams: user can delete teams
//
// Players
// 	viewPlayers: user can view the player tab and a list of players
// 	viewPlayerRegistrations: user can view player applicants to the league
// 				 also allows the user to accept and deny applicants
//	createPlayers: user can create players
//	editPlayers: user can edit players
//	assignPlayers: user can assign players to teams
//
// Seasons
//	viewSeasons: user can view the seasons tab and a list of the seasons
//	editSeasons: user can edit a season
//	deleteSeasons: user can delete seasons
//
// Settings
//	viewSettings: user can view the settings and a list of staff members
//	editStaff: user can edit a staff member
//	deleteStaff: user can delete staff members
//	deleteLeague: user can delete the league

const defaultPrivileges = {
	viewTeams: false,
	viewSubsetTeams: false,
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
	deleteLeague: false,
};

const RoleSchema = new Schema({
	name: {
		type: String,
      		unique: true,
      		required: true,
     	},
	privileges: {
      		viewTeams: Boolean,
      		viewSubsetTeams: Boolean,
      		createTeams: Boolean,
      		editTeams: Boolean,
      		deleteTeams: Boolean,
      		viewPlayers: Boolean,
		viewPlayerRegistrations: Boolean,
      		createPlayers: Boolean,
      		editPlayers: Boolean,
      		assignPlayers: Boolean,
      		viewSeasons: Boolean,
      		editSeasons: Boolean,
      		deleteSeasons: Boolean,
      		viewSettings: Boolean,
      		createStaff: Boolean,
      		editStaff: Boolean,
      		deleteStaff: Boolean,
      		deleteLeague: Boolean,
		default: defaultPrivileges,
     	}},
	{
		collection: 'roles'
	}
);

const RoleModel = mongoose.model('role', RoleSchema);
RoleModel.schema.options.emitIndexErrors;
RoleModel.on('index', function(error) {
	console.log('index error', error);
});

module.exports = RoleModel;
