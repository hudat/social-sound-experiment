// Loop through the tweets. Moved out to separate js file
var fetchTweets = require('./fetchTweets');
var tweets = fetchTweets();
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
