(function(){
  'use strict';

  angular.module('task')
  .factory('Task', ['$http', function($http){

    function create(task){
      return $http.post('/task/new', task);
    }

    function all(){
      return $http.get('/tasks');
    }

    return {create: create, all: all};
  }]);


})();
