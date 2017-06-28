
/*
The mongoose update method ignores the plugin that formats string inputs,
	so this function normalizes the text input to ensure consistency
*/

export default function(value, prevVal) {
	const firstLetter = /^\w$/;
	const length = value.length;

	// Prevent user from adding non-alphanumeric first char
	if (length === 1 && !firstLetter.test(value)) {
		return prevVal;
	}

	// Capitalize first character input
	if (firstLetter.test(value)) {
		return value.toUpperCase();
	}
	// Capitalize first character after a space or hyphen
	// (as long as the user isnt hitting backspace)
	else if ( /\W\w$/.test(value) && length > prevVal.length) {
		return prevVal + value.charAt(length - 1).toUpperCase();
	}
	return value;
}
