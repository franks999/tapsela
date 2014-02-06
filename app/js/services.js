'use strict';

/* Services */

var eventsappServices = angular.module('eventsappServices', ['ngResource']);
 
eventsappServices.factory('Events', ['$resource',
  function($resource){
    return $resource('app/events/events2.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);