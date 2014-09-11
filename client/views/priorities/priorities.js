(function(){
  'use strict';
  //Is using the ng-app 'task', no need for second parameter
  var p = angular.module('task');

  p.controller('PrioritiesCtrl', ['$scope' ,'Priority', function($scope, Priority){
    $scope.title = 'Add Priority';
    $scope.priority = {};
    $scope.priorities = [];

    $scope.all = function(){
      Priority.all().then(function(response){
        console.log(response);
        $scope.priorities = response.data.priorities;
      });
    };

    $scope.all();

    $scope.addPriority = function(){
      //save the priority from the factory
      Priority.create($scope.priority).then(function(response){
        $scope.priorities.push(response.data);
        $scope.priority = {};
      });
    };

  }]);

})();
