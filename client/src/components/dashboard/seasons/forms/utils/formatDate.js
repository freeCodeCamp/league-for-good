export default function(date) {
	const weekDay = /^\w*\s/;
	return date.toDateString().replace(weekDay, '');
}
