const regExpPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@gmail.com$';
const emailRegex = new RegExp(regExpPattern, 'i');

// prevent user from submitting incorrect staff info
const validate = val => {
	const errors = {};

	if (!emailRegex.test(val.email)) {
		errors.email = 'Email must have a gmail address';
	} else if (!val.role) {
		errors.role = 'A role must be selected';
	}
	// TODO: Add a validator to check for same email addresses in staff list

	return errors;
};

export default validate;
