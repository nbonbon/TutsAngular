'use strict';

describe('Controller: MainCtrl', function () {
	
	var location, scope;
	
	// fetch the specific module (or in the case the whole applicaiton)
	beforeEach(module('swFrontApp')); 
	
	// inject needed dependencies (mock them, find them, instantiate)
	beforeEach(inject(function($controller, $rootScope, $location) {
		location = $location;
		scope = $rootScope.$new();
		$controller('NavigationController', {
			$scope: scope
		});
	}));

	// actual test
	describe('isActive', function() {
		it('returns true when paths are the same', function() {
			location.path('/test');
			expect(scope.isActive('/test')).toBeTruthy();
		});
		it('returns false when paths are different', function() {
			location.path('/test');
			expect(scope.isActive('/tset')).toBeFalsy();
		});
		it('returns true if it starts with the same word', function() {
			location.path('/test/1/show');
			expect(scope.isActive('/test')).toBeTruthy();
		});
		it('returns true if it starts with the same word followed by query string', function() {
			location.path('/test?id=1');
			expect(scope.isActive('/test')).toBeTruthy();
		});
	});
});
