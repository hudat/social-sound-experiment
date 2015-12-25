// Loop through the tweets. Moved out to separate js file
var fetchTweets = require('./fetchTweets');
var tweets = fetchTweets();
var Twitter = require('twitter');
var twitterService = require('../private/twitterService.js');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/socialSounds';
var port = process.env.PORT || 5000;

var twitterStream = twitterService();
// console.log(tweets);

// Pass in tweet, returns the emotion of this tweet or null if
// it doesn't match any emotion. Moved logic into its own file
var getEmotionForTweet = require('./getEmotionForTweet');

tweets.forEach(function(data) {

  var chordCreation = function(db, callback) {

    var emotion = {
      emotion: getEmotionForTweet(data.tweet),
    };

    db.collection('chords').insertOne({
      "chord": emotion
    }, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted a document into the chords collection.");
      callback(result);
    });
  };

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    chordCreation(db, function() {
      db.close();
    });
  });

  // if chord === happy {
  //   console.log("playing a happy chord")
  // };

  // if (emotion !== null) {
  //   console.log("EMOTION: " + emotion + " for TWEET: " + data.tweet);
  // }
});
