var tap = require('tap');
var getTwitterUrlForUser = require('../src/getTwitterUrlForUser');

// make sure URL looks valid, as we expect, for this username
tap.equal("https://twitter.com/badbanana", getTwitterUrlForUser("badbanana"));

// make sure this func returns null if no username is passed
tap.equal(null, getTwitterUrlForUser());
