var test = require('tape');
var ObjectId = require('mongoose').Types.ObjectId;
const League = require('../league');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

test('delete a league', (assert) => {
	var league = new League();

  const LeagueSettings = {
  	season: {
  		numberPerYear: {
  			type: Number,
  			default: 4,
  			min: 1
  		},
  		names: {
  			type: [String],
  			default: ['Fall', 'Winter', 'Spring', 'Summer']
  		}
  	}
  };

  const LeagueSchema = new Schema(
  	{
  		name: {
  			type: String,
  			required: true,
  			trim: true
  		},
  		settings: LeagueSettings,
  		staff: [{
  			role: String,
  			email: String,
  			teams: {
  				type: [String]
  			}
  		}],
  		pendingPlayers: [{
  			type: Schema.Types.ObjectId,
  			ref: 'player'
  		}],
  		sportType: {
  			type: String,
  			required: true
  		},
  		teams: [{
  			type: Schema.Types.ObjectId,
  			ref: 'team'
  		}]
  	},
  	{
  		collection: 'leagues'
  	}
  );



  assert.end();


});
