export default function(val) {
	const errors = { team: {} };

	if (!val.team || !val.team.teamId) {
		errors.team.teamId = 'Please select a team';
	} else if (!val.playerId) {
		errors.playerId = 'Please select a player';
	} else if (!val.team.position) {
		errors.team.position = 'Please choose one or more position';
	} else if (typeof val.team.jerseyNum !== 'number') {
		errors.team.jerseyNum = 'Please select a jersey number';
	} else {
		const jerseyNum = val.team.jerseyNum;
		if (jerseyNum < 0 || jerseyNum > 99) {
				errors.team.jerseyNum = 'Jersey numbers can be between 0 and 99';
		}
	}

	return errors;
}
