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

	return errors;
};

// have to disable eslint since undefined is used by redux form for success
/*eslint-disable*/
export const uniqueEmailVal = (staff, value) => 
	staff.some(staff => staff.email === value) ? 'Email already used' : undefined
/* eslint-enable*/

export default validate;
