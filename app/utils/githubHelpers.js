var axios = require('axios');

// you can sign up for github api keys so you dont get rate limited
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);  // axios.get returns a promise
}

var helpers = {
  getPlayersInfo: function (players) {  // going to be an array of players (2 names/ players)
    // fetch some data from Github
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function (info) {  // when both usernames are resolved then this function will run
      // console.log('INFO', info);
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {  // will catch errors
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;
