var test = require('tape');
const mongoose = require('mongoose');
const User = require('../user');

test('missing user fields present error message', (assert) => {
	var user = new User();
	const error = user.validateSync();

	assert.assert(error.errors.name, 'has name missing message');
	assert.assert(error.errors.email, 'has email missing message');
	assert.end();
});

test('user has all fields', (assert) => {
	const userData = {
		name: 'Test Name',
		email: 'test@test.com',
		avatar: 'testAvatar',
		google_id: 'testGoogleId',
	};

	var user = new User(userData);

	assert.equal(user.name, userData.name, 'has name');
	assert.equal(user.email, userData.email, 'has email');
	assert.equal(user.avatar, userData.avatar, 'has avatar');
	assert.equal(user.google_id, userData.google_id, 'has Google ID');
	assert.end();
});
