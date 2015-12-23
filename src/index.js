// Loop through the tweets. Moved out to separate js file
var fetchTweets = require('./fetchTweets');
var tweets = fetchTweets();
var Twitter = require('twitter');
var twitterService = require('../private/twitterService.js');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/socialSounds';

// var twitterStream = twitterService();
// console.log(tweets);

// Pass in tweet, returns the emotion of this tweet or null if
// it doesn't match any emotion. Moved logic into its own file
var getEmotionForTweet = require('./getEmotionForTweet');

tweets.forEach(function(data) {
  var emotion = getEmotionForTweet(data.tweet);
  if (emotion !== null) {
    console.log("EMOTION: " + emotion + " for TWEET: " + data.tweet);
  }
});

var insertDocument = function(db, callback) {
  db.collection('restaurants').insertOne({
    "address": {
      "street": "2 Avenue",
      "zipcode": "10075",
      "building": "1480",
      "coord": [-73.9557413, 40.7720266]
    },
    "borough": "Manhattan",
    "cuisine": "Italian",
    "grades": [{
      "date": new Date("2014-10-01T00:00:00Z"),
      "grade": "A",
      "score": 11
    }, {
      "date": new Date("2014-01-16T00:00:00Z"),
      "grade": "B",
      "score": 17
    }],
    "name": "Vella",
    "restaurant_id": "41704620"
  }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback(result);
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
