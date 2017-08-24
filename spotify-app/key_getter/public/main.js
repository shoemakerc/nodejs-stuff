var searchTracks = function (query, access_token) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
    data: {
      q: query,
      type: 'track',
      market: 'US',
      limit: 1
    },
    success: function (response) {
      var templateSource = document.getElementById('results-template').innerHTML,
        template = Handlebars.compile(templateSource),
        resultsPlaceholder = document.getElementById('results');
      resultsPlaceholder.innerHTML = template(response);
    }
  });
};

function getHashParams() {
  /**
    * Obtains parameters from the hash of the URL
    * @return {Object} The parameters from the hash
    */
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};