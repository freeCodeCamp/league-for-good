const emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

//prevent user from submitting incorrect player info
const validate = val => {
	const errors = { team :{} };
	if(!val.first_name){
		errors.first_name = 'Please provide a first name';
	}
	else if (!val.last_name) {
		errors.last_name = 'Please provide a last name';
	}
	else if (!val.email) {
		errors.email = 'Please provide an email address';
	}
	else if (!emailRegex.test(val.email)) {
		errors.email = 'Email is not in correct format';
	}
	else if (val.team && val.team.jersey_num && 
		parseInt(val.team.jersey_num) > 99 || parseInt(val.team.jersey_num < 0 )){	
		errors.team.jersey_num = 'A jersey number should be between 0 and 99';
	}
	return errors;
};

export default validate;