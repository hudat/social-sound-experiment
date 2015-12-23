// This lib contains useful cross platform functions.
// We use the `contains` fn
var _ = require('underscore');

// pass in tweet, returns the emotion of this tweet or null if it doesn't match any emotion
module.exports = function(tweet) {
  // loop through sadness array of words. return 'sadness' if tweet contains a word in that array
  var sadList = ["sad", "upset", "depressed", "hurt", "melancholy", "feeling down"];
  var happyList = ["happy", "joy", "joyful", "excited", "ecstatic", "looking forward", "content", "pleasant"]
  var afraidList = ["afraid", "i'm afraid", "fearful", "fear", "scared", "shocked", "surprised", "startled", "alarmed"]
  var angryList = ["angry", "mad", "disgusted", "annoyed", "frustrated", "pissed off"]

  // split tweet into separate words
  var tweetWords = tweet.split(" ");

  // loop through each word in the tweet. We use a for() loop because here because
  // it lets us exit prematurely once we find the emotion (the return statement)
  for (var i = 0; i < tweetWords.length; ++i) {
    var word = tweetWords[i];
    if (_.contains(sadList, word)) {
      return 'sad';
    }
    if (_.contains(happyList, word)) {
      return 'happy';
    }
    if (_.contains(afraidList, word)) {
      return 'afraid';
    }
    if (_.contains(angryList, word)) {
      return 'angry';
    }
  };
  return null;
};
