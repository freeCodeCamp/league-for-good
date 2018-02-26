var test = require('tape');
var ObjectId = require('mongoose').Types.ObjectId;
const Game = require('../game');
const Player = require('../player');

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

const date = Date('February 25, 2018 03:23:00');
const gameData = {
  seasonId: ObjectId('555555555555'),
  homeTeamId: ObjectId('555555555555'),
  awayTeamId: ObjectId('555555555555'),
  datePlayed: date,
  venue: 'Test Venue',
  scores: {
    home: 100,
    away: 20
  },
  rosters: {
    home: players,
    away: players
  },
};

test('missing game required fields presents error message', (assert) => {
  var game = new Game();
  const error = game.validateSync();

  assert.assert(error.errors.datePlayed, 'has date missing');
  assert.end();
});

test('game has all fields', (assert) => {
  var game = new Game(gameData);

  assert.equal(game.seasonId, gameData.seasonId, 'has season id');
  assert.equal(game.homeTeamId, gameData.homeTeamId, 'has home id');
  assert.equal(game.awayTeamId, gameData.awayTeamId, 'has away id');
  assert.equal(game.datePlayed.toString(), gameData.datePlayed, 'has date');
  assert.equal(game.venue, gameData.venue, 'has venue');
  assert.same(game.scores, gameData.scores, 'has scores');
  assert.same(game.rosters[0], gameData.rosters[0], 'has rosters')
  assert.end();
});
