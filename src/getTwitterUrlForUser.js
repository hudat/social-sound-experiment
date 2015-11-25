// Example function that returns a URL to the
// twitter profile of the username you pass in
// shows how require() works and how we can write 
// a unit test for this in test/exampleFunction.js
module.exports = function(username) {
  // return null if we don't pass in a username
  if (!username) {
      return null;
  }

  return "https://twitter.com/" + username;
};
