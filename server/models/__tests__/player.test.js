var test = require('tape');
var ObjectId = require('mongoose').Types.ObjectId;
const Player = require('../player');

test('missing player fields present error message', (assert) => {
	var player = new Player();
	const error = player.validateSync();

	assert.assert(error.errors.firstName, 'has first name missing message');
	assert.assert(error.errors.lastName, 'has last name missing message');
	assert.assert(error.errors.email, 'has email missing message');
	assert.end();
});

test('player has all fields', (assert) => {
	const playerData = {
		firstName: 'Test',
		lastName: 'Testerton',
		phoneNum: '123-456-7890',
		emergencyContact: {
			name: 'Test Emergency Name',
			phoneNum: '123-456-7890',
			email: 'test@test.com',
			relation: 'Test Relation'
		},
		address: {
			street: '123 Test St.',
			city: 'Test',
			state: 'Testerton',
			country: 'Test Country'
		},
		leagueId: ObjectId('555555555555'),
		teams: [{
			teamId: ObjectId('555555555555'),
			seasonId: ObjectId('555555555555'),
			position: ['Goalie'],
			jerseyNum: 20
		}]
	};

	var player = new Player(playerData);

	assert.equal(player.firstName, playerData.firstName, 'has first name');
	assert.equal(player.lastName, playerData.lastName, 'has last name');
	assert.equal(player.phoneNum, playerData.phoneNum, 'has phone number');
	assert.equal(player.emergencyContact.name,
					playerData.emergencyContact.name,
					'has emergency contact name');
	assert.equal(player.emergencyContact.phoneNum,
					playerData.emergencyContact.phoneNum,
					'has emergency contact phone number');
	assert.equal(player.emergencyContact.email,
					playerData.emergencyContact.email,
					'has emergency contact email');
	assert.equal(player.emergencyContact.relation,
					playerData.emergencyContact.relation,
					'has emergency contact relation');
	assert.equal(player.address.street,
					playerData.address.street,
					'has address street');
	assert.equal(player.address.city,
					playerData.address.city,
					'has address city');
	assert.equal(player.address.state,
					playerData.address.state,
					'has address state');
	assert.equal(player.address.country,
					playerData.address.country,
					'has address country');
	assert.assert(player.leagueId,
					playerData.leagueId,
					'has leagues');
	assert.assert(player.teams[0].teamId,
					playerData.teams[0].teamId,
					'has teams team id');
	assert.assert(player.teams[0].seasonId,
					playerData.teams[0].seasonId,
					'has team season id');
	assert.assert(player.teams[0].position[0],
					playerData.teams[0].position[0],
					'has team position');
	assert.assert(player.teams[0].jerseyNum,
					playerData.teams[0].jerseyNum,
					'has team jersey num');

	assert.end();
});

test('player has computed fields', (assert) => {
	const playerData = {
		firstName: 'Test',
		lastName: 'Testerton'
	};

	var player = new Player(playerData);

	assert.equal(`${player.fullName}`,
					`${playerData.firstName} ${playerData.lastName}`,
					'has full name');
	assert.end();
});
