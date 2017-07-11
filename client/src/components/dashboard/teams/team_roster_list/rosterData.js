import { cssDashboard } from '../../../style';
import { get as getObjProp } from 'lodash';
// All player data passed from the reducers is reformatted here so
// it contains the correct values for the TableTemplate component

// Column headers and data
export const colData = [
	{
		label: 'Name',
		cellProp: 'fullName',
		sortable: true
	},
	{
		label: '#',
		cellProp: 'team.jerseyNum',
		sortable: true
	},
	{
		label: 'Position',
		cellProp: 'team.position',
		sortable: true
	},
	{
		label: 'Email',
		cellProp: 'email'
	},
	{
		label: 'Phone',
		cellProp: 'phoneNum'
	},
	{
		label: 'Update',
		style: cssDashboard.table.columns.icon,
		cellProp: 'link'
	}
];


// Massage the data for the table body
const getPlayerTableData = (players) => {
	// map each row
	return players.map( player => {
		// map each cell
		return colData.map( ({cellProp, style}) => (
			{
				value: getObjProp(player, cellProp),
				style: style
			}
		));
	});
};

export default getPlayerTableData;
