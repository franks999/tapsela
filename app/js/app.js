'use strict';

/* App Module */

var eventsApp = angular.module( 'eventsApp', [
	'ngRoute',
	'eventsappControllers',
	'eventsappServices'
]);


eventsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/events', {
        templateUrl: 'app/partials/land.html',
        controller: 'EventListCtrl'
      }).
      when('/events/:eventId', {
        templateUrl: 'app/partials/event-detail.html',
        controller: 'EventDetailCtrl'
      }).
      otherwise({
        redirectTo: '/events'
      });
  }]);

