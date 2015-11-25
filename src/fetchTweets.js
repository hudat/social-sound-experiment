module.exports = function() {
  var tweetsJson = '{ "tweets": [ { "tweet": "scared to leave my house. the world\'s a mess", "user": "blondesally" }, { "tweet": "excited for this new project", "user": "dwaynejohnson" }, { "tweet": "pissed off at this fucking mediocre scumbags", "user": "billhicks" }, { "tweet": "happy happenstance", "user": "harleyquinn" }, { "tweet": "using sadness to guide", "user": "joker" }, { "tweet": "surprised to see hyde", "user": "jekyll" }, { "tweet": "rage is here", "user": "morello" }, { "tweet": "confused here at the crossroads", "user": "faulkner" }, { "tweet": "free and alive", "user": "robertjohnson" } ] }';
  var data = JSON.parse(tweetsJson);
  return data.tweets;
};
