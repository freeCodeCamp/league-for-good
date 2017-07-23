export default function(values) {
	let errors = {};
	if (!values.name) {
		errors.name = 'Please provide a league name';
	}
	return errors;
}
