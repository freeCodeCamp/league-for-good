/*
* Staff model stores information about each staff member in a league
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema(
	{
		email: {
			type: String,
      			required: true,
      			trim: true,
      		},
      		role: {
			type: String,
      			required: true,
      		},
      		teams: {
			type: [String],
      			default: [],
		},
      	},
	{
		collection: 'staff',
	}
);

module.exports = mongoose.model('staff', StaffSchema);
