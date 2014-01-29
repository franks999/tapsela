'use strict';

/* Controllers */

var eventsApp = angular.module('eventsApp', []);

eventsApp.controller('EventListCtrl', function($scope, $http) {
  $http.get('app/events.json').success(function(data) {
    $scope.events = data;
  });
  
});

// just write a function that loads the feed directly 


eventsApp.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
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