// Function to process incoming table data so it renders correctly on screen
//
// @tableData([Object]) - an array of objects with each object representing
// 			  a row
// @columns([Object]) - an array of objects with each object representing a
// 			column, what property it should display
// 			in the row data object, the style of the column,
// 			and column span
// @cellValFn(Function) - a function used to extract the correct value from
// 			  the row object for the column
export default function processTableData(tableData, columns, cellValFn) {
	console.log('table data', tableData);
	console.log(typeof tableData);
	// map each row
	return tableData.map( rowData => {
		// map each cell
		return columns.map( colData => (
			{
				value: cellValFn(rowData, colData.cellProp, colData.action),
				colSpan: colData.colSpan || 1,
				style: colData.style
			}
		));
	});

}
