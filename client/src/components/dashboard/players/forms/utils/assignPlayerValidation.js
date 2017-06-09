
export default function(val){
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
	if (!val.jersey_num ) {
		errors.jersey_num = 'Please select a jersey number';
	}
	return errors;
}
