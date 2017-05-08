export default function(values){
	let errors = {};
	if(!values.name){
		errors.name = 'This field is required';
	}
	if(values.name && values.name.length < 3){
		errors.name = 'League names must be greater than 2 characters';
	}
	return errors;
}