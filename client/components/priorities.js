(function(){
  'use strict';

  angular.module('task')
  .factory('Priority', ['$http', function($http){

    function create(priority){
      //the second parameter attaches priority and sends to Node
      //promises require a return value
      return $http.post('/priorities', priority);
    }

    function all(){
      return $http.get('/priorities');
    }

    return {create: create, all: all};
  }]);
})();

