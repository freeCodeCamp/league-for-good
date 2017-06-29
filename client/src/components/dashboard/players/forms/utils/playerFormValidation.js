const regexString =
	'^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
const emailRegex = new RegExp(regexString, 'i');
const jerseyRegex = /^\d{1,2}$/;

// prevent user from submitting incorrect player info
const validate = val => {
	const errors = { team: {} };
	if (!val.first_name) {
		errors.first_name = 'Please provide a first name';
	} else if (!val.last_name) {
		errors.last_name = 'Please provide a last name';
	} else if (!val.email) {
		errors.email = 'Please provide an email address';
	} else if (!emailRegex.test(val.email)) {
		errors.email = 'Email is not in correct format';
	} else if (val.team && val.team.jersey_num
		&& !jerseyRegex.test(val.team.jersey_num)) {
		errors.team.jersey_num = 'A jersey number should be between 0 and 99';
	}
	return errors;
};

export default validate;
