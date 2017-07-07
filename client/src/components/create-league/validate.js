export default function(values) {
	let errors = {};
	if (!values.name) {
		errors.name = 'Please provide a league name';
	}
	if (values.name && values.name.length <= 2) {
		errors.name = 'League names must be at least 2 characters';
	}
	return errors;
}
