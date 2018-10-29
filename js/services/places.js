app.factory('places', ['$http', $http => (
  $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=41.947%7C-87.6565&gslimit=30&format=json&callback=JSON_CALLBACK')
    .success(data => data)
    .error(data => data)
)]);
