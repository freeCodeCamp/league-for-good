var test = require('tape');
const Player = require('../player');

test('missing player fields present error message', (assert) => {
	var player = new Player();
	const error = player.validateSync();

	assert.assert(error.errors.first_name, 'has first name missing message');
	assert.assert(error.errors.last_name, 'has last name missing message');
	assert.assert(error.errors.email, 'has email missing message');
	assert.end();
});

test('player has all fields', (assert) => {
	const playerData = {
		first_name: 'Test',
		last_name: 'Testerton',
		phone_num: '123-456-7890',
		emergency_contact: {
			name: 'Test Emergency Name',
			phone_num: '123-456-7890',
			email: 'test@test.com',
			relation: 'Test Relation'
		},
		address: {
			street: '123 Test St.',
			city: 'Test',
			state: 'Testerton',
			country: 'Test Country'
		}
	};

	var player = new Player(playerData);

	assert.equal(player.first_name, playerData.first_name, 'has first name');
	assert.equal(player.last_name, playerData.last_name, 'has last name');
	assert.equal(player.phone_num, playerData.phone_num, 'has phone number');
	assert.equal(player.emergency_contact.name,
					playerData.emergency_contact.name,
					'has emergency contact name');
	assert.equal(player.emergency_contact.phone_num,
					playerData.emergency_contact.phone_num,
					'has emergency contact phone number');
	assert.equal(player.emergency_contact.email,
					playerData.emergency_contact.email,
					'has emergency contact email');
	assert.equal(player.emergency_contact.relation,
					playerData.emergency_contact.relation,
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
	assert.assert(player.leagues, 'has leagues');
	assert.assert(player.teams, 'has teams');
	assert.end();
});

test('player has computed fields', (assert) => {
	const playerData = {
		first_name: 'Test',
		last_name: 'Testerton'
	};

	var player = new Player(playerData);

	assert.equal(`${player.full_name}`,
					`${playerData.first_name} ${playerData.last_name}`,
					'has full name');
	assert.end();
});
