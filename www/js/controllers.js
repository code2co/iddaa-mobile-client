angular.module('bankomaclar.controllers', ['bankomaclar.services'])

.controller('GamesCtrl', function($scope, games) {
  games.getGames()
    .then(function(response){
      $scope.games = response.data;
    }, function (error) {
      console.log("Error getting HTTP Data");
    });

  $scope.doRefresh = function() {
    games.getGames()
      .then(function(response){
        $scope.games = response.data;
        $scope.$broadcast('scroll.refreshComplete');
      }, function (error) {
        console.log("Error getting HTTP Data");
      });
  };

})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('GameCtrl', function($scope, $stateParams) {
});
