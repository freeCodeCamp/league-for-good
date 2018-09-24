const regexString =
	'^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
const emailRegex = new RegExp(regexString, 'i');
const jerseyRegex = /^\d{1,2}$/;
const streetRegex = /[a-z0-9\s]/i;
const addressRegex = /[a-z\s]/i;

// prevent user from submitting incorrect player info
export default function(val) {
	const errors = { team: {}, address: {}};

	if (!val.firstName) {
		errors.firstName = 'Please provide a first name';
	} else if (!val.lastName) {
		errors.lastName = 'Please provide a last name';
	} else if (!val.email) {
		errors.email = 'Please provide an email address';
	} else if (!emailRegex.test(val.email)) {
		errors.email = 'Email is not in correct format';
	} else if (!val.address) {
		errors.address.street = 'Please provide a street address';
	} else if (!val.address.street || !streetRegex.test(val.address.street)) {
		errors.address.street = 'Only letters & numbers allowed';
	} else if (!val.address.city || !addressRegex.test(val.address.city)) {
		errors.address.city = 'Please provide a valid city';
	} else if (!val.address.state || !addressRegex.test(val.address.state)) {
		errors.address.state = 'Please provide a valid state';
	} else if (!val.address.country || !addressRegex.test(val.address.country)) {
		errors.address.country = 'Please provide a valid country';
	} else if (val.team && val.team.jerseyNum
		&& !jerseyRegex.test(val.team.jerseyNum)) {
		errors.team.jerseyNum = 'A jersey number should be between 0 and 99';
	}


	return errors;
}
