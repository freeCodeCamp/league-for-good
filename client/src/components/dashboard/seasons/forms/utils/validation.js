
export default function(vals) {
	const errors = {};
	const { startDate, endDate, name } = vals;

	if (!name || name.trim().length < 3) {
		errors.name = 'Seasons require a name of at least 3 characters.';
	}

	if (!startDate) {
		errors.startDate = 'Please select a starting date for the season.';
	} else if (!endDate) {
		errors.endDate = 'Please select an end date for the season.';
	} else if (Date.parse(startDate) >= Date.parse(endDate)) {
		errors.startDate = errors.endDate = 'Invalid order of dates';
	}

	return errors;
}
