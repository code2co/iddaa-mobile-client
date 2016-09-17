angular.module('bankomaclar.factories', [])
  .factory('getGames', function($http){
    var URL = 'http://localhost:3000/games.json'
    function parse(){
      var deferred = $q.defer();
      $http({
        method: "GET",
        url: URL,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .success(function(result){
        console.log(result);
        deferred.resolve(result);
      })
      .error(function(){
        console.log("HTTP Çağrısı esnasında hata oluştu.");
        $ionicLoading.hide();
        deferred.reject();
      });

      return deferred.promise;
    }
  });
