angular.module('bankomaclar.services', [])
  .service('games', function($http){
    var URL = 'http://localhost:3000/games.json';
    this.getGames = function () {
      return $http({
        method: 'GET',
        url: URL,
        headers: {
          "authorization": "Basic dWxzYzpVdGsxMjEzLg=="
        }
      });
    };
  });
