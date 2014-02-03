'use strict';

/* Controllers */

var eventsApp = angular.module('eventsApp', []);

eventsApp.controller('EventListCtrl', function($scope, $http) {
  $http.get('events2.json').success(function(data) {
    $scope.events2 = data;
	$scope.filter = $scope.model[0];
  });
  $scope.model = [{
		'id':'0',
		'dist': 'Frenchman St'
	},
	{
		'id':'1',
		'dist': 'French Qtr'
	},
	{
		'id':'2',
		'dist': 'Marigny'
	},
	{
		'id':'3',
		'dist': 'CBD'
	},
	{
		'id':'4',
		'dist': 'Carrollton'
	},
	{
		'id':'5',
		'dist': 'Uptown'
	},
	{
		'id':'6',
		'dist': 'Garden District'
	},
	{
		'id':'7',
		'dist': 'City Park'
	},
		{
		'id':'8',
		'dist': 'Northshore'
	}
	];
	$scope.selectedItem = $scope.model[0];  
});