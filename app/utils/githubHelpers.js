var axios = require('axios');

// you can sign up for github api keys so you dont get rate limited
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);  // axios.get returns a promise
}

function getRepos (username) {
  // fetch github usernames repos
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100'); // only going to grab 100 pages of repositories max.
}

function getTotalStars (repos) {
  // calculate all the stars the user has
  return repos.data.reduce(function (prev, current) {  // current repository we are looping over
    return prev + current.stargazers_count
  }, 0) // start at 0
}

function getPlayersData (player) {
  // Get repos
  return getRepos(player.login)  // get the players repositories
  // promises to getTotalStars
    .then(getTotalStars)
    .then(function (totalStars) {
      // return object with that data
      return {  // return an object with # of followers and stars
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  // return an array, after doing some fancy algorithms to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,  // a followers is worth 3 times as many points as totalStars
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo: function (players) {  // going to be an array of players (2 names/ players)
    // fetch some data from Github
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {  // when both usernames are resolved then this function will run
      // console.log('INFO', info);
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {console.warn('Error in getPlayersInfo: ', err)})
  },
  battle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;
