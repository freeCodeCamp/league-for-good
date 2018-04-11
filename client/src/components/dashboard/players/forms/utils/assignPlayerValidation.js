const jerseyNumRegrex = new RegExp('^([1-9][0-9]?)$', 'i');

export default function(val) {
	const errors = { team: {} };

	if (!val.playerId) {
		errors.playerId = 'Please select a player';
	} else if (!val.team) {
		errors.team.teamId = 'Please select a team';
	} else if (val.team && !val.team.position) {
		errors.team.position = 'Please choose one or more position';
	} else if (val.team && !val.team.jerseyNum) {
		errors.team.jerseyNum = 'Please select a jersey number';
	} else if (!jerseyNumRegrex.test(val.team.jerseyNum)) {
		errors.team.jerseyNum = 'Jersey numbers can be between 1 and 99';
	}

	return errors;
}
