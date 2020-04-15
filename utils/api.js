const axios = require('axios')

const api = {
    getUser (username) {
      const queryUrl = `https://api.github.com/users/${username}`;
      return axios.get(queryUrl).then(function(res) {
        console.log(res.data.avatar_url);
        return res.data.avatar_url;
      })
    }
  }
  
  module.exports = api
  