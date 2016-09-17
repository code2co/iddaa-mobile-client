angular.module('bankomaclar.services', [])
  .service('games', function($http){
    var URL = 'http://localhost:3000/games.json';
    this.getGames = function () {
      return $http.get(URL);
    };
    // function parse(){
    //   var deferred = $q.defer();
    //   $http({
    //     method: "GET",
    //     url: URL,
    //   })
    //   .success(function(result){
    //     console.log(result);
    //     deferred.resolve(result);
    //   })
    //   .error(function(){
    //     console.log("HTTP Çağrısı esnasında hata oluştu.");
    //     deferred.reject();
    //   });

      // return deferred.promise;
  });
