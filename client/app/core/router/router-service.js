'use strict';

angular.module('ngcourse.router', [
  'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(false);

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainCtrl as main',
      templateUrl: '/app/components/main/main.html'
    })
    .state('tasks', {
      url: '/tasks',
      controller: 'TaskListCtrl as taskList',
      templateUrl: '/app/sections/task-list/task-list.html'
    })
    .state('tasksDetail', {
      url: '/tasks/{_id}',
      template: 'task details'
    })
    .state('account', {
      url: '/my-account',
      template: 'my account {{ greeting }}',
      resolve: {
        greeting: function($timeout) {
          return $timeout(function() {
            return 'Hello';
          }, 3000);
        }
      }
    });
})

.factory('router', function ($state, $stateParams) {
  var service = {};

  service.goToTask = function(taskId) {
    $state.go('tasks.details', {_id: taskId});
  };

  service.getTaskId = function() {
    return $stateParams._id;
  };

  return service;
});
