'use strict';

angular.module('swFrontApp')
.directive('navbar', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/navbar.html',
		controller: 'NavigationController'
	}
});