/*
* Team model stores information about each team, players, and seasons they played in
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const capitalize = require('./plugins/capitalize');

const TeamSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
	},
	players: [{type: Schema.Types.ObjectId, ref: 'player'}],
	seasons: [{type: Schema.Types.ObjectId, ref: 'season'}],
	currently_active: {
		type: Boolean,
		default: false,
	},
	league_id: {
		type: Schema.Types.ObjectId,
		ref: 'league',
	},
	staff: [
	 	{
			role: String,
			name: String,
			email: String,
			phone_num: String,
		}
	],
},
{ 
	collection: 'teams',
});

TeamSchema.plugin(capitalize, {fields: ['name']});

module.exports = mongoose.model('team', TeamSchema);
