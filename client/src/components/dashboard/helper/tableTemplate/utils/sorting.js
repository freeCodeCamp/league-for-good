// The sort functionality for the table template;


function sortColumn(colIndex) {
	return function(a, b) {
		if (a[colIndex].value < b[colIndex].value) {
			return -1;
		}
		if (a[colIndex].value > b[colIndex].value) {
			return 1;
		}
		return 0;
	};
}


// @colIndex: [Number] - which column to sort by
// @direction: [String] - sort direction; ['asc','desc','none']

export default function onSort(colIndex, direction) {

	if (colIndex !== this.sortColumnIndex || direction === 'asc') {
		return this.rows.sort(sortColumn(colIndex));
	} else if (direction === 'desc') {
		return this.rows.reverse();
	} else {
		return this.initialRows;
	}
}
