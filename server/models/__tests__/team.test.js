var test = require('tape');
const Team = require('../team');
const Player = require('../player');
var ObjectId = require('mongoose').Types.ObjectId;

const playerRoman = {
    firstName: 'JR',
    lastName: 'Riquelme',
    email: 'roman@boca.com'      
};

const playerPalermo = {
    firstName: 'Martin',
    lastName: 'Palermo',
    email: 'mp9@boca.com'      
};

var roman = new Player(playerRoman);
var palermo = new Player(playerPalermo);
var players = [roman, palermo];

const teamData = {
    name: 'Boca Juniors',
    players: players,
    currentlyActive: true,
    leagueId: ObjectId('555555555555'),
};

var team = new Team(teamData);

test('missing team fields present error message', (assert) => {
    var t = new Team();
    const error = t.validateSync();

    assert.assert(error.errors.name, 'has name missing');
    assert.end();
});

test('team has a name', (assert) => {
    assert.equal(team.name, teamData.name, 'has name');
    assert.end();
});

test('team has players', (assert) => {
    assert.equal(team.players.length, players.length, 'has two players in team');
    assert.end();

});

test('team has all fields', (assert) => {
    assert.equal(team.name, teamData.name, 'has name');
    assert.equal(team.players[0], teamData.players[0], 'has players');
    assert.equal(team.currentlyActive, teamData.currentlyActive, 'is currently active');
    assert.equal(team.leagueId, teamData.leagueId, 'has league id');
    assert.end();
});