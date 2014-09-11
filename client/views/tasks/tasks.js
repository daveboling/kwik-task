(function(){
  'use strict';

  var t = angular.module('task'); //already defined inside index.js

  t.controller('TasksCtrl', ['$scope', 'Priority', 'Task', function($scope, Priority, Task){
    $scope.title = 'View Tasks';
    $scope.task = {};
    $scope.tasks = {};
    $scope.priorities = [];

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    $scope.addTask = function(){
      $scope.task.priority = JSON.parse($scope.task.priority);
      Task.create($scope.task).then(function(response){
        $scope.tasks.push($scope.task);
        $scope.task = {};
      });
    };

    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });


  }]);
})();
