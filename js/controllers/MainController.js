app.controller('MainController', ['$scope', 'places', function ($scope, places) {
  $scope.mapCenter = { lat: 41.947, lng: -87.6565, zoom: 17 };
  places.success((data) => {
    $scope.geodata = data;
    $scope.mapMarkers = geodataToMarkers($scope.geodata);
  });
}]);
