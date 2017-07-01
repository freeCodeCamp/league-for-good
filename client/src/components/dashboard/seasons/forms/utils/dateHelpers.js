
//Get the minimum allowble date on the 'end_date' field based on the start_dates value
export function getMinDate({ start_date }, leaugeSettings) {
	
	if (!start_date) return;

	const { season: { numberPerYear }} = leaugeSettings;
	const numberOfMonths = 12 / numberPerYear - 1;
	//Take the number of seasons per year that was set by league owner to get the number of months from start_date
	//Subtract 1 to allow so season length doesnt need to be exact (so some seasons can be longer than others)	
	
	let date = new Date(start_date);

	date.setMonth(date.getMonth() + numberOfMonths);

	return date;
}


export function getFormattedDate(date) {
	const d = new Date(date);
	const dayOfWeek = /^\w*\s/;

	return d.toDateString().replace(dayOfWeek, '');
}