const regexString =
	'^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
const emailRegex = new RegExp(regexString, 'i');
const jerseyRegex = /^\d{1,2}$/;
const phoneString =
'^(\d{3}|\d)(\s|-|\d{3,11})?(\d{3}|\(\d{3}\))?((\s|-)\d{3}(\s|-))?\d{4}';
const phoneRegex = new RegExp(phoneString, 'g');
// prevent user from submitting incorrect player info
export default function(val) {
	const errors = { team: {} };
	if (!val.firstName) {
		errors.firstName = 'Please provide a first name';
	} else if (!val.lastName) {
		errors.lastName = 'Please provide a last name';
	} else if (!val.email) {
		errors.email = 'Please provide an email address';
	} else if (!emailRegex.test(val.email)) {
		errors.email = 'Email is not in correct format';
	} else if (!phoneRegex.test(val.phoneNum)) {
		errors.phoneNum = 'Please provide a valid phone number';
	} else if (val.team && val.team.jerseyNum
		&& !jerseyRegex.test(val.team.jerseyNum)) {
		errors.team.jerseyNum = 'A jersey number should be between 0 and 99';
	}
	return errors;
}
