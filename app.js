var getTweet1 = function() {
  return "Feeling kinda down today. My favorite team lost"
}

var getTweet2 = function() {
  return "Excited for this new role!"
}

tweet1 = getTweet1();

emotion = tweet1.search("down");

if (emotion == -1) {
  console.log("down was not found in that tweet")
};

if (emotion != -1) {
  var chords = []
  chords.push("major");
}

console.log(chords);
