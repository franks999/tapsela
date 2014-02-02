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
		'hood': 'Frenchman St'
	},
	{
		'id':'1',
		'hood': 'French Qtr'
	},
	{
		'id':'2',
		'hood': 'Marigny'
	},
	{
		'id':'3',
		'hood': 'CBD'
	},
	{
		'id':'4',
		'hood': 'Carrollton'
	},
	{
		'id':'5',
		'hood': 'Uptown'
	},
	{
		'id':'6',
		'hood': 'Garden District'
	},
	{
		'id':'7',
		'hood': 'City Park'
	},
		{
		'id':'8',
		'hood': 'Northshore'
	}
	];
	$scope.selectedItem = $scope.model[0];  
});

eventsApp.controller("Gambit", ['$scope','FeedService', function($scope, GamFeed) {      
	GamFeed.parseFeed('http://www.bestofneworleans.com/gambit/Rss.xml?section=1222776').then(function(res){
		$scope.gambit = res.data.responseData.feed.entries;
	});
}]);

eventsApp.controller("NewWWL", ['$scope','FeedService', function($scope, WWLFeed) {      
	WWLFeed.parseFeed('http://events.wwltv.com/default.aspx?ct=r&ename=rsseventspage').then(function(res){
		$scope.wwl = res.data.responseData.feed.entries;
	});
}]);

eventsApp.controller("FeedCtrl", ['$scope','FeedService', function ($scope, Feed) {    
	$scope.loadButonText="Load";
	$scope.loadFeed=function(e){        
		Feed.parseFeed($scope.feedSrc).then(function(res){
			$scope.loadButonText=angular.element(e.target).text();
			$scope.feeds=res.data.responseData.feed.entries;
		});
	};
}]);
 
eventsApp.factory('FeedService',['$http',function($http){
	return {
		parseFeed : function(url){
			return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
	};
}]);