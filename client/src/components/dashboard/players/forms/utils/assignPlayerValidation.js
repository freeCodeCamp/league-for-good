
export default function(val) {
	const errors = {};

	if (!val.playerId) {
		errors.playerId = 'Please select a player';
	}
	if (!val.teamId) {
		errors.teamId = 'Please select a team';
	}
	if (!val.position) {
		errors.position = 'Please choose one or more position';
	}
	if (!val.jerseyNum ) {
		errors.jerseyNum = 'Please select a jersey number';
	}
	return errors;
}
