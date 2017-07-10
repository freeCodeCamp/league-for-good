
// prevent user from submitting a team name that is blank or too short
const validate = val => {
	const errors = {};
	if (!val.name) {
		errors.name = 'Please provide a team name';
	}
	return errors;
};

export default validate;
