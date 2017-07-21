export default function(date) {
	const weekDay = /^\w*\s/;
	if (typeof date === 'number') {
		date = new Date(date);
	}

	return date.toDateString().replace(weekDay, '');
}
